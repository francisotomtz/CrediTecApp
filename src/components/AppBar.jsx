import React from "react"
import {View, StyleSheet} from 'react-native'
import StyledText from "./StyledText"
import Constants from 'expo-constants'
import theme from "../theme"
import { Link } from "react-router-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    text: {
        color: theme.appBar.textPrimary
    }
})


const AppBar = () => {
    return (
        <View style={styles.container}>
            <StyledText fontWeight='bold' style={styles.text}>
                Events
            </StyledText>
        </View>
    )
}

export default AppBar