import React from 'react';
import {Image, SafeAreaView, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Image source={require('./giphy.gif')} />
      </SafeAreaView>
    </>
  );
};

export default App;
