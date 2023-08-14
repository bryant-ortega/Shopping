// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore, disableNetwork, enableNetwork } from "firebase/firestore";

// import the screens
import ShoppingLists from "./components/ShoppingLists";
import Welcome from "./components/Welcome";

import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect } from "react";
import { LogBox, Alert } from "react-native";

LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);


const App = () => {
  const connectionStatus = useNetInfo();

  useEffect(() => {
      if (connectionStatus.isConnected === false) {
          Alert.alert("Connection Lost!");
          disableNetwork(db);
      } else if (connectionStatus.isConnected === true) {
          enableNetwork(db);
      }
  }, [connectionStatus.isConnected]);

    const firebaseConfig = {
        apiKey: "AIzaSyBZoBhXumh7ZyHRzYaLpEQpJ9qp4omzA3s",
        authDomain: "shopping-list-demo-d5bf9.firebaseapp.com",
        projectId: "shopping-list-demo-d5bf9",
        storageBucket: "shopping-list-demo-d5bf9.appspot.com",
        messagingSenderId: "794066186544",
        appId: "1:794066186544:web:414e37f62ba838e29d98f5",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="ShoppingLists">
                    {props => (
                        <ShoppingLists
                            isConnected={connectionStatus.isConnected}
                            db={db}
                            {...props}
                        />
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
