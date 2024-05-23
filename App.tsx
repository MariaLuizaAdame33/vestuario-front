import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from './src/screens/CadastroScreen';
import EditarRoupas from './src/screens/EditarRoupas';
import ListagemRoupas from './src/screens/ListagemRoupas';
import PesquisarRoupas from './src/screens/PesquisarRoupas';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';


const Stack = createStackNavigator();


function App(): React.ReactElement {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ headerShown:false }}/>
          <Stack.Screen name='Profile' component={Profile} options={{ headerShown:false }}/>
          <Stack.Screen name='Pesquisar' component={PesquisarRoupas} options={{ headerShown:false }}/>
          <Stack.Screen name='Editar' component={EditarRoupas} options={{ headerShown:false }}/>  
        <Stack.Screen name='Listagem' component={ListagemRoupas} options={{ headerShown:false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}



export default App;