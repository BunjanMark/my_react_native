import React from 'react';
import {Text, View, Button} from 'react-native';

let name = 'Shosho';
let name2 = 'Bunjan';
const App = () => {
  let x = 2000;
  let y = 200;
  let age = 11;

  return (
    <View>
      <Text>Hello world</Text>
      <Text>Hello world</Text>
      <Text>Hello worldddd</Text>
      <Button title="Press me" />
      <View>
        <Text>{name}</Text>
        <Text>
          Hello worlddd, this ss {name} {name2}
        </Text>

        {age >= 20 ? (
          <Text style={{fontSize: 40, color: 'red'}}>Youre shit 20 above</Text>
        ) : (
          <Text style={{color: 'blue'}}>Youre underage</Text>
        )}
      </View>
    </View>
  );
};

export default App;
