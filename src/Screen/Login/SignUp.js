import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Container, Header, Content, Title, Thumbnail,Icon} from 'native-base';
import {TextField} from 'react-native-material-textfield';
import Logincss from './Logincss';

export default class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            username:'',
            usereror:'',
            EorN: '',
            EorNeror: '',
            password: '',
            passeror: '',
            repetpass: '',
            repetpasseror: '',
            txt: '',
        };
    }
    username(usertext) {
        this.setState({
            username: usertext,
        });
    }

   email(emailtext) {
        this.setState({
            EorN: emailtext,
        });
    }

    pass(passtext) {
        this.setState({
            password: passtext,
        });
    }
    repetpass(repetpasstext) {
        this.setState({
            repetpass: repetpasstext,
        });
    }
    login() {
        var user = this.state.username;
        var email = this.state.EorN;
        var pass = this.state.password;
        var repetpass = this.state.repetpass;
        this.setState({
            EorNeror: '',
            passeror: '',
            usereror: '',
            repeteror:''
        });
        if (user === '') {
            this.setState({
                usereror: 'ایمیل نمیتواند خالی باشد',
            });
        } else if (email === '') {
            this.setState({
                EorNeror: 'پسورد باید بیشتر از شش حرف باشد',
            });
        } else if(pass.length<6) {
            this.setState({
                passeror: 'پسورد باید بیشتر از شش حرف باشد',
            });
        }else if(pass !== repetpass){
            this.setState({
                repeteror: 'یکسان نیست',
            });
        }else {
            //server
        }
    }


    render() {
        return (
            <Container>
                <Header style={Logincss.header}>
                    <Title style={{fontSize: 25, color: '#faa61a'}}>MEGABIZ</Title>
                </Header>
                <Content>
                    <View style={Logincss.imgtotal}>
                        <Image source={require('../../Images/logo.png')} resizeMode='stretch' style={Logincss.imgsignup}/>
                    </View>
                    <View style={Logincss.texttotal}>
                        <TextField
                            value={this.state.username}
                            onChangeText={(txt) => this.username(txt)}
                            error={this.state.usereror}
                            baseColor='#000'
                            label='First Name'
                            inputContainerStyle={Logincss.textinput}/>
                        <TextField
                            value={this.state.EorN}
                            onChangeText={(txt) => this.email(txt)}
                            error={this.state.EorNeror}
                            baseColor='#000'
                            label='Email/Number'
                            inputContainerStyle={Logincss.textinput}/>
                        <TextField
                            value={this.state.password}
                            onChangeText={(txt) => this.pass(txt)}
                            secureTextEntry={true}
                            error={this.state.passeror}
                            baseColor='#000'
                            label='Password'
                            inputContainerStyle={Logincss.textinput}/>
                        <TextField
                            value={this.state.repetpass}
                            onChangeText={(txt) => this.repetpass(txt)}
                            secureTextEntry={true}
                            error={this.state.repeteror}
                            baseColor='#000'
                            label='Repet Password'
                            inputContainerStyle={Logincss.textinput}/>
                            <Text>{this.state.txt}</Text>
                        <TouchableOpacity style={Logincss.btn} onPress={() => this.login()}>
                            <Text style={{color: '#fff', fontSize: 18}}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    }
}





