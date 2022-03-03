import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Icon} from 'components';
import styles from './styles';
import {Colors} from 'styles';

const Button = props => {
  return (
    <TouchableOpacity
      accessibilityLabel={props.accessibilityLabel}
      onPress={props.onPress}
      style={styles.container}>
      {props.icon && (
        <Icon
          name={props.icon}
          type={props.type}
          style={styles.buttonIcon}
          accessibilityLabel="button-icon"
        />
      )}
      <Text accessibilityLabel="button-title" style={styles.title}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  loading: false,
  icon: false,
};

export default Button;
