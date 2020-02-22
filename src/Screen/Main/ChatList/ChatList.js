import React, {Component} from 'react';
import {View, Text, FlatList,TouchableOpacity} from 'react-native';
import {Container, Header, Content, Icon, Title, Card} from 'native-base';
import MainCss from '../MainCss';
import ChatListComponent from './ChatListComponent';

export default class ChatList extends Component {

    constructor() {
        super();
        this.state = {
            data: [
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },     {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },
                {
                    key: 'a',
                    name: 'name',
                    image: require('../../../Images/logo.png'),
                    date: '2020,20,20',
                },

            ],
        };
    }

    render() {
        return (
            <Container>
                <Header style={MainCss.header}>
                    <Text></Text>
                    <Title>Chat List</Title>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('NewChat')}>
                        <Icon name="plus" type="Entypo" style={{color:"#faa61a"}}/>
                    </TouchableOpacity>
                </Header>
                <Content  style={{backgroundColor:'#cccc'}}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({item})=><ChatListComponent
                            name={item.name}
                            image={item.image}
                            date={item.date}
                        />}
                    />
                </Content>
            </Container>
        );
    }
}

