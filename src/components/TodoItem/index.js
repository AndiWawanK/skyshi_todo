import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'components';
import styles from './styles';
import {CHOOSE_PRIORITY} from 'constants';
const TodoItem = ({item, onChecked, checked, onDelete, onEdit}) => {
  const priority = CHOOSE_PRIORITY.find(val => val.value === item.priority);
  return (
    <View style={styles.container} accessibilityLabel="todo-item">
      <TouchableOpacity
        style={styles.checkSection(checked)}
        accessibilityLabel="todo-item-checkbox"
        onPress={() => onChecked()}>
        {checked && (
          <Icon name="check" type="Feather" style={styles.checkIcon} />
        )}
      </TouchableOpacity>
      <View
        style={styles.indicator(priority.color)}
        accessibilityLabel="todo-item-priority-indicator"
      />
      <View style={styles.itemBody}>
        <Text
          numberOfLines={1}
          accessibilityLabel="todo-item-title"
          style={styles.itemTitle(checked)}>
          {item.title}
        </Text>
        <TouchableOpacity
          onPress={onEdit}
          accessibilityLabel="todo-item-edit-button">
          <Icon
            name="pencil"
            type="SimpleLineIcons"
            style={styles.pencilIcon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={onDelete}
        accessibilityLabel="todo-item-delete-button">
        <Icon
          name="ios-trash-outline"
          type="Ionicons"
          style={styles.trashIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
