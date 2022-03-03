import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modal';
import {Icon, Input} from 'components';
import styles from './styles';
import {Colors} from 'styles';

const ModalDeleteConfirmation = props => (
  <Modal
    isVisible={props.visible}
    useNativeDriver={true}
    useNativeDriverForBackdrop={true}
    hideModalContentWhileAnimating={true}>
    <View style={styles.body}>
      <Image
        source={require('assets/images/modal-delete-icon.png')}
        accessibilityLabel="modal-delete-icon"
        style={styles.imageWarning}
      />
      <Text style={styles.message} accessibilityLabel="modal-delete-title">
        {props.message}
        <Text style={styles.messageBold}>{props.deletedItem}</Text>
      </Text>
      <View style={styles.buttonSection}>
        <TouchableOpacity
          style={styles.cancelledButton}
          onPress={props.onCancel}
          accessibilityLabel="modal-add-save-button">
          <Text style={styles.cancelledButtonTitle}>Batal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          accessibilityLabel="modal-add-save-button"
          onPress={props.onDelete}>
          <Text style={styles.deleteButtonTitle}>Hapus</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

export default ModalDeleteConfirmation;
