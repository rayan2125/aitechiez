import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const BottomDropdown = ({ isOpen, onClose, onOptionSelect }) => {
  
  const renderOptions = () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];

    return options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={styles.option}
        onPress={() => onOptionSelect(option)}
      >
        <Text>{option}</Text>
      </TouchableOpacity>
    ));
  };

  
  return (
    <View style={[styles.container, isOpen ? styles.open : styles.closed]}>
      {renderOptions()}
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  open: {
    height: 200,
  },
  closed: {
    height: 0,
  },
  option: {
    marginVertical: 8,
  },
  closeButton: {
    marginTop: 16,
  },
});

export default BottomDropdown;
