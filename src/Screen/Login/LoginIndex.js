import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MainIndex from '../Main/MainIndex';



export default class LoginIndex extends Component {
    render() {
        return (
            <Appcantainer/>
        );
    }
}


const stuck = createStackNavigator({

    SignIn:{
        screen:SignIn
    },
    SingUp:{
        screen:SignUp
    },
    MainIndex:{
        screen:MainIndex
    },
},{
    headerMode:'none',
});


const Appcantainer = createAppContainer(stuck);
