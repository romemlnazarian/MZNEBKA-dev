import React, {Component} from 'react';
import {View, Text, FlatList,TouchableOpacity,Image} from 'react-native';
import {Container, Header, Content, Icon, Title, Card} from 'native-base';
import MainCss from '../MainCss';
import PravateChatListComponent from './PrivateChatListComponent';

export default class PrivateChatList extends Component {
    
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
                    <Title>private Chat List</Title>
                    <Text></Text>
                </Header>
                <Content  style={{backgroundColor:'#cccc'}}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({item})=><PravateChatListComponent
                            name={item.name}
                            image={item.image}
                            date={item.date}
                            onpress={()=>this.props.navigation}
                        />}
                    />
                </Content>
            </Container>
        );
    }
}

