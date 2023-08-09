// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import the screens
import ShoppingLists from "./components/ShoppingLists";


const App = () => {
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
            <Stack.Navigator initialRouteName="ShoppingLists">
                <Stack.Screen name="ShoppingLists">
                    {props => <ShoppingLists db={db} {...props} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
