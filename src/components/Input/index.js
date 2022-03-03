import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
const Input = props => {
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.label} accessibilityLabel="modal-add-name-title">
        {props.label}
      </Text>
      <View style={styles.inputSection(focused)}>
        <TextInput
          accessibilityLabel="modal-add-name-input"
          style={styles.input}
          onFocus={() => setFocused(!focused)}
          {...props}
        />
      </View>
    </View>
  );
};

export default Input;
