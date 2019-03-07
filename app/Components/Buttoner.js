import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native';
import { Button, Card, FormLabel, FormInput } from 'react-native-elements'


const Buttoner = (props) => {
    return (
        <Button 
            style={styles.buttonStyle} 
            title={props.buttonText} 
            onPress={props.action} 
            backgroundColor = "#03A9F4"
        />

    )
}

const styles = {
    buttonStyle: {
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        overflow: 'hidden'
    }
}
export default Buttoner