import React, { Component } from "react";
import { AppLoading } from "expo";
import { Container, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStack from "./src/routes/HomeStack";
import AboutStack from "./src/routes/AboutStack";

const Drawer = createDrawerNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor: "#e91e63",
            itemStyle: { marginVertical: 5 },
          }}
        >
          <Drawer.Screen
            name="Home"
            options={{ drawerLabel: "First page Option" }}
            component={HomeStack}
          />
          <Drawer.Screen
            name="About"
            options={{ drawerLabel: "Second page Option" }}
            component={AboutStack}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
