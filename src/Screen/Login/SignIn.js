import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Container, Header, Content, Title, Thumbnail} from 'native-base';
import {TextField} from 'react-native-material-textfield';
import Logincss from './Logincss';

export default class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            EorN: '',
            EorNeror: '',
            password: '',
            passeror: '',
        };
    }

    user(usertext) {
        this.setState({
           EorN: usertext,
        });
    }

    pass(passtext) {
        this.setState({
            password: passtext,
        });
    }

    login() {
        var user = this.state.EorN;
        var pass = this.state.password;
        this.setState({
            EorNeror: '',
            passeror: '',
        });
        if (user === '') {
            this.setState({
                EorNeror: 'ایمیل نمیتواند خالی باشد',
            });
        } else if (pass.length < 6) {
            this.setState({
                passeror: 'پسورد باید بیشتر از شش حرف باشد',
            });
        } else {
            //dargah server
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
                            value={this.state.EorN}
                            onChangeText={(txt) => this.user(txt)}
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
                        <TouchableOpacity style={Logincss.btn} onPress={() => this.login()}>
                            <Text style={{color: '#fff', fontSize: 18}}>Login In</Text>
                        </TouchableOpacity>
                        <View style={Logincss.total}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('SingUp')}>
                                <Text style={Logincss.forgerpass}>Do you registered ?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={Logincss.register}>forget password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}





