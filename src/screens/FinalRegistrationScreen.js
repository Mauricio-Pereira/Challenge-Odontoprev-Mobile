import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "../styles/finalRegistrationStyles";

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
    // senha, opcional
  } = route.params;

  function handleConfirm() {
    // Aqui você pode fazer a chamada de API para criar a conta ou prosseguir com o fluxo
    console.log("Conta confirmada:", route.params);
    navigation.navigate("Login");
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
