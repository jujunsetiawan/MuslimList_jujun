import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import style from "./style"

const DrawerContent = () => {
    return (
        <View>
            <View style={{ backgroundColor: "#0e3339", height: "100%", width: "100%" }}>
                <Image
                    source={require("../assets/avatar.png")}
                    style={style.image5}
                />
                <Text style={style.text13}>Kevin Amstrong</Text>
                <Text
                    onPress={() => alert("Hai Kevin")}
                    style={{ color: "dodgerblue", textAlign: "center" }}>@kevin_strong</Text>
                <View style={style.view20}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>999,9M </Text>
                        <Text style={{ color: "white", marginTop: 3, opacity: 0.5 }}> followers   </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>7 </Text>
                        <Text style={{ color: "white", marginTop: 3, opacity: 0.5 }}> following </Text>
                    </View>
                </View>
                <TouchableOpacity style={{ flexDirection: "row", marginTop: 20 }}>
                    <Image
                        source={require("../assets/star.png")}
                        style={{ height: 20, width: 20, marginLeft: 10 }}
                    />
                    <Text style={{ color: "white", fontSize: 15, marginTop: 2 }}>   Popular</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", marginTop: 15, }}>
                    <Image
                        source={require("../assets/bookmarks.png")}
                        style={{ height: 25, width: 25, marginLeft: 6 }}
                    />
                    <Text style={{ color: "white", fontSize: 15, marginTop: 3 }}>   Bookmarks</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={style.view21}>
                <Text style={style.text14}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DrawerContent;