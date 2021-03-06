import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Header, Left, Icon } from 'native-base'




// type Props = {};
class SettingsScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="settings" style={{ fontSize: 24, color: tintColor}}/>
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
                <Text>
                    SettingsScreen
                </Text>
            </View>
        </View>
        );
    }
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})