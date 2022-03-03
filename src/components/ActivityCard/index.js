import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'components';
import styles from './styles';
import moment from 'moment';

const ActivityCard = ({item, onDelete, onPress}) => {
  return (
    <View style={styles.container} accessibilityLabel="activity-item">
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.titleSection}
        onPress={onPress}>
        <Text style={styles.title} accessibilityLabel="activity-item-title">
          {item.title}
        </Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.date} accessibilityLabel="activity-item-date">
          {moment(item.created_at).format('DD MMMM YYYY')}
        </Text>
        <TouchableOpacity
          onPress={onDelete}
          accessibilityLabel="activity-item-delete-button">
          <Icon
            name="ios-trash-outline"
            type="Ionicons"
            style={styles.trashIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActivityCard;
