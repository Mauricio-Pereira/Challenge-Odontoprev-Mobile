import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import styles from "../styles/finalRegistrationStyles";
import { createUser } from "../services/userService";

export default function FinalRegistrationScreen({ navigation, route }) {
  // Recebe todas as informações passadas via route.params
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
    email,
    telefone,
    senha, // se tiver
  } = route.params;

  function formatarData(d) {
    const [dia, mes, ano] = d.split("/");
    return `${ano}-${mes}-${dia}`; // converte de dd/MM/yyyy para yyyy-MM-dd
  }

  async function handleConfirm() {
  const cpfLimpo = cpf.replace(/\D/g, '');
  const telefoneNumeros = telefone.replace(/\D/g, '');

  if (cpfLimpo.length !== 11) {
    Alert.alert("Erro", "CPF deve conter exatamente 11 dígitos numéricos.");
    return;
  }

  if (telefoneNumeros.length !== 11) {
    Alert.alert("Erro", "Telefone deve conter exatamente 11 dígitos: DDD + número.");
    return;
  }

  // DDD (2) + 5 + 4 com hífen após os 7 primeiros dígitos
  const telefoneFormatado = telefoneNumeros.replace(/^(\d{2})(\d{5})(\d{4})$/, "$1$2-$3");

  const userPayload = {
    nome,
    sobrenome,
    cpf: cpfLimpo,
    dataNascimento: formatarData(dataNasc),
    email,
    senha: senha || "123456",
    telefone: telefoneFormatado, // Exemplo: 3599199-3297
    tipoUsuarioid: 3,
    endereco: {
      cep,
      estado,
      cidade,
      bairro,
      rua,
      numero,
      complemento,
    },
  };

  console.log("Enviando dados para API:", userPayload);
  Alert.alert("Processando", "Aguarde...");

  try {
    const response = await createUser(userPayload);
    console.log("Resposta da API:", response);
    Alert.alert("Sucesso", "Conta criada com sucesso!");
    navigation.navigate("Login");
  } catch (error) {
    console.error("Erro na criação de usuário:", error.response?.data || error.message);
    Alert.alert("Erro", "Não foi possível criar o usuário.");
  }
}


  function handleEdit() {
    // Volta para a tela anterior para edição ou para uma tela de edição
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 0 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // ajuste esse valor conforme necessário
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Confirme seus Dados</Text>

        <View style={styles.dataContainer}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.value}>{nome}</Text>
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.label}>Sobrenome:</Text>
          <Text style={styles.value}>{sobrenome}</Text>
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.label}>CPF:</Text>
          <Text style={styles.value}>{cpf}</Text>
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.label}>Data de Nascimento:</Text>
          <Text style={styles.value}>{dataNasc}</Text>
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.label}>CEP:</Text>
          <Text style={styles.value}>{cep}</Text>
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.label}>Estado:</Text>
          <Text style={styles.value}>{estado}</Text>
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.label}>Cidade:</Text>
          <Text style={styles.value}>{cidade}</Text>
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.label}>Bairro:</Text>
          <Text style={styles.value}>{bairro}</Text>
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.label}>Rua:</Text>
          <Text style={styles.value}>{rua}</Text>
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.label}>Número:</Text>
          <Text style={styles.value}>{numero}</Text>
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.label}>Complemento:</Text>
          <Text style={styles.value}>{complemento}</Text>
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{email}</Text>
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.label}>Telefone:</Text>
          <Text style={styles.value}>{telefone}</Text>
        </View>

        {/* Botões */}
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <Text style={styles.editButtonText}>Editar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
