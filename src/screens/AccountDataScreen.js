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
import styles from "../styles/accountDataScreen";

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
  const [senhaEmptyError, setSenhaEmptyError] = useState("");
  const [confirmSenhaError, setConfirmSenhaError] = useState("");

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
    if (text.trim() === "") {
      setEmailError("Campo obrigatório");
    } else if (!regex.test(text)) {
      setEmailError("Email inválido");
    } else {
      setEmailError("");
    }
  }

  function validateTelefone(text) {
    const formatted = formatPhone(text);
    setTelefone(formatted);
    const cleaned = text.replace(/\D/g, "");
    if (text.trim() === "") {
      setTelefoneError("Campo obrigatório");
    } else if (cleaned.length < 10 || cleaned.length > 11) {
      setTelefoneError("Telefone inválido");
    } else {
      setTelefoneError("");
    }
  }

  function validateSenha(text) {
    setSenha(text);
    // Se houver valor vazio, não limpa a mensagem de "Campo obrigatório" definida no handle
    if (confirmSenha && text !== confirmSenha) {
      setConfirmSenhaError("As senhas não coincidem");
    } else {
      setConfirmSenhaError("");
    }
  }

  function validateConfirmSenha(text) {
    setConfirmSenha(text);
    if (text.trim() === "") {
      setConfirmSenhaError("Campo obrigatório");
    } else if (senha !== text) {
      setConfirmSenhaError("As senhas não coincidem");
    } else {
      setConfirmSenhaError("");
    }
  }

  function handleCreateAccount() {
    let valid = true;
    // Valida campo Email
    if (email.trim() === "") {
      setEmailError("Campo obrigatório");
      valid = false;
    }
    // Valida campo Telefone
    if (telefone.trim() === "") {
      setTelefoneError("Campo obrigatório");
      valid = false;
    }
    // Valida campo Senha
    if (senha.trim() === "") {
      setSenhaEmptyError("Campo obrigatório");
      valid = false;
    }
    // Valida campo Confirmação
    if (confirmSenha.trim() === "") {
      setConfirmSenhaError("Campo obrigatório");
      valid = false;
    }
    // Valida requisitos da senha
    const allRequirementsMet = passwordRequirements.every((req) =>
      req.validate(senha)
    );
    if (!allRequirementsMet) {
      valid = false;
    }
    if (!valid) return;

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
    <KeyboardAvoidingView
      style={{ flex: 0 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // ajuste esse valor conforme necessário
    >
      <ScrollView>
        <View style={styles.container}>
          {/* Cabeçalho */}
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
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}

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
    </KeyboardAvoidingView>
  );
}
