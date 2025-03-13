import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

export default function CPFInput({
  label = 'CPF:',
  containerStyle,
  inputStyle,
  placeholder = '000.000.000-00',
  placeholderTextColor = '#999',
  value = '',           // Valor vindo do componente pai
  onChangeText,         // Função callback para atualizar o valor no pai
}) {
  const [isFocused, setIsFocused] = useState(false);

  function maskCPF(val) {
    // Remove caracteres não numéricos e limita a 11 dígitos
    const digits = val.replace(/\D/g, '').slice(0, 11);
    if (!isFocused) {
      // Quando não está focado, mostra a máscara completa com underscores
      const padded = digits.padEnd(11, '_');
      return `${padded.substring(0, 3)}.${padded.substring(3, 6)}.${padded.substring(6, 9)}-${padded.substring(9, 11)}`;
    } else {
      // Quando está focado, mostra somente os dígitos formatados sem preenchimento extra
      let formatted = digits;
      if (digits.length > 3) {
        formatted = digits.slice(0, 3) + '.' + digits.slice(3);
      }
      if (digits.length > 6) {
        formatted = formatted.slice(0, 7) + '.' + formatted.slice(7);
      }
      if (digits.length > 9) {
        formatted = formatted.slice(0, 11) + '-' + formatted.slice(11);
      }
      return formatted;
    }
  }

  const handleChange = (text) => {
    const newValue = text.replace(/\D/g, '');
    if (onChangeText) {
      onChangeText(newValue);
    }
  };

  return (
    <View style={containerStyle}>
      {label ? <Text>{label}</Text> : null}
      <TextInput
        style={inputStyle}
        value={maskCPF(value)}
        onChangeText={handleChange}
        keyboardType="numeric"
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}
