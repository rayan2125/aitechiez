import React, { useState } from 'react';
import { View, Text,  } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const DropdownComponent = () => {
  const [selectedValue, setSelectedValue] = useState('option1');

  return (
    <View>
      <Text>Select an option:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Option 1" value="option1" />
        <Picker.Item label="Option 2" value="option2" />
        <Picker.Item label="Option 3" value="option3" />
      </Picker>
    </View>
  );
};

export default DropdownComponent;