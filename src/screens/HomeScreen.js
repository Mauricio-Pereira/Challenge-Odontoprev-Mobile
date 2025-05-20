import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "../styles/homeStyles";
import Header from "../components/Header";

export default function HomeScreen({ navigation }) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const verificarAdmin = async () => {
      try {
        const dados = await AsyncStorage.getItem("usuarioLogado");
        const usuario = JSON.parse(dados);
        if (usuario?.tipoUsuario === "Administrador") {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error("Erro ao verificar admin:", error);
      }
    };
    verificarAdmin();
  }, []);

  return (
    <View style={styles.container}>
      {isAdmin && (
          <TouchableOpacity
            style={[
              styles.bigCardButton,
              { marginTop: 20, marginHorizontal: 16, marginBottom: 20},
            ]}
            onPress={() => navigation.navigate("Usuarios")}
          >
            <Text style={styles.bigCardButtonText}>Usuários Cadastrados</Text>
          </TouchableOpacity>
        )}
      <ScrollView
        style={styles.contentContainer}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {/* Card principal com imagem de banner */}
        <View style={styles.bigCard}>
          <Image
            source={require("../../assets/fraudwatch-logo.png")}
            style={styles.bigCardImage}
          />
          <Text style={styles.bigCardText}>
            Tenha acesso a todos os procedimentos odontológicos e evite fraudes!
          </Text>
          <TouchableOpacity style={styles.bigCardButton}>
            <Text style={styles.bigCardButtonText}>Ver Procedimentos</Text>
          </TouchableOpacity>
        </View>

        {/* Seção de Procedimentos Recentes */}
        <Text style={styles.sectionTitle}>Últimos Procedimentos</Text>
        <ScrollView horizontal style={styles.horizontalScroll}>
          <View style={styles.card}>
            <Image
              source={require("../../assets/clareamento.png")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Clareamento Dental</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../../assets/implante.png")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Implante Dentário</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require("../../assets/ortodontia.png")}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Ortodontia</Text>
          </View>
        </ScrollView>

        {/* Seção de Dicas para Evitar Fraudes */}
        <Text style={styles.sectionTitle}>
          Dicas para evitar fraudes em planos odontológicos
        </Text>
        <Text style={styles.paragraph}>
          Fraudes em planos odontológicos podem causar grandes prejuízos.
          Confira algumas dicas para se proteger:
        </Text>
        <View style={styles.tipContainer}>
          <Image
            source={require("../../assets/apoiadores-logo.png")}
            style={styles.tipImage}
          />
          <Text style={styles.tipText}>
            Verifique a credibilidade dos apoiadores
          </Text>
        </View>
        <View style={styles.tipContainer}>
          <Image
            source={require("../../assets/historico-sinistros-logo.png")}
            style={styles.tipImage}
          />
          <Text style={styles.tipText}>
            Analise seu histórico de sinistros e mantenha registros detalhados.
          </Text>
        </View>
        <View style={styles.tipContainer}>
          <Image
            source={require("../../assets/cobrancas-logo.png")}
            style={styles.tipImage}
          />
          <Text style={styles.tipText}>
            Fique atento a cobranças fora do padrão e a procedimentos não
            autorizados.
          </Text>
        </View>
        
      </ScrollView>

      {/* Barra de navegação inferior */}
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tabItem}>
          <Image
            style={styles.tabIcon}
            source={require("../../assets/home-icon.png")}
          />
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Image
            style={styles.tabIcon}
            source={require("../../assets/procedures-icon.png")}
          />
          <Text style={styles.tabText}>Procedimentos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Image
            style={styles.tabIcon}
            source={require("../../assets/profile-icon.png")}
          />
          <Text style={styles.tabText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Image
            style={styles.tabIcon}
            source={require("../../assets/alert-icon.png")}
          />
          <Text style={styles.tabText}>Proteja-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
