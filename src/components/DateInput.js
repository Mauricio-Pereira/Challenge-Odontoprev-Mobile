import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

export default function DateInput({
  label = 'Data:',
  containerStyle,
  inputStyle,
  placeholder = 'DD/MM/AAAA',
  placeholderTextColor = '#999',
  value = '',
  onChangeText,
}) {
  const [isFocused, setIsFocused] = useState(false);

  function maskDate(val) {
    // Remove tudo que não é dígito e limita a 8 dígitos (DDMMYYYY)
    const digits = val.replace(/\D/g, '').slice(0, 8);
    if (!isFocused) {
      // Quando não está focado, preenche com underscores
      const padded = digits.padEnd(8, '_');
      return `${padded.substring(0, 2)}/${padded.substring(2, 4)}/${padded.substring(4, 8)}`;
    } else {
      // Quando focado, formata apenas os dígitos já digitados
      let formatted = digits;
      if (digits.length > 2) {
        formatted = digits.slice(0, 2) + '/' + digits.slice(2);
      }
      if (digits.length > 4) {
        formatted = formatted.slice(0, 5) + '/' + formatted.slice(5);
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
        value={maskDate(value)}
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
