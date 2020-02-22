import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import ChatList from './ChatList';
import NewChat from './NewChat';
import GroupChat from './GroupChat';
import PrivateChatList from './PrivateChatList';
import NewChatPrivate from './NewChatPrivate';
const stuck = createStackNavigator({

    ChatList:{
        screen:ChatList
    },
    NewChat:{
        screen:NewChat
    },

    GroupChat:{
        screen:GroupChat
    },
    PrivateChatList:{
        screen:PrivateChatList
    },
    NewChatPrivate:{
        screen:NewChatPrivate,
        
    },
},{
    headerMode:'none',

});

stuck.navigationOptions=({navigation})=>{
    let tabBarVisible = true;
    if(navigation.state.index > 2){
  
        tabBarVisible=false
  
    }
    return{
      tabBarVisible
    }
  }

export default stuck;
