import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, Picker, Image } from 'react-native'
import style from './style';

export class Register extends Component {
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
            <View>
                <View>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate("Login")}>
                <Image
                    source = {require("../assets/back.png")}
                    style = {{height: 30, width:30, marginTop:10, marginLeft:15, opacity: 0.4}}
                />
                </TouchableOpacity>
                    <Text style={style.text8}>Register</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ opacity: 0.3, marginLeft: 20, marginTop: 10, marginRight: 1 }}>Already have an account ? </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                            <Text style={{ color: "dodgerblue", fontWeight: "bold", marginTop: 10 }}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={style.text9}>Email :</Text>
                        <View style={style.view12}>
                            <TextInput
                                style={style.textinput}
                                placeholder="Email"></TextInput>
                        </View>
                        <Text style={style.text10}>Mobile Number</Text>
                        <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
                            <View>
                                <View style={style.view13}>
                                    <Image
                                        source={require("../assets/indoflag.png")}
                                        style={{ height: 20, width: 20, marginTop: 5, marginLeft: 10 }}
                                    />
                                    <Picker
                                        style={style.picker}
                                        onValueChange={(itemValue, itemIndex) => (itemValue)} >
                                        <Picker.Item label="+62" value="Indonesia" />
                                        <Picker.Item label="+321" value="Japan" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={style.view14}>
                                <TextInput
                                    style={style.textinput}
                                    placeholder="Phone Number"></TextInput>
                            </View>
                        </View>
                        <Text style={style.text10}>Password :</Text>
                        <View style={style.view12}>
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
                            onPress={() => this.props.navigation.navigate("Login")}
                            style={style.view15}>
                            <Text style={{ color: "white" }}>Sign Up</Text>
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
                        <Text style={{ opacity: 0.3, textAlign: "center", marginTop: 15 }}>By clicking sign up you are agreeing to the</Text>
                        <View style={style.view16}>
                            <TouchableOpacity>
                                <Text style={{ color: "dodgerblue", fontWeight: "bold" }}>Term of use </Text>
                            </TouchableOpacity>
                            <Text>and the </Text>
                            <TouchableOpacity>
                                <Text style={{ color: "dodgerblue", fontWeight: "bold" }}>Privacy policy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Register;
