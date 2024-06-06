import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from './src/screens/CadastroScreen';
import EditarRoupas from './src/screens/EditarRoupas';
import ListagemRoupas from './src/screens/ListagemRoupas';



const Stack = createStackNavigator();


function App(): React.ReactElement {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Listagem' component={ListagemRoupas} options={{ headerShown:false }}/>
        <Stack.Screen name='editar' component={EditarRoupas} options={{ headerShown:false }}/>
        <Stack.Screen name='Cadastro' component={CadastroScreen} options={{ headerShown:false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}



export default App;