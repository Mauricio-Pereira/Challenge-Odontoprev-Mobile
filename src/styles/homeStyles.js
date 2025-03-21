import { StyleSheet } from "react-native";
import globalStyles from "./globalStyles";
import colors from "./colors";

const imageSize = 80; // Tamanho padrão para imagens de conteúdo
const iconSize = 24;  // Tamanho para ícones da bottom tab

export default StyleSheet.create({
  ...globalStyles,
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.secondary,
  },
  bigCard: {
    backgroundColor: colors.tertiary,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bigCardImage: {
    width: imageSize,
    height: imageSize,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 8,
  },
  bigCardText: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: "center",
  },
  bigCardButton: {
    alignSelf: "center",
    borderRadius: 24,
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 8,
  },
  bigCardButtonText: {
    color: "#FFF",
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 16,
    color: colors.text,
    textAlign: "center",
  },
  horizontalScroll: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: colors.tertiary,
    borderRadius: 8,
    padding: 16,
    marginRight: 16,
    alignItems: "center",
    width: 120,
  },
  cardImage: {
    width: imageSize,
    height: imageSize,
    resizeMode: "contain",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    textAlign: "center",
    color: colors.text,
  },
  tipContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  tipImage: {
    width: imageSize,
    height: imageSize,
    resizeMode: "contain",
    marginRight: 8,
  },
  tipText: {
    fontSize: 14,
    color: colors.text,
    flex: 1,
  },
  bottomTab: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: colors.secondary,
    backgroundColor: colors.tertiary,
    justifyContent: "space-around",
    paddingVertical: 12,
    alignItems: "center",
  },
  tabItem: {
    alignItems: "center",
    paddingVertical: 4,
  },
  tabIcon: {
    width: iconSize,
    height: iconSize,
    resizeMode: "contain",
    marginBottom: 4,
  },
  tabText: {
    fontSize: 12,
  },
});
