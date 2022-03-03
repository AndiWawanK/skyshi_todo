import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import {Icon, Input, InputSelect} from 'components';
import styles from './styles';
import {Colors} from 'styles';

const ModalAddActivityItem = props => {
  return (
    <Modal
      isVisible={props.visible}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      hideModalContentWhileAnimating={true}>
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.title} accessibilityLabel="modal-add-title">
            {props.title}
          </Text>
          <TouchableOpacity
            onPress={props.onClose}
            accessibilityLabel="modal-add-close-button">
            <Icon name="close" type="AntDesign" style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputSection}>
          <Input
            label="Nama Activity"
            placeholder="Tambahkan Nama Activity"
            {...props}
          />
          <InputSelect
            selected={props.selected}
            onChangeValue={props.onChangeValue}
          />
        </View>
        <View style={styles.bodyFooter}>
          <TouchableOpacity
            style={styles.buttonSave(props.value?.length > 0 ? false : true)}
            disabled={props.value?.length > 0 ? false : true}
            accessibilityLabel="modal-add-save-button"
            onPress={props.onSave}>
            {props.loading ? (
              <ActivityIndicator size="small" color={Colors.WHITE} />
            ) : (
              <Text style={styles.buttonSaveTitle}>Simpan</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

ModalAddActivityItem.defaultProps = {
  value: '',
  loading: false,
  selected: null,
};
export default ModalAddActivityItem;
