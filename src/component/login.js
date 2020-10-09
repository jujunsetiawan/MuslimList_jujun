import React, { Component } from 'react'
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import style from './style'

export class Login extends Component {
    constructor() {
        super()
        this.state = { mata: true }
    }
    ubaheye = () => {
        const eyey = !this.state.mata
        this.setState({ mata: eyey })
    }
    render() {
        return (
            <View style={{ justifyContent: "center", height: "100%", width: "100%" }}>
                <View style={{ alignItems: "center", marginTop: 50 }}>
                    <Text>Welcome back!</Text>
                </View>
                <View>
                    <Text style={style.text5}>Email :</Text>
                    <View style={style.view3}>
                        <TextInput
                            style={style.textinput}
                            placeholder="Username Atau Email"></TextInput>
                    </View>
                </View>
                <View>
                    <Text style={style.text6}>Password :</Text>
                    <View style={style.view3}>
                        <TextInput
                            secureTextEntry={this.state.mata}
                            style={style.textinput}
                            placeholder="Password">
                        </TextInput>
                        <TouchableOpacity onPress={() => this.ubaheye()}>
                            <Image
                                style={style.image3}
                                source={this.state.mata ? require("../assets/eyeClosed.png") : require("../assets/eyeOpened.png")}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity 
                    onPress = {() => this.props.navigation.navigate("Home")}
                    style={style.view4}>
                        <Text style={{ color: "white" }}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate("Reset")}>
                        <Text style={style.text7}>Forget Password ?</Text>
                    </TouchableOpacity>
                    <View style={style.view5}>
                        <Text>_______________</Text>
                        <Text style={{ margin: 5 }}>Log in with social account</Text>
                        <Text>_______________</Text>
                    </View>
                    <View style={style.view8}>
                        <TouchableOpacity style={style.view6}>
                            <Image
                                style={style.image4}
                                source={require("../assets/fb.png")}
                            />
                            <Text style={{ color: "white", marginLeft: 8 }}>Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.view7}>
                            <Image
                                style={style.image4}
                                source={require("../assets/google.png")}
                            />
                            <Text style={{ color: "white", marginLeft: 8 }}>Google</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.view9}>
                        <Text style={{ opacity: 0.3 }}>Don't have an account ? </Text>
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate("Register")}>
                            <Text style = {{color: "dodgerblue", fontWeight: "bold"}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Login
