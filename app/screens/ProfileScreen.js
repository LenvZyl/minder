import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image } from 'react-native';

import { Header, Left, Icon } from 'native-base'
import { Button, Card, FormLabel, FormInput } from 'react-native-elements'



// type Props = {};
class ProfileScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="person" style={{ fontSize: 24, color: tintColor}}/>
        )
    }

    render() {
        return (
        <View style={{flex:1}}>
            <Header>
                <Left>
                    <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
                </Left>
            </Header>
            <View style={styles.container}>
                <View style={{height: 150, width: 300, backgroundColor: 'clear', alignItems: 'center', marginLeft: 5}}>
                    <Image source={require('./../assets/pp.jpg')} style={{height: 120, width: 120, borderRadius: 60}}/>
                </View>
                <Card style={{flex: 1, paddingTop: 0}}>
                    <View style={{height: 150, width: 300, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
                    </View>
                </Card>      
                <Card style={{flex: 1, paddingTop: 0}}>
                    <View style={{height: 150, width: 300, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
                    </View>
                </Card>                 
            </View>
        </View>
        );
    }
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})