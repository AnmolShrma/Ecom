import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import GroupListScreen from '../../entities/GroupListScreen';
import * as api from '../../services/groupList';
import LoaderHelper from '../../adapters/LoaderHelper';

const GroupList = ({navigation: {navigate}}) => {
  const [groupList, setGroupList] = useState([]);
  useEffect(() => {
    const getGroupList = async () => {
      try {
        //STORE DATA
        LoaderHelper.loaderStatus(true);
        const response = await api.readAllGroupList();
        LoaderHelper.loaderStatus(false);
        setGroupList(response);
      } catch (err) {
        LoaderHelper.loaderStatus(false);
        console.log('readAllGroupList error: ', err);
        Alert.alert(
          'Error',
          err,
          [{text: 'OK', onPress: () => console.log('Ok')}],
          {cancelable: false},
        );
      }
    };
    getGroupList();
  }, []);

  const handleNavigate = (itemDetails) => {
    console.log('handleNavigate');
    navigate('ItemDetails', {itemDetails});
  };

  return (
    <GroupListScreen
      groupList={groupList?.payload}
      handleNavigate={handleNavigate}
    />
  );
};

export default GroupList;
