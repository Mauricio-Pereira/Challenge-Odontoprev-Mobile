import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function Header({ navigation, route }) {
  // Verifica se a rota atual é "Home"
  const isHomePage = route.name === "Home";

  return (
    <View style={globalStyles.header}>
      <View style={[globalStyles.headerLeft, { flex: 1 }]}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
          isHomePage
            ? navigation.navigate("Login") // Aqui você pode chamar a função de logout
            : navigation.navigate("Login")
        }
      >
        <Text style={globalStyles.headerLoginButton}>
          {isHomePage ? "Logout" : "Login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
