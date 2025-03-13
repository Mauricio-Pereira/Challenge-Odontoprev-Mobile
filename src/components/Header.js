import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function Header({ navigation }) {
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

      {/* Garante que o botão de login fique visível */}
      <TouchableOpacity
        style={{ paddingHorizontal: 12 }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={globalStyles.headerLoginButton}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
