import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "../styles/homeStyles";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* Conteúdo principal rolável */}
      <ScrollView style={styles.contentContainer} contentContainerStyle={{ flexGrow: 1 }}>
      {/* Card grande */}
        <View style={styles.bigCard}>
          <Text style={styles.bigCardText}>
            Tenha acesso a todos os procedimentos solicitados para você na palma
            da mão.
          </Text>
          <TouchableOpacity style={styles.bigCardButton}>
            <Text style={styles.bigCardButtonText}>Ver Todos</Text>
          </TouchableOpacity>
        </View>

        {/* Últimos procedimentos */}
        <Text style={styles.smallRowTitle}>Ultimos procedimentos</Text>
        <View style={{ flexDirection: "row", marginBottom: 16 }}>
          <View style={styles.placeholderBox} />
          <View style={styles.placeholderBox} />
        </View>

        {/* Dicas para evitar fraudes */}
        <Text style={styles.smallRowTitle}>Dicas para evitar fraudes</Text>
        <Text style={{ marginBottom: 16 }}>
          Fraudes odontológicas podem gerar prejuízos. Para se proteger, fique
          atento e siga essas dicas para evitar problemas e garantir a segurança
          nos seus procedimentos.
        </Text>

        {/* teste para testar o scroll */}
        <Text style={styles.smallRowTitle}>teste</Text>
        <Text style={{ marginBottom: 16 }}>
          teste
        </Text>

        {/* teste para testar o scroll */}
        <Text style={styles.smallRowTitle}>teste</Text>
        <Text style={{ marginBottom: 16 }}>
          teste
        
        </Text>

        {/* teste para testar o scroll */}
        <Text style={styles.smallRowTitle}>teste</Text>
        <Text style={{ marginBottom: 16 }}>
          teste
        </Text>

        {/* teste para testar o scroll */}
        <Text style={styles.smallRowTitle}>teste</Text>
        <Text style={{ marginBottom: 16 }}>
          teste
        
        </Text>
        {/* teste para testar o scroll */}
        <Text style={styles.smallRowTitle}>teste</Text>
        <Text style={{ marginBottom: 16 }}>
          teste
        </Text>

        {/* teste para testar o scroll */}
        <Text style={styles.smallRowTitle}>teste</Text>
        <Text style={{ marginBottom: 16 }}>
          teste
        
        </Text>
        
      </ScrollView>

      {/* Barra de navegação inferior (exemplo estático) */}
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tabItem}>
          <Image
            style={styles.tabIcon}
            source={require("../../assets/adaptive-icon.png")}
          />
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Image
            style={styles.tabIcon}
            source={require("../../assets/adaptive-icon.png")}
          />
          <Text style={styles.tabText}>Procedimentos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Image
            style={styles.tabIcon}
            source={require("../../assets/adaptive-icon.png")}
          />
          <Text style={styles.tabText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Image
            style={styles.tabIcon}
            source={require("../../assets/adaptive-icon.png")}
          />
          <Text style={styles.tabText}>Proteja-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
