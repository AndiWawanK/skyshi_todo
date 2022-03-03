import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {
  Container,
  Header,
  Button,
  ActivityEmptyState,
  ActivityCard,
  ModalAddActivity,
  ModalDeleteConfirmation,
} from 'components';
import {Colors} from 'styles';
import styles from './styles';
import useHome from './useHome';

const Home = ({navigation}) => {
  const {
    loading,
    activities,
    handleRefresh,
    modalAdd,
    setModalAdd,
    title,
    setTitle,
    handleCreateActivity,
    loadingCreate,
    handleDeleteActivity,
    modalDelete,
    setModalDelete,
  } = useHome(navigation);
  return (
    <Container
      barStyle="light-content"
      barColor={Colors.SECONDARY}
      backgroundColor={Colors.WHITE}>
      <Header title="TO DO LIST APP" />
      <View style={styles.container}>
        <FlatList
          data={activities}
          numColumns={2}
          refreshing={loading}
          onRefresh={() => handleRefresh()}
          ListHeaderComponent={
            <>
              <View style={styles.sectionTop}>
                <Text
                  style={styles.screenLabel}
                  accessibilityLabel="activity-title">
                  Activity
                </Text>
                <Button
                  title="Tambah"
                  onPress={() => setModalAdd(true)}
                  accessibilityLabel="activity-add-button"
                  icon="plus"
                  type="Entypo"
                />
              </View>
              {!loading && activities.length === 0 && (
                <ActivityEmptyState
                  image={require('assets/images/activity-empty-state.png')}
                  message="Buat activity pertamamu"
                  accessibilityLabel="activity-empty-state"
                />
              )}
            </>
          }
          columnWrapperStyle={{justifyContent: 'space-between'}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <ActivityCard
              item={item}
              onPress={() =>
                navigation.navigate('DetailActivity', {activity: item})
              }
              onDelete={() => setModalDelete({status: true, item: item})}
            />
          )}
        />
      </View>
      <ModalAddActivity
        visible={modalAdd}
        value={title}
        onChangeText={val => setTitle(val)}
        loading={loadingCreate}
        onSave={() => handleCreateActivity()}
        onClose={() => {
          setModalAdd(false);
          setTitle('');
        }}
      />
      <ModalDeleteConfirmation
        visible={modalDelete.status}
        message="Apakah anda yakin menghapus activity"
        deletedItem={' “' + modalDelete.item?.title + '”?'}
        onCancel={() => setModalDelete({status: false, item: null})}
        onDelete={() => handleDeleteActivity()}
      />
    </Container>
  );
};

export default Home;
