import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import styles from "../styles/usersStyles"; // Crie um CSS separado ou reutilize
import api from "../services/api";

export default function UsersScreen({ navigation }) {
  const [totalPages, setTotalPages] = useState(1);
  const [usuarios, setUsuarios] = useState([]);
  const [pagina, setPagina] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    buscarUsuarios();
  }, [pagina]);

  const buscarUsuarios = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/usuario/page/${pagina}`);
      setUsuarios(response.data.content || []);
      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      Alert.alert("Erro", "Não foi possível carregar os usuários.");
    } finally {
      setLoading(false);
    }
  };

  const deletarUsuario = async (id) => {
    Alert.alert("Confirmação", "Deseja realmente excluir este usuário?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Excluir",
        style: "destructive",
        onPress: async () => {
          try {
            await api.delete(`/usuario/${id}`);
            Alert.alert("Sucesso", "Usuário deletado com sucesso.");
            buscarUsuarios();
          } catch (error) {
            Alert.alert("Erro", "Erro ao deletar o usuário.");
          }
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.usuarioContainer}>
      <Text style={styles.usuarioText}>
        {item.nome} {item.sobrenome}
      </Text>
      <Text style={styles.usuarioText}>{item.email}</Text>
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditarUsuario", { usuario: item })
          }
        >
          <Text style={styles.editButton}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deletarUsuario(item.id)}>
          <Text style={styles.deleteButton}>Deletar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuários Cadastrados</Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={usuarios}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
      <View style={styles.paginationWrapper}>
        {/* Linha 1: Anterior | Página X de Y | Próxima */}
        <View style={styles.paginationRow}>
          <TouchableOpacity
            disabled={pagina === 0}
            onPress={() => setPagina(pagina - 1)}
          >
            <Text
              style={[styles.paginationButton, pagina === 0 && styles.disabled]}
            >
              ← Anterior
            </Text>
          </TouchableOpacity>

          <Text style={styles.paginationInfo}>
            Página {pagina + 1} de {totalPages}
          </Text>

          <TouchableOpacity
            disabled={pagina >= totalPages - 1}
            onPress={() => setPagina(pagina + 1)}
          >
            <Text
              style={[
                styles.paginationButton,
                pagina >= totalPages - 1 && styles.disabled,
              ]}
            >
              Próxima →
            </Text>
          </TouchableOpacity>
        </View>

        {/* Linha 2: Primeira | Última */}
        <View style={styles.paginationRow}>
          <TouchableOpacity
            disabled={pagina === 0}
            onPress={() => setPagina(0)}
          >
            <Text
              style={[styles.paginationButton, pagina === 0 && styles.disabled]}
            >
              ⇤ Primeira
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={pagina >= totalPages - 1}
            onPress={() => setPagina(totalPages - 1)}
          >
            <Text
              style={[
                styles.paginationButton,
                pagina >= totalPages - 1 && styles.disabled,
              ]}
            >
              Última ⇥
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
