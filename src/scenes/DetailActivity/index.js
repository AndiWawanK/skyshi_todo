import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  Container,
  Header,
  Button,
  ActivityEmptyState,
  Icon,
  TodoItem,
  ModalDeleteConfirmation,
  ModalAddActivityItem,
  FilterButton,
} from 'components';
import {Colors} from 'styles';
import styles from './styles';
import useDetailActivity from './useDetailActivity';

const DetailActivity = ({route, navigation}) => {
  const {
    isActivitiyEdit,
    setIsActivitiyEdit,
    activityItems,
    loading,
    handleRefresh,
    handleCheckedItem,
    handleDeleteActivityItem,
    modalDelete,
    setModalDelete,
    modalAdd,
    setModalAdd,
    handleCreateNewActivityItem,
    activityGroupTitle,
    setActivityGroupTitle,
    handleUpdateActivityGroupTitle,
    handleFilterActivityItem,
    extraActivityItems,
    modalEdit,
    setModalEdit,
    handleUpdateActivityItem,
  } = useDetailActivity(route, navigation);
  return (
    <Container
      barStyle="light-content"
      barColor={Colors.SECONDARY}
      backgroundColor={Colors.WHITE}>
      <Header title="New Activity" withBack={true} navigation={navigation} />
      <ScrollView nestedScrollEnabled={true}>
        <>
          <View style={styles.topHeaderSection(isActivitiyEdit)}>
            {isActivitiyEdit ? (
              <TextInput
                autoFocus={isActivitiyEdit}
                value={activityGroupTitle}
                onChangeText={val => setActivityGroupTitle(val)}
                style={styles.topHeaderInput}
              />
            ) : (
              <Text
                style={styles.topHeaderTitle}
                accessibilityLabel="activity-title">
                {activityGroupTitle}
              </Text>
            )}
            {isActivitiyEdit ? (
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => {
                  handleUpdateActivityGroupTitle();
                  setIsActivitiyEdit(false);
                }}
                accessibilityLabel="todo-title-edit-button">
                <Text style={styles.editButtonTitle}>Simpan</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => setIsActivitiyEdit(true)}
                accessibilityLabel="todo-title-edit-button">
                <Icon
                  name="pencil"
                  type="SimpleLineIcons"
                  style={styles.pencilIcon}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.buttonSection}>
            <FilterButton
              onChangeValue={val => handleFilterActivityItem(val)}
            />
            <Button
              title="Tambah"
              onPress={() => setModalAdd({...modalAdd, show: true})}
              accessibilityLabel="activity-add-button"
              icon="plus"
              type="Entypo"
            />
          </View>
        </>
        <FlatList
          scrollEnabled={false}
          data={activityItems}
          extraData={extraActivityItems}
          contentContainerStyle={styles.container}
          refreshing={loading}
          onRefresh={() => handleRefresh()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TodoItem
              item={item}
              onChecked={() => handleCheckedItem(item)}
              checked={item.is_active === 1 ? false : true}
              onEdit={() =>
                setModalEdit({...modalEdit, show: true, data: item})
              }
              onDelete={() => setModalDelete({status: true, item: item})}
            />
          )}
          ListFooterComponent={
            !loading &&
            activityItems.length === 0 && (
              <ActivityEmptyState
                image={require('assets/images/todo-empty-state.png')}
                message="Buat List Item kamu"
                accessibilityLabel="todo-empty-state"
              />
            )
          }
        />
      </ScrollView>
      <ModalDeleteConfirmation
        visible={modalDelete.status}
        message="Apakah anda yakin menghapus List Item"
        deletedItem={' “' + modalDelete.item?.title + '”?'}
        onCancel={() => setModalDelete({status: false, item: null})}
        onDelete={() => handleDeleteActivityItem()}
      />
      <ModalAddActivityItem
        title="Tambah List Item"
        visible={modalAdd.show}
        value={modalAdd.data.title}
        loading={modalAdd.loading}
        onChangeValue={val =>
          setModalAdd({
            ...modalAdd,
            data: {...modalAdd.data, priority: val.value},
          })
        }
        onClose={() => setModalAdd({...modalAdd, show: false})}
        onChangeText={val =>
          setModalAdd({
            ...modalAdd,
            data: {...modalAdd.data, title: val},
          })
        }
        onSave={() => handleCreateNewActivityItem()}
      />

      <ModalAddActivityItem
        title="Edit List Item"
        visible={modalEdit.show}
        value={modalEdit.data.title}
        selected={modalEdit.data.priority}
        loading={modalEdit.loading}
        onChangeValue={val =>
          setModalEdit({
            ...modalEdit,
            data: {...modalEdit.data, priority: val.value},
          })
        }
        onClose={() => setModalEdit({...modalEdit, show: false})}
        onChangeText={val =>
          setModalEdit({
            ...modalEdit,
            data: {...modalEdit.data, title: val},
          })
        }
        onSave={() => handleUpdateActivityItem()}
      />
    </Container>
  );
};

export default DetailActivity;
