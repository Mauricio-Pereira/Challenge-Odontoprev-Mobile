import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import PersonalDataScreenRegister from "../screens/PersonalDataScreenRegister";
import AddressScreenRegister from "../screens/AddressScreenRegister";
import AccountDataScreen from "../screens/AccountDataScreen";
import UsersScreen from "../screens/UsersScreen";
import FinalRegistrationScreen from "../screens/FinalRegistrationScreen";
import Header from "../components/Header";
import styles from "../styles/globalStyles";
import EditUserScreen from "../screens/EditUserScreen";


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer style={styles.navigationContainer}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          header: (props) => <Header {...props} />, // Header custom para todas as telas
          headerShown: true, //
          headerTransparent: false,

        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PersonalData" component={PersonalDataScreenRegister} />
        <Stack.Screen name="Address" component={AddressScreenRegister} />
        <Stack.Screen name="AccountData" component={AccountDataScreen} />
        <Stack.Screen name="FinalRegistration" component={FinalRegistrationScreen} />
        <Stack.Screen name="Usuarios" component={UsersScreen} />
        <Stack.Screen name="EditarUsuario" component={EditUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
