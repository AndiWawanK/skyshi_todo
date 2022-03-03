import {useState, useEffect} from 'react';
import {
  getActivitiyItem,
  updateActivitiyItem,
  deleteActivitiyItem,
  createActivitiyItem,
  updateActivitiy,
} from 'utils';
import {ToastAndroid} from 'react-native';

const useDetailActivity = (route, navigation) => {
  const activityId = route.params.activity.id;
  const [isActivitiyEdit, setIsActivitiyEdit] = useState(false);
  const [activityItems, setActivityItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activityGroupTitle, setActivityGroupTitle] = useState(
    route.params.activity.title,
  );
  const [modalAdd, setModalAdd] = useState({
    show: false,
    data: {title: '', priority: 'very-high'},
    loading: false,
  });
  const [modalEdit, setModalEdit] = useState({
    show: false,
    data: {title: '', priority: ''},
    loading: false,
  });
  const [modalDelete, setModalDelete] = useState({
    status: false,
    item: null,
  });
  const [extraActivityItems, setExtraActivityItems] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      handleGetActivityItem();
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const handleGetActivityItem = async () => {
    const response = await getActivitiyItem(activityId);
    if (response.request.status === 200) {
      setActivityItems(response.data.data);
    }
    setLoading(false);
  };

  const handleCheckedItem = async item => {
    const response = await updateActivitiyItem(
      {
        title: item.title,
        is_active: item.is_active === 1 ? 0 : 1,
        priority: item.priority,
      },
      item.id,
    );
    if (response.request.status === 200) {
      let currentActivity = activityItems.find(val => val.id === item.id);
      let indexOfItem = activityItems.indexOf(item);
      currentActivity.is_active = item.is_active === 1 ? 0 : 1;
      activityItems[indexOfItem] = currentActivity;
      setActivityItems(activityItems);
      handleGetActivityItem();
    }
  };

  const handleDeleteActivityItem = async () => {
    const response = await deleteActivitiyItem(modalDelete.item.id);
    if (response.request.status === 200) {
      const newActivityItems = activityItems.filter(
        item => item.id !== modalDelete.item.id,
      );
      setActivityItems(newActivityItems);
      setModalDelete({status: false, item: null});
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Oops, Something went wrong, Please try again.',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
  };

  const handleCreateNewActivityItem = async () => {
    setModalAdd({...modalAdd, loading: true});
    const response = await createActivitiyItem({
      activity_group_id: activityId,
      title: modalAdd.data.title,
      priority: modalAdd.data.priority,
    });
    if (response.request.status === 201) {
      setActivityItems(activityItems => [response.data, ...activityItems]);
      setModalAdd({...modalAdd, loading: false, show: false});
      ToastAndroid.showWithGravityAndOffset(
        'Berhasil menambahkan list item.',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } else {
      setModalAdd({...modalAdd, loading: false, show: false});
      ToastAndroid.showWithGravityAndOffset(
        'Oops, Something went wrong, Please try again.',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
  };

  const handleUpdateActivityGroupTitle = async () => {
    const response = await updateActivitiy(
      {
        title: activityGroupTitle,
      },
      activityId,
    );
    if (response.request.status === 200) {
      ToastAndroid.showWithGravityAndOffset(
        'Berhasil mengupdate activity group.',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Oops, Something went wrong, Please try again.',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
  };

  const handleFilterActivityItem = val => {
    switch (val.value) {
      case 'latest':
        const newLatestActivitiyItems = activityItems.sort(
          (a, b) => b.id - a.id,
        );
        setActivityItems(newLatestActivitiyItems);
        setExtraActivityItems(extraActivityItems => [
          ...extraActivityItems,
          newLatestActivitiyItems,
        ]);
        break;
      case 'longest':
        const newLongestActivitiyItems = activityItems.sort(
          (a, b) => a.id - b.id,
        );
        setActivityItems(newLongestActivitiyItems);
        setExtraActivityItems(extraActivityItems => [
          ...extraActivityItems,
          newLongestActivitiyItems,
        ]);
        break;
      case 'asc':
        const newAscActivitiyItems = activityItems.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        });
        setActivityItems(newAscActivitiyItems);
        setExtraActivityItems(extraActivityItems => [
          ...extraActivityItems,
          newAscActivitiyItems,
        ]);
        break;
      case 'desc':
        const newDescActivitiyItems = activityItems.sort((a, b) => {
          if (b.title < a.title) {
            return -1;
          }
          return 0;
        });
        setActivityItems(newDescActivitiyItems);
        setExtraActivityItems(extraActivityItems => [
          ...extraActivityItems,
          newDescActivitiyItems,
        ]);
        break;
      case 'not_finished':
        const newUnDonecActivitiyItems = activityItems.sort(
          (a, b) => a.is_active === 0,
        );
        setActivityItems(newUnDonecActivitiyItems);
        setExtraActivityItems(extraActivityItems => [
          ...extraActivityItems,
          newUnDonecActivitiyItems,
        ]);
    }
  };

  const handleUpdateActivityItem = async () => {
    setModalEdit({...modalEdit, loading: true});
    const response = await updateActivitiyItem(
      {
        title: modalEdit.data.title,
        is_active: modalEdit.data.is_active,
        priority: modalEdit.data.priority,
      },
      modalEdit.data.id,
    );
    if (response.request.status === 200) {
      let currentActivity = activityItems.find(
        val => val.id === modalEdit.data.id,
      );
      let indexOfItem = activityItems.indexOf(modalEdit.data);
      currentActivity.title = modalEdit.data.title;
      currentActivity.priority = modalEdit.data.priority;
      activityItems[indexOfItem] = currentActivity;
      setActivityItems(activityItems);
      handleGetActivityItem();
    }
    setModalEdit({...modalEdit, loading: false, show: false});
  };

  const handleRefresh = () => {
    setLoading(true);
    handleGetActivityItem();
  };

  return {
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
  };
};

export default useDetailActivity;
