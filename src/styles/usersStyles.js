import { StyleSheet } from "react-native";
import colors from "./colors";
import globalStyles from "./globalStyles";

export default StyleSheet.create({
  ...globalStyles,

  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.secondary,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    textAlign: "center",
    marginBottom: 16,
  },

  usuarioContainer: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  usuarioText: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 4,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  editButton: {
    backgroundColor: colors.tertiary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    fontSize: 14,
    color: colors.primary,
    fontWeight: "bold",
  },

  deleteButton: {
    backgroundColor: colors.error,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    fontSize: 14,
    color: "#FFF",
    fontWeight: "bold",
  },

  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  paginationWrapper: {
    marginTop: 24,
    marginBottom: 40, // deixa espaço da bottom tab
    alignItems: "center",
  },

  paginationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 360,
    marginVertical: 4,
  },

  paginationButton: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },

  paginationInfo: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.text,
    alignSelf: "center",
  },

  disabled: {
    opacity: 0.3,
  },
});
