import { StyleSheet } from 'react-native';
import colors from './colors'; // Se você tiver um arquivo de cores

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: colors.primary || '#0B1E51',
  },
  dataContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    width: 140, // Largura fixa para alinhar os dados
    color: '#333',
  },
  value: {
    flex: 1,
    color: '#555',
  },
  confirmButton: {
    backgroundColor: colors.primary || '#0B1E51',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 30,
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  editButton: {
    backgroundColor: '#ddd',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 10,
  },
  editButtonText: {
    color: '#333',
    fontSize: 16,
  },
});
