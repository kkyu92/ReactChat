import React from 'react';
import Home from './components/Home';
import Chat from './components/Chat';

import {Router, Scene} from 'react-native-router-flux';

import {Platform, StyleSheet, View} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <Router>
        <View style={styles.container}>
          <Scene key="root">
            <Scene key="home" component={Home} title="Home" />
            <Scene key="chat" component={Chat} title="Chat" />
          </Scene>
        </View>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'flex-end',
    // paddingHorizontal: 30,
    // paddingVertical: 100,
    backgroundColor: '#FDF6AA',
  },
  text: {
    color: '#2c2c2c',
    fontSize: 30,
  },
});

export default App;
