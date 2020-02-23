import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Icon, Title, Card, Thumbnail } from 'native-base';
import MainCss from '../MainCss';

export default class SendPrivate extends Component {
    render() {

        return (

            <View style={MainCss.containersend}>
                <View style={MainCss.fistusersend}>
                    {this.props.text ?
                        <View style={MainCss.text1send}>

                            <Text style={{ marginTop: 5 }}>{this.props.text}</Text>
                            <Text style={{ marginTop: 20, fontSize: 10 }}>{this.props.date}</Text>
                        </View> :

                        this.props.camera ?
                        <View>
                            <Image source={this.props.camera} style={{ width: 250, height: 250, }} />
                            <Text style={{ marginTop: 20, fontSize: 10 }}>{this.props.date}</Text>
                        </View>
                        :
                        <View>
                        <Image source={this.props.galery} style={{ width: 250, height: 250, }} />
                        <Text style={{ marginTop: 20, fontSize: 10 }}>{this.props.date}</Text>
                    </View>
                    }



                    <Thumbnail source={this.props.img} resizeMode='stretch' />
                </View>
            </View>

        )
    }
}



