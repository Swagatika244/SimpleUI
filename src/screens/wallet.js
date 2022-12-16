import React from 'react';
import { View, Text } from 'react-native';

function Wallet () {
  return(
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style = {{fontSize: 25, color: 'black', fontWeight: 'bold'}}>Wallet</Text>
    </View>
  )
}

export default Wallet;