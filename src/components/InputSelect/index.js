import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Text, FlatList, ScrollView} from 'react-native';
import {Icon} from 'components';
import styles from './styles';
import {CHOOSE_PRIORITY} from 'constants';

const InputSelect = props => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(
    props.selected
      ? CHOOSE_PRIORITY.find(val => val.value === props.selected)
      : null,
  );
  return (
    <View
      style={styles.container}
      accessibilityLabel="modal-add-priority-dropdown">
      <Text style={styles.label} accessibilityLabel="modal-add-priority-title">
        Priority
      </Text>
      <TouchableOpacity
        style={styles.selectSection(selected)}
        activeOpacity={0.5}
        onPress={() => setIsActive(!isActive)}>
        {selected ? (
          <View style={styles.selectedValueSection}>
            <View style={styles.selectedIndicator(selected.color)} />
            <Text style={styles.selectPlaceholder}>{selected.title}</Text>
          </View>
        ) : (
          <Text style={styles.selectPlaceholder}>Pilih priority</Text>
        )}
        <Icon name="chevron-down" type="Feather" style={styles.chevronIcon} />
      </TouchableOpacity>
      {isActive && (
        <View style={styles.content}>
          <FlatList
            data={CHOOSE_PRIORITY}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <TouchableOpacity
                accessibilityLabel="modal-add-priority-item"
                style={styles.priorityItem}
                onPress={() => {
                  setSelected(item);
                  setIsActive(!isActive);
                  props.onChangeValue(item);
                }}>
                <View style={styles.priorityIindicator(item.color)} />
                <Text style={styles.priorityTitle}>{item.title}</Text>
                {selected?.value === item.value && (
                  <Icon name="check" type="Feather" style={styles.checkIcon} />
                )}
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};
InputSelect.defaultProps = {
  selected: null,
};
export default InputSelect;
