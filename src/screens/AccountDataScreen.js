import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/accountDataScreen";
import { ScrollView } from "react-native";
import Header from "../components/Header";

export default function AccountDataScreen({ navigation, route }) {
  const {
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
  } = route.params;

  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  const [emailError, setEmailError] = useState("");
  const [telefoneError, setTelefoneError] = useState("");
  const [confirmSenhaError, setConfirmSenhaError] = useState("");

  // Lista de requisitos da senha, cada item possui:
  // 1) texto de exibição
  // 2) função que valida o texto da senha
  const passwordRequirements = [
    {
      text: "Mínimo de 8 dígitos",
      validate: (pass) => pass.length >= 8,
    },
    {
      text: "Pelo menos uma letra maiúscula",
      validate: (pass) => /[A-Z]/.test(pass),
    },
    {
      text: "Pelo menos uma letra minúscula",
      validate: (pass) => /[a-z]/.test(pass),
    },
    {
      text: "Pelo menos um número",
      validate: (pass) => /\d/.test(pass),
    },
    {
      text: "Pelo menos um caractere especial",
      validate: (pass) => /[!@#$%^&*(),.?":{}|<>]/.test(pass),
    },
  ];

  // Função para formatar o telefone conforme o usuário digita
  function formatPhone(text) {
    let cleaned = text.replace(/\D/g, "");
    if (cleaned.length > 11) cleaned = cleaned.substring(0, 11);
    if (cleaned.length <= 2) {
      return "(" + cleaned;
    } else if (cleaned.length <= 7) {
      return "(" + cleaned.substring(0, 2) + ") " + cleaned.substring(2);
    } else {
      return (
        "(" +
        cleaned.substring(0, 2) +
        ") " +
        cleaned.substring(2, 7) +
        "-" +
        cleaned.substring(7)
      );
    }
  }

  function validateEmail(text) {
    setEmail(text);
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(text)) {
      setEmailError("Email inválido");
    } else {
      setEmailError("");
    }
  }

  function validateTelefone(text) {
    // Formata e atualiza o estado
    const formatted = formatPhone(text);
    setTelefone(formatted);
    // Validação: removendo caracteres não numéricos para contar os dígitos
    const cleaned = text.replace(/\D/g, "");
    if (cleaned.length < 10 || cleaned.length > 11) {
      setTelefoneError("Telefone inválido");
    } else {
      setTelefoneError("");
    }
  }

  function validateSenha(text) {
    setSenha(text);

    // Se já houver confirmação, verifica se coincidem
    if (confirmSenha && text !== confirmSenha) {
      setConfirmSenhaError("As senhas não coincidem");
    } else {
      setConfirmSenhaError("");
    }
  }

  function validateConfirmSenha(text) {
    setConfirmSenha(text);
    if (senha !== text) {
      setConfirmSenhaError("As senhas não coincidem");
    } else {
      setConfirmSenhaError("");
    }
  }

  function handleCreateAccount() {
    // Verifica se ainda há erros básicos antes de criar a conta
    if (emailError || telefoneError || confirmSenhaError) return;

    // Verifica se todos os requisitos de senha estão OK
    const allRequirementsMet = passwordRequirements.every((req) =>
      req.validate(senha)
    );
    if (!allRequirementsMet) return;

    navigation.navigate("FinalRegistration", {
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
      email,
      telefone,
      senha,
    });
    console.log("Criando conta com:", { email, telefone, senha });
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Dados da Conta</Text>
          <TouchableOpacity
            style={styles.closeButtonContainer}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
        </View>

        {/* EMAIL */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="email@exemplo.com"
          placeholderTextColor={styles.placeholderColor.color}
          value={email}
          onChangeText={validateEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        {/* TELEFONE */}
        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="(xx) xxxxx-xxxx"
          placeholderTextColor={styles.placeholderColor.color}
          value={telefone}
          onChangeText={validateTelefone}
          keyboardType="phone-pad"
        />
        {telefoneError ? (
          <Text style={styles.errorText}>{telefoneError}</Text>
        ) : null}

        {/* SENHA */}
        <Text style={styles.label}>Digite a sua senha</Text>
        <TextInput
          style={styles.input}
          placeholder="com no mínimo 8 dígitos"
          placeholderTextColor={styles.placeholderColor.color}
          value={senha}
          onChangeText={validateSenha}
          secureTextEntry
        />
        {/* Lista de requisitos da senha */}
        <View style={{ marginVertical: 5 }}>
          {passwordRequirements.map((req, index) => {
            const isValid = req.validate(senha);
            return (
              <View
                key={index}
                style={{ flexDirection: "row", marginBottom: 2 }}
              >
                {/* bullet point */}
                <Text
                  style={{
                    color: isValid ? "green" : "red",
                    marginRight: 5,
                  }}
                >
                  •
                </Text>
                <Text style={{ color: isValid ? "green" : "red" }}>
                  {req.text}
                </Text>
              </View>
            );
          })}
        </View>

        {/* CONFIRMAR SENHA */}
        <Text style={styles.label}>Confirme a sua senha</Text>
        <TextInput
          style={styles.input}
          placeholder="digite novamente sua senha"
          placeholderTextColor={styles.placeholderColor.color}
          value={confirmSenha}
          onChangeText={validateConfirmSenha}
          secureTextEntry
        />
        {confirmSenhaError ? (
          <Text style={styles.errorText}>{confirmSenhaError}</Text>
        ) : null}

        {/* BOTÃO CRIAR CONTA */}
        <TouchableOpacity
          style={styles.createButton}
          onPress={handleCreateAccount}
        >
          <Text style={styles.createButtonText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
