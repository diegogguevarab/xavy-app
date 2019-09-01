import React from "react"
import {Ionicons} from "@expo/vector-icons"
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation"
import HomeScreen from "../screens/HomeScreen"
import DetailsScreen from "../screens/DetailsScreen"
import {Colors} from "../styles";

const HomeStack = createStackNavigator({
  Home: {screen: HomeScreen},
  Details: {screen: DetailsScreen}
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: {screen: HomeStack}
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
          const {routeName} = navigation.state;
          let iconName;
          if (routeName === "Home") {
            iconName = `ios-home`
          }
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor}/>
        }
      }),
      tabBarOptions: {
        activeTintColor: Colors.yellow100,
        inactiveTintColor: Colors.blue100,
        activeBackgroundColor: Colors.black,
        inactiveBackgroundColor: Colors.red100
      }
    }
  )
)