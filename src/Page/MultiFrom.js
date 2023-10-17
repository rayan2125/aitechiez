import React, { useState } from 'react';
import { View, Text,TextInput, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const MultiFrom = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleItemSelected = (itemValue) => {
    setSelectedItems((prevItems) => [...prevItems, itemValue]);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <View style={{ padding: 20 }}>
      <Picker
        selectedValue={null}
        onValueChange={(itemValue) => handleItemSelected(itemValue)}
        mode="dropdown"
        multiple
      >
        <Picker.Item label="Item 1" value="item1" />
        <Picker.Item label="Item 2" value="item2" />
        <Picker.Item label="Item 3" value="item3" />
        {/* Add more items as needed */}
      </Picker>

      {selectedItems.length >= 2 && (
        <Button title="Toggle Form" onPress={toggleForm} />
      )}

      {showForm && (
        <View>
          <TextInput placeholder="Field 1" />
          <TextInput placeholder="Field 2" />
          {/* Add more input fields as needed */}
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </View>
  );
};

export default MultiFrom;
