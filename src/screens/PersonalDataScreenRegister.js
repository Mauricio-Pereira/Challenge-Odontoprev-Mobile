import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "../styles/personalDataStyles";
import CPFInput from "../components/CPFInput";
import DateInput from "../components/DateInput";
import { isOlderThan18 } from "../utils/formatters";
import Header from "../components/Header";

export default function PersonalDataScreenRegister({ navigation }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNasc, setDataNasc] = useState("");

  // Estados de erro para cada campo
  const [nomeError, setNomeError] = useState("");
  const [sobrenomeError, setSobrenomeError] = useState("");
  const [cpfError, setCpfError] = useState("");
  const [dataNascError, setDataNascError] = useState("");

  function handleNext() {
    let valid = true;

    // Limpa os erros anteriores
    setNomeError("");
    setSobrenomeError("");
    setCpfError("");
    setDataNascError("");

    if (!nome.trim()) {
      setNomeError("Preencha o nome.");
      valid = false;
    }
    if (!sobrenome.trim()) {
      setSobrenomeError("Preencha o sobrenome.");
      valid = false;
    }
    if (cpf.includes("_") || cpf.length < 11) {
      setCpfError("Preencha o CPF corretamente.");
      valid = false;
    }
    if (dataNasc.includes("_") || dataNasc.length !== 8) {
      setDataNascError("Preencha a data de nascimento corretamente.");
      valid = false;
    } else {
      // Converte a data para o formato DD/MM/AAAA para validar a idade
      const formattedDate = `${dataNasc.slice(0, 2)}/${dataNasc.slice(
        2,
        4
      )}/${dataNasc.slice(4, 8)}`;
      if (!isOlderThan18(formattedDate)) {
        setDataNascError("Você deve ter 18 anos ou mais.");
        valid = false;
      }
    }

    if (valid) {
      const formattedDate = `${dataNasc.slice(0, 2)}/${dataNasc.slice(
        2,
        4
      )}/${dataNasc.slice(4, 8)}`;
      navigation.navigate("Address", {
        nome,
        sobrenome,
        cpf,
        dataNasc: formattedDate,
      });
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 0 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // ajuste esse valor conforme necessário
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Dados Pessoais</Text>
          <TouchableOpacity
            style={styles.closeButtonContainer}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu primeiro nome"
          placeholderTextColor={styles.placeholderColor.color}
          value={nome}
          onChangeText={setNome}
        />
        {nomeError ? <Text style={styles.errorText}>{nomeError}</Text> : null}

        <Text style={styles.label}>Sobrenome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu último nome"
          placeholderTextColor={styles.placeholderColor.color}
          value={sobrenome}
          onChangeText={setSobrenome}
        />
        {sobrenomeError ? (
          <Text style={styles.errorText}>{sobrenomeError}</Text>
        ) : null}

        <CPFInput
          containerStyle={{ marginBottom: 16 }}
          inputStyle={styles.input}
          placeholderTextColor={styles.placeholderColor.color}
          value={cpf}
          onChangeText={setCpf}
        />
        {cpfError ? <Text style={styles.errorText}>{cpfError}</Text> : null}

        <DateInput
          containerStyle={{ marginBottom: 16 }}
          inputStyle={styles.input}
          placeholderTextColor={styles.placeholderColor.color}
          value={dataNasc}
          onChangeText={setDataNasc}
        />
        {dataNascError ? (
          <Text style={styles.errorText}>{dataNascError}</Text>
        ) : null}

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Endereço</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
