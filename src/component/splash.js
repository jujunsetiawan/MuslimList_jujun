import React, { Component } from 'react'
import { Image, Text, View, ActivityIndicator } from 'react-native'
import style from "./style"
import Navigation from "./navigation"
import Home from "./home"

export class splash extends Component {
    constructor() {
        super()
        this.state = { role: true }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ role: false })
        }, 2000)
    }
    render() {
        if (this.state.role) {

            return (
                <View>
                    <View style={style.view1}>
                        <Image
                            source={require("../assets/list.png")}
                            style={style.image1}
                        />
                        <Text style={style.text1}>Muslim List</Text>
                        <ActivityIndicator
                            style={{ marginTop: 50 }}
                            size="large" color="white" />
                    </View>
                </View>
            )
        }else {
            return <Navigation/>
        }
    }
}

export default splash
