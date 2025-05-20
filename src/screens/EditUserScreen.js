import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import styles from "../styles/globalStyles";
import api from "../services/api";

export default function EditUserScreen({ route, navigation }) {
  const { usuario } = route.params;
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const carregarUsuario = async () => {
      try {
        const response = await api.get(`/usuario/${usuario.id}`);
        const dados = response.data;

        setForm({
          id: dados.id,
          nome: dados.nome || "",
          sobrenome: dados.sobrenome || "",
          email: dados.email || "",
          senha: "",
          cpf: dados.cpf || "",
          dataNascimento: formatarParaBR(dados.dataNascimento),
          telefone: dados.telefone || "",
          tipoUsuarioid:
            {
              Administrador: 4,
              Dentista: 1,
              Paciente: 2,
              Analista: 3,
            }[dados.tipoUsuario] || 2,
          endereco: {
            cep: dados.endereco?.cep || "",
            regiao: dados.endereco?.regiao || "",
            estado: dados.endereco?.estado || "",
            cidade: dados.endereco?.cidade || "",
            bairro: dados.endereco?.bairro || "",
            logradouro: dados.endereco?.logradouro || "",
            numero: dados.endereco?.numero || "",
            complemento: dados.endereco?.complemento || "",
          },
        });

        console.log("Dados do usuário carregados:", dados);
      } catch (error) {
        console.error("Erro ao carregar dados do usuário:", error);
        Alert.alert("Erro", "Não foi possível carregar os dados do usuário.");
      }
    };

    carregarUsuario();
  }, [usuario.id]);

  const formatarParaBR = (data) => {
    if (!data) return "";
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  };

  const formatarParaISO = (data) => {
    if (!data.includes("/")) return data;
    const [dia, mes, ano] = data.split("/");
    return `${ano}-${mes}-${dia}`;
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleEnderecoChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      endereco: { ...prev.endereco, [field]: value },
    }));
  };

  const handleSalvar = async () => {
    setLoading(true);
    try {
      const payload = {
        nome: form.nome,
        sobrenome: form.sobrenome,
        email: form.email,
        senha: form.senha || undefined,
        cpf: form.cpf.replace(/\D/g, ""),
        dataNascimento: formatarParaISO(form.dataNascimento),
        telefone: form.telefone
          .replace(/\D/g, "")
          .slice(-9)
          .replace(/^(\d{5})(\d{4})$/, "$1-$2"),
        tipoUsuarioid: form.tipoUsuarioid,
        endereco: {
          cep: form.endereco.cep,
          logradouro: form.endereco.logradouro,
          bairro: form.endereco.bairro,
          cidade: form.endereco.cidade,
          estado: form.endereco.estado,
          regiao: form.endereco.regiao,
          complemento: form.endereco.complemento,
          numero: form.endereco.numero,
        },
      };

      // Se senha estiver vazia, remove do payload
      if (!payload.senha) delete payload.senha;

      console.log("Payload de atualização:", payload);

      await api.put(`/usuario/${form.id}`, payload);
      Alert.alert("Sucesso", "Usuário atualizado com sucesso!");
      navigation.goBack();
    } catch (error) {
      console.error(
        "Erro ao atualizar:",
        error.response?.data || error.message
      );
      Alert.alert("Erro", "Não foi possível atualizar o usuário.");
    } finally {
      setLoading(false);
    }
  };

  if (!form)
    return <ActivityIndicator style={{ marginTop: 20 }} size="large" />;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Editar Usuário</Text>

        {/* Dados do usuário */}
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={form.nome}
          onChangeText={(v) => handleChange("nome", v)}
        />

        <Text style={styles.label}>Sobrenome</Text>
        <TextInput
          style={styles.input}
          value={form.sobrenome}
          onChangeText={(v) => handleChange("sobrenome", v)}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={form.email}
          onChangeText={(v) => handleChange("email", v)}
        />

        <Text style={styles.label}>Nova senha (opcional)</Text>
        <TextInput
          style={styles.input}
          value={form.senha}
          secureTextEntry
          onChangeText={(v) => handleChange("senha", v)}
        />

        <Text style={styles.label}>CPF</Text>
        <TextInput
          style={styles.input}
          value={form.cpf}
          onChangeText={(v) => handleChange("cpf", v)}
        />

        <Text style={styles.label}>Data de Nascimento</Text>
        <TextInput
          style={styles.input}
          value={form.dataNascimento}
          onChangeText={(v) => handleChange("dataNascimento", v)}
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          value={form.telefone}
          onChangeText={(v) => handleChange("telefone", v)}
        />

        {/* Endereço reordenado */}
        <Text style={styles.label}>CEP</Text>
        <TextInput
          style={styles.input}
          value={form.endereco.cep}
          onChangeText={(v) => handleEnderecoChange("cep", v)}
        />

        <Text style={styles.label}>Região</Text>
        <TextInput
          style={styles.input}
          value={form.endereco.regiao}
          onChangeText={(v) => handleEnderecoChange("regiao", v)}
        />

        <Text style={styles.label}>Estado</Text>
        <TextInput
          style={styles.input}
          value={form.endereco.estado}
          onChangeText={(v) => handleEnderecoChange("estado", v)}
        />

        <Text style={styles.label}>Cidade</Text>
        <TextInput
          style={styles.input}
          value={form.endereco.cidade}
          onChangeText={(v) => handleEnderecoChange("cidade", v)}
        />

        <Text style={styles.label}>Bairro</Text>
        <TextInput
          style={styles.input}
          value={form.endereco.bairro}
          onChangeText={(v) => handleEnderecoChange("bairro", v)}
        />

        <Text style={styles.label}>Logradouro</Text>
        <TextInput
          style={styles.input}
          value={form.endereco.logradouro}
          onChangeText={(v) => handleEnderecoChange("logradouro", v)}
        />

        <Text style={styles.label}>Número</Text>
        <TextInput
          style={styles.input}
          value={form.endereco.numero}
          onChangeText={(v) => handleEnderecoChange("numero", v)}
        />

        <Text style={styles.label}>Complemento</Text>
        <TextInput
          style={styles.input}
          value={form.endereco.complemento}
          onChangeText={(v) => handleEnderecoChange("complemento", v)}
        />
      </ScrollView>

      {/* Botões fora do scroll */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 16,
          gap: 12,
        }}
      >
        <TouchableOpacity
          style={[styles.buttonSecondary, { flex: 1 }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonTextSecondary}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonPrimary, { flex: 1 }]}
          onPress={handleSalvar}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Salvando..." : "Salvar"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
