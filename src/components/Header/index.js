import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'components';
import styles from './styles';

const Header = props => {
  return (
    <View style={styles.container} accessibilityLabel="header-background">
      <View style={styles.section(props.withBack)}>
        {props.withBack && (
          <TouchableOpacity
            style={styles.sectionLeft}
            onPress={() => props.navigation.goBack()}
            accessibilityLabel="todo-back-button">
            <Icon
              name="chevron-left"
              accessibilityLabel="header-icon"
              type="Feather"
              style={styles.arrowLeftIcon}
            />
          </TouchableOpacity>
        )}
        <View style={styles.sectionBody}>
          <Text accessibilityLabel="header-title" style={styles.title}>
            {props.title}
          </Text>
        </View>
      </View>
    </View>
  );
};

Header.defaultProps = {
  withBack: false,
};
export default Header;
