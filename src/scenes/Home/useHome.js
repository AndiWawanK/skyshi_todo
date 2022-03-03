import {useState, useEffect} from 'react';
import {getActivitiy, createActivitiy, deleteActivitiy} from 'utils';
import {ToastAndroid} from 'react-native';

const useHome = navigation => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalAdd, setModalAdd] = useState(false);
  const [title, setTitle] = useState('');
  const [loadingCreate, setLoadingCreate] = useState(false);
  const [modalDelete, setModalDelete] = useState({
    status: false,
    item: null,
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      handleGetActivity();
    });
    return unsubscribe;
  }, [navigation]);

  // get the activity group
  const handleGetActivity = async () => {
    const response = await getActivitiy();
    if (response.request.status === 200) {
      setActivities(response.data.data);
    } else {
      alert('Oops, Something went wrong! Please try again.');
    }
    setLoading(false);
  };

  const handleCreateActivity = async () => {
    setLoadingCreate(true);
    const response = await createActivitiy({
      title: title,
      email: 'andi+1@skyshi.io',
    });
    if (response.request.status === 201) {
      setModalAdd(false);
      setActivities(activities => [response.data, ...activities]);
      ToastAndroid.showWithGravityAndOffset(
        'Berhasil Menambahkan Activity Baru',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } else {
      setModalAdd(false);
      ToastAndroid.showWithGravityAndOffset(
        'Gagal Menambahkan Activity Baru, Silahkan Coba Lagi.',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
    setLoadingCreate(false);
    setTitle('');
  };

  const handleDeleteActivity = async () => {
    const response = await deleteActivitiy(modalDelete.item.id);
    if (response.request.status === 200) {
      const newActivities = activities.filter(
        item => item.id !== modalDelete.item.id,
      );
      setActivities(newActivities);
      ToastAndroid.showWithGravityAndOffset(
        'Activity ' + modalDelete.item.title + ' Berhasil di Hapus.',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      setModalDelete({status: false, item: null});
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Ada Masalah Saat Menghapus Activity ' + modalDelete.item.title,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      setModalDelete({status: false, item: null});
    }
  };

  const handleRefresh = () => {
    setLoading(true);
    handleGetActivity();
  };

  return {
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
  };
};

export default useHome;
