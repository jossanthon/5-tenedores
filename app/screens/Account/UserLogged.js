import React from "react";
import {View, Text,Button} from "react-native";
import * as firebase from "firebase";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function UserLogged(){
    return(
        <View>
            <Button title="Cerrar Sesion"
                onPress={()=>firebase.auth().signOut()}
            />
        </View>
    );
}