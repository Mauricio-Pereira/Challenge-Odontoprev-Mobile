import { StyleSheet } from "react-native";
import globalStyles from "./globalStyles";
import colors from "./colors";

export default StyleSheet.create({
  ...globalStyles,
  container: {
    flex: 1,  
    flexGrow: 1,
    paddingBottom: 1,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    textAlign: "center",
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
  },
  bigCardText: {
    fontSize: 16,
    marginBottom: 8,
  },
  bigCardButton: {
    alignSelf: "flex-start",
    borderRadius: 24,
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  bigCardButtonText: {
    color: "#FFF",
    fontSize: 14,
  },
  smallRowTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  placeholderBox: {
    width: 100,
    height: 60,
    backgroundColor: colors.tertiary,
    borderRadius: 4,
    marginRight: 8,
  },
  bottomTab: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: colors.secondary,
    backgroundColor: colors.tertiary,
    justifyContent: "space-around",
    paddingVertical: 8,
    alignItems: "center",
    alignContent: "center",
    paddingBottom: 16,
  },
  tabItem: {
    alignItems: "center",
    backgroundColor: colors.tertiary,
    paddingVertical: 4,
    alignSelf: "center",
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
    backgroundColor: colors.tertiary,
  },
  tabText: {
    fontSize: 12,
    backgroundColor: colors.tertiary,
    alignSelf: "center",
  },
});
