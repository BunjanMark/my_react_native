import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const Counter = () => {
  const [first, setfirst] = useState(0);

  const incrementCount = () => {
    setfirst(first + 1);
    console.log(first);
    console.warn(first);
  };
  const decrementCount = () => {
    setfirst(first - 1);
    console.log(first);
    console.warn(first);
  };
  return (
    <View>
      <Text>this is counter section</Text>
      <Text>this is counter section</Text>
      <Text>this is counter section</Text>
      <Button title="Increment" onPress={incrementCount} />
      <Button title="decrement" onPress={decrementCount} />
    </View>
  );
};

export default Counter;
