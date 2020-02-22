import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";
import {Footer} from 'native-base'
 
export default class ModalTester extends Component {
  state = {
    isModalVisible: false,
    onBackdropPress:false
  };
 
  toggleModal = () => {
    this.setState({ 
        isModalVisible: !this.state.isModalVisible,
        onBackdropPress: !this.state.onBackdropPress
    });
  };

 
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal isVisible={this.state.isModalVisible}
        onBackdropPress={this.toggleModal}
        backdropColor="white"
        animationInTiming={500}
        animationOutTiming={500}
        style={{justifyContent:'flex-end'}}
        >
            <View style={{ height:200,backgroundColor:"black",marginTop:50}}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }
}