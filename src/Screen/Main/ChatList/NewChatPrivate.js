import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Platform } from 'react-native';
import { Container, Header, Content, Icon, Title, Card, Footer, Input, Thumbnail } from 'native-base';
import Modal from "react-native-modal";
import MainCss from '../MainCss';
import SendPrivate from './SendPrivate';
import ReceivePrivate from './ReceivePrivate';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Select Avatar',
    takePhotoButtonTitle: 'take photo',
    chooseFromLibraryButtonTitle: 'take image',
    videoQuality: 'medium',
    cameraType: 'back',
    tintColor: 'blue',
    mediaType: 'photo',
};

export default class NewChatPrivate extends Component {
    constructor() {
        super();
        this.state = {
            isModalVisible: false,
            onBackdropPress: false,
            hide: false,
            disableinput: true,
            width: 200,
            txt: '',
            data: [
                {
                    key: 'a',
                    text: 'test',
                    image: require('../../../Images/logo.png'),
                    date: '22:00 PM',
                    user_id: 1,

                },
                {
                    key: 'a',
                    text: 'test',
                    image: require('../../../Images/logo.png'),
                    date: '22:00 PM',
                    user_id: 1,

                },
                {
                    key: 'a',
                    text: 'test',
                    image: require('../../../Images/logo.png'),
                    date: '22:00 PM',
                    user_id: 1,

                },
                {
                    key: 'a',
                    text: 'test',
                    image: require('../../../Images/logo.png'),
                    date: '22:00 PM',
                    user_id: 1,

                },
                {
                    key: 'a',
                    text: 'test',
                    image: require('../../../Images/logo.png'),
                    date: '22:00 PM',
                    user_id: 1,

                },
                {
                    key: 'a',
                    text: 'test',
                    image: require('../../../Images/logo.png'),
                    date: '22:00 PM',
                    user_id: 1,

                },
                {
                    key: 'b',
                    text: 'test',
                    image: require('../../../Images/logo.png'),
                    date: '22:00 PM',
                    user_id: 2,
                },
                {
                    key: 'b',
                    text: 'test',
                    image: require('../../../Images/logo.png'),
                    date: '22:00 PM',
                    user_id: 2,
                },

                {
                    key: 'b',
                    text: 'test',
                    image: require('../../../Images/logo.png'),
                    date: '22:00 PM',
                    user_id: 2,
                },


            ],
        };
    }

    textinput(txtchange) {
        this.setState({
            txt: txtchange,
        });
        if (txtchange.length > 0) {
            this.setState({
                disableinput: false,
                hide: true,
                // hide:true,
                // hide3:false,
                width: 200,
            });

        }
        else {
            this.setState({
                disableinput: true,
                hide: false,
                // hide3:true,
                width: 250,
            });
        }
    }

    camera() {
        ImagePicker.launchCamera(options, (response) => {
            const source = { uri: response.uri };
            var d = {
                key: 'c',
                camera: source,
                user_id: 1,
                image: require('../../../Images/logo.png'),
            };

            this.setState(romm => {
                return {
                    data: [...romm.data, d],

                };
            });
            setTimeout(() => {
                this.refs.fla.scrollToEnd();
            }, 300);

        });
    }

    async galery() {

        try {
            ImagePicker.launchImageLibrary(options, (response) => {
                const galery = { uri: response.uri };
                var d = {
                    key: 'c',
                    galery: galery,
                    user_id: 1,
                    image: require('../../../Images/logo.png'),
                };

                 this.setState(romm => {
                    return {
                        data: [...romm.data, d],
                        isModalVisible: !this.state.isModalVisible,
                    };
                });
                setTimeout(() => {
                    this.refs.fla.scrollToEnd();
                }, 300);

            })
        } catch (error) {
            // Error saving data
        }

    }

    clickinput() {
        var coment = this.state.txt;
        var t = {
            key: 'c',
            text: coment,
            image: require('../../../Images/logo.png'),
            date: '22:00',
            user_id: 1,
        };

        this.setState(rom => {
            return {
                data: [...rom.data, t],
                txt: '',
                disableinput: true,

            };
        });
        setTimeout(() => {
            this.refs.fla.scrollToEnd();
        }, 300);


    }
    toggleModal = () => {
        this.setState({
            isModalVisible: !this.state.isModalVisible,
            onBackdropPress: !this.state.onBackdropPress
        });
    };

    render() {

        return (
            <Container>
                <Header style={MainCss.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon name="arrowleft" type="AntDesign" style={{ color: '#faa61a' }} />
                    </TouchableOpacity>
                    <Title>online chate</Title>
                    <Text></Text>
                </Header>

                <Image source={require('../../../Images/patern2.jpg')} resizeMode='stretch' style={MainCss.backgroundImage} />


                <FlatList
                    ref="fla"
                    data={this.state.data}
                    renderItem={({ item }) => {
                        if (item.user_id === 1) {
                            return (
                                <SendPrivate
                                    text={item.text}
                                    img={item.image}
                                    date={item.date}
                                    camera={item.camera}
                                    galery={item.galery}
                                />
                            );
                        } else {
                            return (
                                <ReceivePrivate
                                    text={item.text}
                                    img={item.image}
                                    date={item.date}
                                />
                            );
                        }
                    }}
                />
                <View style={{ flex: 1 }}>
                    <Modal isVisible={this.state.isModalVisible}
                        onBackdropPress={this.toggleModal}
                        backdropColor="white"
                        style={{ justifyContent: 'flex-end' }}
                        backdropOpacity={0.1}
                    >
                        <View style={{ height: 200, backgroundColor: "black", marginTop: 50, flexDirection: 'row', width: "100%", justifyContent: 'flex-end' }}>
                            <TouchableOpacity style={{ marginRight: 20, width: Platform.OS === 'ios' ? 40 : 40, height: Platform.OS === 'ios' ? 40 : 40, borderRadius: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'deepskyblue', }}>
                                <Icon name="keyboard-voice" type="MaterialIcons" style={{ fontSize: 25, color: '#F5F5F5' }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.galery()} style={{ marginRight: 20, width: Platform.OS === 'ios' ? 40 : 40, height: Platform.OS === 'ios' ? 40 : 40, borderRadius: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'deepskyblue', }}>
                                <Icon name="camera" type="Feather" style={{ fontSize: 25, color: '#F5F5F5' }} />
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
                <Footer style={MainCss.newchatprivateviewtotal}>
                    <TouchableOpacity onPress={() => this.camera()} style={{ width: Platform.OS === 'ios' ? 40 : 40, height: Platform.OS === 'ios' ? 40 : 40, borderRadius: 40, alignItems: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: 'deepskyblue' }}>
                        <Icon name="camera" type="Feather" style={{ fontSize: 25, color: '#F5F5F5' }} />
                    </TouchableOpacity>
                    <View style={{ height: 40, borderRadius: 15, width: (this.state.width) }}>
                        <Input placeholder="Type a message" style={{ borderWidth: 1, borderRadius: 15, textAlign: 'left', paddingLeft: 20, fontSize: 15 }}
                            value={this.state.txt}
                            onChangeText={(text) => this.textinput(text)}
                        />
                    </View>
                    <TouchableOpacity onPress={this.toggleModal} style={{ width: Platform.OS === 'ios' ? 40 : 40, height: Platform.OS === 'ios' ? 40 : 40, borderRadius: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'deepskyblue', }}>
                        <Icon name="attachment" type="Entypo" style={{ fontSize: 25, color: '#F5F5F5' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: Platform.OS === 'ios' ? 50 : 40, height: Platform.OS === 'ios' ? 40 : 40, borderRadius: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'deepskyblue', }}>
                        <Icon name="keyboard-voice" type="MaterialIcons" style={{ fontSize: 25, color: '#F5F5F5' }} />
                    </TouchableOpacity>
                    {this.state.hide &&
                        <TouchableOpacity disabled={this.state.disableinput} style={{ width: Platform.OS === 'ios' ? 40 : 40, height: Platform.OS === 'ios' ? 40 : 40, borderRadius: 15, alignItems: 'center', backgroundColor: 'blue', }}
                            onPress={this.clickinput.bind(this)}>
                            <Icon name="chevrons-right" type="MaterialIcons" style={{ fontSize: 40, color: '#3f51b5' }} />
                        </TouchableOpacity>

                    }
                </Footer>
            </Container>
        );
    }
}
