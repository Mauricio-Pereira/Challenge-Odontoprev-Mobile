import { StyleSheet } from "react-native";
import globalStyles from "./globalStyles";

export default StyleSheet.create({
  ...globalStyles,
  finalizeButton: {
    alignSelf: "flex-end",
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: "#0B1E51",
  },
  finalizeButtonText: {
    color: "#FFF",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  // Estilo para inputs inativos
  disabledInput: {
    backgroundColor: "#e6e6e6", // fundo mais claro
    borderColor: "#999", // borda mais clara
    opacity: 0.7, // pode reduzir a opacidade
    color: '#999'
  },
});
