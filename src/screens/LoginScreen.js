import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "../styles/loginStyles";
import { ScrollView } from "react-native";
import Header from "../components/Header";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    // Lógica de login
    navigation.navigate("Home");
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 0 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // ajuste esse valor conforme necessário
    >
      <ScrollView>
        <View style={styles.loginContainer}>
          {/* Logo */}
          <Image
            source={require("../../assets/fraudwatch-logo.png")}
            style={styles.logo}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="email@exemplo.com"
            placeholderTextColor={styles.placeholderColor.color}
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="digite a sua senha"
            placeholderTextColor={styles.placeholderColor.color}
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          {/* Botão para recuperar a senha (implementar se necessário) */}
          {/* <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Esqueci a senha</Text>
        </TouchableOpacity> */}

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.createAccountButton}
            onPress={() => navigation.navigate("PersonalData")}
          >
            <Text style={styles.buttonTextSecondary}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
