import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from './src/screens/CadastroScreen';
import EditarRoupas from './src/screens/EditarRoupas';


const Stack = createStackNavigator();


function App(): React.ReactElement {
  return (
    <EditarRoupas />
  );
}



export default App;