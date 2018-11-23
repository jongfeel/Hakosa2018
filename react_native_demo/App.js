/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      resolved: {},
    };
    this._onPressButton = this._onPressButton.bind(this)
  }

  _onPressButton = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos/" + Math.floor((Math.random() * 5000) + 1));
    const resolve = await response.json();
    this.setState({ resolved: resolve});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.plaintext}>The ID is {this.state.resolved.id}</Text>
        <Text style={styles.plaintext}>The Title is {this.state.resolved.title}</Text>
        <Image style={{ width: 240, height: 240 }} source={{ uri: this.state.resolved.url}}></Image>
        <Button
            onPress={this._onPressButton}
            title="GET DATA"
            style={styles.buttons}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  plaintext: {
    fontSize: 24,
    textAlign: 'left',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttons: {
    textAlign: 'center',
    marginTop: 10,
  },
});
