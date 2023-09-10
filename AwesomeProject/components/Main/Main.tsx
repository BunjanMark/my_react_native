import {Button, Text, View} from 'react-native';

import React from 'react';

const Main = () => {
  // Functions
  let myname = 'Shosho';
  const Display_name = () => {
    console.warn('Hello ' + myname);
  };
  const handleButtonPress = (name: String) => {
    console.warn('Hello, ' + name);
  };

  return (
    <View>
      <Text>This is Main area</Text>
      <Text>You can press the button</Text>
      <View>
        <Button title="display name" color={'orange'} onPress={Display_name} />
        <Button
          title="display name"
          color={'red'}
          onPress={() => {
            console.warn('SHOSHO');
          }}
        />
        <Button
          title="display name with parameter"
          color={'orange'}
          onPress={handleButtonPress.bind(String, myname)}
        />
      </View>
    </View>
  );
};

export default Main;
