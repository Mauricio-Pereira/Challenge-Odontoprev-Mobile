import { StyleSheet } from 'react-native';
import globalStyles from './globalStyles';

export default StyleSheet.create({
  ...globalStyles,
  createButton: {
    alignSelf: 'center',
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 40,
    backgroundColor: '#0B1E51'
  },
  createButtonText: {
    color: '#FFF'
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
  }
});
