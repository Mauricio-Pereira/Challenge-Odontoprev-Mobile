import React from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import globalStyles from "../styles/globalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Header({ navigation, route }) {
  const isHomePage = route.name === "Home";

  // ✅ Função de logout
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("usuarioLogado");
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      Alert.alert("Erro", "Não foi possível sair da conta.");
    }
  };

  return (
    <View style={globalStyles.header}>
      <View style={[globalStyles.headerLeft, { flex: 1 }]}>
        <TouchableOpacity
          onPress={async () => {
            try {
              const user = await AsyncStorage.getItem("usuarioLogado");
              if (user) {
                navigation.navigate("Home");
              } else {
                navigation.navigate("Login")
              }
            } catch (error) {
              console.error("Erro ao verificar login:", error);
              Alert.alert("Erro", "Não foi possível verificar o login.");
            }
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={globalStyles.headerTitle}>FraudWatch</Text>
            <Image
              style={globalStyles.logoMin}
              source={require("../../assets/fraudwatch-logo.png")}
            />
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{ paddingHorizontal: 12 }}
        onPress={() =>
          isHomePage ? handleLogout() : navigation.navigate("Login")
        }
      >
        <Text style={globalStyles.headerLoginButton}>
          {isHomePage ? "Logout" : "Login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
