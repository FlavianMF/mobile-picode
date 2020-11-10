import React from 'react';
import {View, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={{flex: 1, backgroundColor: '#fff'}} />
    </>
  );
};

export default App;
