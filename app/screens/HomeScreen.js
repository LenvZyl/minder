import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Header, Left, Icon } from 'native-base'
import { Button, Card, FormLabel, FormInput } from 'react-native-elements'



// type Props = {};
class HomeScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor}}/>
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
                <Card>
                    <Text>
                        HomeScreen
                    </Text>
                </Card>                
            </View>
        </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})