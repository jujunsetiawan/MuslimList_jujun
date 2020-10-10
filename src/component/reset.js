import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import style from './style';

export class Reset extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                    <Image
                        source={require("../assets/back.png")}
                        style={{ height: 30, width: 30, marginTop: 10, marginLeft: 15, opacity: 0.4 }}
                    />
                </TouchableOpacity>
                <View>
                    <Text style={style.text8}>Reset Password</Text>
                    <Text style={{ opacity: 0.3, marginLeft: 20, marginTop: 10, marginRight: 20 }}>Please enter your email below to receive your password reset intructions.</Text>
                </View>
                <View>
                    <Text style={style.text9}>Email :</Text>
                    <View style={style.view10}>
                        <TextInput
                            style={style.textinput}
                            placeholder="Email"></TextInput>
                    </View>
                    <TouchableOpacity
                        onPress={() => alert("Verifiy Email")}
                        style={style.view11}>
                        <Text style={{ color: "white" }}>Send Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Reset;
