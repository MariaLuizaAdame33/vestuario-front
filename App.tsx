import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from './src/screens/CadastroScreen';
import EditarRoupas from './src/screens/EditarRoupas';
import ListagemRoupas from './src/screens/ListagemRoupas';


const Stack = createStackNavigator();


function App(): React.ReactElement {
  return (
    <ListagemRoupas/>
  );
}



export default App;