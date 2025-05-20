import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  navigationContainer:{
    backgroundColor: colors.secondary,
    padding:0
  },
  header: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between', // Usa 'space-between' para manter os elementos visíveis
    paddingHorizontal: 16,
    paddingVertical: 16,
    minHeight: 130, // Define uma altura mínima
    width: '100%'
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10, // espaçamento entre o nome e o logo
  },
  headerLoginButton: {
    color: '#FFF',
    fontSize: 16,
    backgroundColor: 'white',
    color: colors.primary,
    borderRadius: 8,
    paddingVertical: 10,
    fontWeight: 'bold',
    minHeight: 40,
    minWidth: 80,
    textAlign: 'center',
  },
  logoMin: {
    maxHeight: 50,
    maxWidth: 75,
    resizeMode: 'cover',
  },
  
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#fff",
    marginBottom: 0,
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    fontSize: 14,
    color: colors.text,
  },
  placeholderColor: {
    color: colors.placeholder,
  },
  linkText: {
    fontSize: 14,
    color: "#0066CC",
    textDecorationLine: "underline",
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonSecondary: {
    backgroundColor: colors.tertiary,
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 16,

  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  buttonTextSecondary: {
    color: colors.text,
    fontSize: 16,
  },
  errorText: {
    color: colors.error,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    color: colors.text,
    fontWeight: "bold",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  closeButtonContainer: {
    backgroundColor: "#f019", // Cor de fundo (ex.: vermelho)
    borderRadius: 8, // Arredonda os cantos
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  closeButtonText: {
    fontSize: 20, // Aumenta o tamanho do "X"
    fontWeight: "bold",
    color: "#fff", // Deixa o "X" branco
    textAlign: "center",
  },
  logo: {
    maxHeight: 350,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: colors.secondary
  },
  
});
