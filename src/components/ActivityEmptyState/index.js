import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const ActivityEmptyState = props => (
  <View style={styles.emptyStateSection}>
    <Image
      resizeMode="contain"
      source={props.image}
      style={styles.activityEmptyState}
      accessibilityLabel={props.accessibilityLabel}
    />
    <Text
      style={styles.activityEmptyStateLabel}
      accessibilityLabel="activity-empty-state-label">
      {props.message}
    </Text>
  </View>
);

export default ActivityEmptyState;
