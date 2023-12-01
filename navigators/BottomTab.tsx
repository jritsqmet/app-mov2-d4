import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ListaImagenes from '../screens/ListaImagenes';
import DetallesScreen from '../screens/DetallesScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Lista'>
      <Tab.Screen name="Detalles" component={ DetallesScreen } />
      <Tab.Screen name="Lista" component={ ListaImagenes } />
    </Tab.Navigator>
  );
}

export default function BottomNavigator (){

    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}