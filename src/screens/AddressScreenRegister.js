import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import styles from "../styles/addressStyles";
import { formatCEP } from "../utils/formatters";
import Header from "../components/Header";

export default function AddressScreenRegister({ navigation, route }) {
  const { nome, sobrenome, cpf, dataNasc } = route.params;
  const [cep, setCep] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");

  // Enquanto o CEP não for válido, os demais campos ficam inativos
  const [disabled, setDisabled] = useState(true);

  // Flag que indica que a API preencheu automaticamente alguns campos
  const [autoPopulated, setAutoPopulated] = useState(false);

  // Flag que indica que a API preencheu automaticamente o campo de bairro
  const [autoPopulatedBairro, setAutoPopulatedBairro] = useState(false);

  //Flag que indica que a API preencheu automaticamente o campo de rua
  const [autoPopulatedRua, setAutoPopulatedRua] = useState(false);

  // Estados de erro para os campos obrigatórios
  const [cepError, setCepError] = useState("");
  const [estadoError, setEstadoError] = useState("");
  const [cidadeError, setCidadeError] = useState("");
  const [bairroError, setBairroError] = useState("");
  const [ruaError, setRuaError] = useState("");
  const [numeroError, setNumeroError] = useState("");

  async function handleCepChange(value) {
    const formatted = formatCEP(value);
    setCep(formatted);
    setCepError(""); // limpa erro ao digitar

    // Se o CEP não tiver 8 dígitos (sem contar hífen), limpa os campos e mantém disabled true
    if (formatted.replace("-", "").length !== 8) {
      setEstado("");
      setCidade("");
      setBairro("");
      setRua("");
      setAutoPopulatedBairro(false);
      setAutoPopulatedRua(false);
      setDisabled(true);
      return;
    }

    // CEP completo: busca na API
    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${formatted.replace("-", "")}/json/`
      );
      const data = await response.json();
      if (!data.erro) {
        setEstado(data.uf || "");
        setCidade(data.localidade || "");

        if (data.bairro) {
          setBairro(data.bairro);
          setAutoPopulatedBairro(true);
        } else {
          setBairro("");
          setAutoPopulatedBairro(false);
        }

        if (data.logradouro) {
          setRua(data.logradouro);
          setAutoPopulatedRua(true);
        } else {
          setRua("");
          setAutoPopulatedRua(false);
        }
        setDisabled(true);
      } else {
        // CEP inválido: limpa os campos e exibe erro
        setEstado("");
        setCidade("");
        setBairro("");
        setRua("");
        setAutoPopulatedBairro(false);
        setAutoPopulatedRua(false);
        setDisabled(true);
        setCepError("CEP inválido.");
      }
    } catch (error) {
      console.log(error);
      setEstado("");
      setCidade("");
      setBairro("");
      setRua("");
      setAutoPopulatedBairro(false);
      setAutoPopulatedRua(false);
      setDisabled(true);
      setCepError("Erro ao buscar CEP.");
    }
  }

  function handleFinalize() {
    // Limpa os erros anteriores
    setCepError("");
    setEstadoError("");
    setCidadeError("");
    setBairroError("");
    setRuaError("");
    setNumeroError("");

    let valid = true;
    if (!cep.trim() || cep.replace("-", "").length !== 8) {
      setCepError("Preencha o CEP corretamente.");
      valid = false;
    }
    if (!estado.trim()) {
      setEstadoError("Preencha o Estado.");
      valid = false;
    }
    if (!cidade.trim()) {
      setCidadeError("Preencha a Cidade.");
      valid = false;
    }
    if (!bairro.trim()) {
      setBairroError("Preencha o Bairro.");
      valid = false;
    }
    if (!rua.trim()) {
      setRuaError("Preencha a Rua.");
      valid = false;
    }
    if (!numero.trim()) {
      setNumeroError("Preencha o Número.");
      valid = false;
    }
    if (!valid) return;

    navigation.navigate("AccountData", {
      nome,
      sobrenome,
      cpf,
      dataNasc,
      cep,
      estado,
      cidade,
      bairro,
      rua,
      numero,
      complemento,
    });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Endereço</Text>
        <TouchableOpacity
          style={styles.closeButtonContainer}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>

      {/* CEP */}
      <Text style={styles.label}>CEP</Text>
      <TextInput
        style={styles.input}
        placeholder="12345-678"
        placeholderTextColor={styles.placeholderColor?.color}
        value={cep}
        onChangeText={handleCepChange}
        keyboardType="numeric"
      />
      {cepError ? <Text style={styles.errorText}>{cepError}</Text> : null}

      {/* Estado */}
      <Text style={styles.label}>Estado</Text>
      <TextInput
        style={[
          styles.input,
          (disabled || (autoPopulated && cep.trim())) && styles.disabledInput,
        ]}
        placeholder="Estado"
        placeholderTextColor={styles.placeholderColor?.color}
        value={estado}
        onChangeText={setEstado}
        editable={!disabled} // permanece desabilitado se preenchido pela API
      />
      {estadoError ? <Text style={styles.errorText}>{estadoError}</Text> : null}

      {/* Cidade */}
      <Text style={styles.label}>Cidade</Text>
      <TextInput
        style={[
          styles.input,
          // se auto-populado, aplica estilo desabilitado e antes do cep preenchido
          (disabled || (autoPopulated && cep.trim())) && styles.disabledInput,
        ]}
        placeholder="Cidade"
        placeholderTextColor={styles.placeholderColor?.color}
        value={cidade}
        onChangeText={setCidade}
        editable={!disabled}
      />
      {cidadeError ? <Text style={styles.errorText}>{cidadeError}</Text> : null}

      <Text style={styles.label}>Bairro</Text>
      <TextInput
        style={[
          styles.input,
          (autoPopulatedBairro || cep.length !== 9) && styles.disabledInput,
        ]}
        placeholder="Bairro"
        placeholderTextColor={styles.placeholderColor?.color}
        value={bairro}
        onChangeText={setBairro}
        // se preenchido pela API ou se o cep nao tiver 9 caracteres, desabilita
        editable={!autoPopulatedBairro && cep.length === 9}
      />
      {bairroError ? <Text style={styles.errorText}>{bairroError}</Text> : null}

      <Text style={styles.label}>Rua</Text>
      <TextInput
        style={[
          styles.input,
          (autoPopulatedRua || cep.length !== 9) && styles.disabledInput,
        ]}
        placeholder="Rua"
        placeholderTextColor={styles.placeholderColor?.color}
        value={rua}
        onChangeText={setRua}
        editable={!autoPopulatedRua && cep.length === 9}
      />
      {ruaError ? <Text style={styles.errorText}>{ruaError}</Text> : null}

      {/* Número */}
      <Text style={styles.label}>Número</Text>
      <TextInput
        style={[
          styles.input,
          (autoPopulated || cep.length !== 9) && styles.disabledInput,
        ]}
        placeholder="Número"
        placeholderTextColor={styles.placeholderColor?.color}
        value={numero}
        onChangeText={setNumero}
        editable={!autoPopulated && cep.length === 9}
      />
      {numeroError ? <Text style={styles.errorText}>{numeroError}</Text> : null}

      {/* Complemento */}
      <Text style={styles.label}>Complemento</Text>
      <TextInput
        style={styles.input}
        placeholder="Complemento"
        placeholderTextColor={styles.placeholderColor?.color}
        value={complemento}
        onChangeText={setComplemento}
      />

      <TouchableOpacity style={styles.finalizeButton} onPress={handleFinalize}>
        <Text style={styles.finalizeButtonText}>Dados de Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
