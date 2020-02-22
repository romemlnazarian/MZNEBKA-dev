import React, {Component} from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import {Container, Header, Content, Icon, Title, Card, Thumbnail} from 'native-base';
import MainCss from '../MainCss';

export default class ReceivePrivate extends Component{
    render(){

        return(

           <View style={MainCss.containerreceve}>
               <View style={MainCss.fistuserreceve}>
                   <Thumbnail source={this.props.img} resizeMode='stretch'/>
                   <View style={MainCss.text1receve}>
                       <Text style={{marginTop:5}}>{this.props.text}</Text>
                       <Text style={{marginTop:20,fontSize:10}}>{this.props.date}</Text>
                   </View>
               </View>
           </View>

        )
    }
}

