import { StyleSheet } from 'react-native';
import globalStyles from './globalStyles';
import colors from './colors';

export default StyleSheet.create({
  ...globalStyles,

  loginContainer: {
    ...globalStyles.container,
    justifyContent: 'center',
    backgroundColor: colors.secondary
  },
  forgotPasswordText: {
    ...globalStyles.linkText,
    marginBottom: 24
  },
  // Botões de login
  loginButton: {
    ...globalStyles.buttonPrimary,
    backgroundColor: '#0B1E51'
  },
  createAccountButton: {
    ...globalStyles.buttonSecondary,
    marginTop: 8
  }
});
