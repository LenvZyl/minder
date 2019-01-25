import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native';
import { Button, Card, FormLabel, FormInput } from 'react-native-elements'


// type Props = {};
class LoginScreen extends Component {

    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
                <Card>
                <FormLabel>Email</FormLabel>
                <FormInput placeholder="Email address..." />
                <FormLabel>Password</FormLabel>
                <FormInput secureTextEntry placeholder="Password..." />

                <Button
                    buttonStyle={{ marginTop: 20 }}
                    backgroundColor="#03A9F4"
                    title="SIGN IN"
                    onPress={() => 
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