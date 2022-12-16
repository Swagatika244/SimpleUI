import React from 'react';
import { View, Text } from 'react-native';

function Quiz () {
  return(
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style = {{fontSize: 25, color: 'black', fontWeight: 'bold'}}>Quiz</Text>
    </View>
  )
}

export default Quiz;