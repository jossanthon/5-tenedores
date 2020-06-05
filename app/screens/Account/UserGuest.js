import React from "react";
import {StyleSheet, ScrollView, Image, View, Text} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {Button} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";

const Stack = createStackNavigator();
export default function UserGuest(){
    const navigation=useNavigation();
    return(
        <ScrollView centerContent={true}>
            <Image source={require("../../../assets/img/user-guest.jpg")}
                resizeMode="contain"
                style={styles.image}
                />
                <Text style={styles.title}> Consulta tu perfil de 5 tenedores</Text>
                <Text style={styles.description}>
                    como describes tu mejor Restaruante? busca y visualiza los mejores
                    Restaruante de una forma sencilla vota cual te ha gustado mas y comenta
                    como ha sido tu experiencia.
                </Text>
                <View style={styles.viewBtn}>
                    <Button title="ver tu perfil"
                        buttonStyle={styles.btnStyle}
                        containerStyle={styles.btnContainer}
                        onPress={()=>navigation.navigate("login")}
                    />
                </View>
        </ScrollView>
    );
}
const styles=StyleSheet.create({
    viewBody:{
        marginLeft: 30,
        marginRight: 30,
    },
    image:{
        height: 300,
        width: "100%",
        marginBottom: 40,
    },
    title:{
        fontWeight:"bold",
        fontSize:19,
        marginBottom: 10,
        textAlign:"center",
    },
    description:{
        textAlign:"center",
        marginBottom:20,
    },
    viewBtn:{
        flex:1,
        alignItems:"center",
    },
    btnStyle:{
        backgroundColor:"#00a680",
    },
    btnContainer:{
        width:"70%",
    }
});