import React from "react";
import {View, Text} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function UserGuest(){
    return(
        <View>
            <Text> user guest </Text>
        </View>
    );
}