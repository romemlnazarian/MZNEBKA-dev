import React, {Component} from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import {Container, Header, Content, Icon, Title, Card, Thumbnail} from 'native-base';
import MainCss from '../MainCss';

export default class SendPrivate extends Component{
    render(){

        return(

                <View style={MainCss.containersend}>
                    <View style={MainCss.fistusersend}>
                        <View style={MainCss.text1send}>
                            <Text style={{marginTop:5}}>{this.props.text}</Text>
                            <Text style={{marginTop:20,fontSize:10}}>{this.props.date}</Text>
                        </View>

                        <Thumbnail source={this.props.img} resizeMode='stretch' />
                    </View>
                </View>

        )
    }
}



