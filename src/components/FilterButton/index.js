import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'components';
import styles from './styles';
import {FILTERS} from 'constants';

const FilterButton = props => {
  const [showFilter, setShowFilter] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.filterButton}
        activeOpacity={0.5}
        onPress={() => setShowFilter(!showFilter)}
        accessibilityLabel="todo-sort-button">
        <Image
          source={require('assets/images/filter-icon.png')}
          style={styles.filterButtonIcon}
        />
      </TouchableOpacity>
      {showFilter && (
        <View style={styles.content}>
          {FILTERS.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.5}
              onPress={() => {
                setSelected(item);
                props.onChangeValue(item);
                setShowFilter(!showFilter);
              }}
              accessibilityLabel="sort-selection"
              style={styles.filterItem}>
              <Image
                source={item.icon}
                style={styles.filterIcon}
                resizeMode="contain"
                accessibilityLabel="sort-selection-icon"
              />
              <Text
                style={styles.filterTitle}
                accessibilityLabel="sort-selection-title">
                {item.title}
              </Text>
              {selected?.value === item.value && (
                <Icon
                  name="check"
                  type="Feather"
                  style={styles.checkIcon}
                  accessibilityLabel="sort-selection-selected"
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default FilterButton;
