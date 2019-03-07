import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native';
import { Button, Card, FormLabel, FormInput } from 'react-native-elements'
import Buttoner from '../Components/Buttoner'

class LoginScreen extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: ''
        };
    }
    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
                <Card>
                <FormLabel>Email</FormLabel>
                <FormInput 
                    placeholder="Email address..." 
                    onChangeText = {(userName) => 
                        this.setState({userName})
                    }
                />
                <FormLabel>Password</FormLabel>
                <FormInput 
                    secureTextEntry 
                    placeholder="Password..." 
                    onChangeText = {(passWord) => 
                        this.setState({passWord})
                    }
                />
                <Buttoner 
                    buttonText = {'Sign In'}
                    action = {() => 
                        this.props.navigation.navigate('drawerStack')
                    }
                />
                </Card>
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})