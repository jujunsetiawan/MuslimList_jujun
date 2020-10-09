import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import style from './style'

class Intro extends Component {
    render() {
        return (
            <View>
                <View style={style.view1}>
                    <Image
                        source={require("../assets/intro.png")}
                        style={style.image2}
                    />
                    <Text style={style.text2}>Mari List Target Antum</Text>
                    <Text style={style.text3}>Merapikan Target Antum Dengan Muslim List</Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Login")}
                        style={style.view2}>
                        <Text style={style.text4}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Intro;
