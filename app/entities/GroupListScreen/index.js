import React, {useCallback} from 'react';
import {FlatList} from 'react-native';

import Container from '../../components/Container';
import GroupItemCard from '../../components/GroupCard';

const GroupListScreen = (props) => {
  const {groupList, handleNavigate} = props;
  // console.log('groupList', groupList);
  const renderItem = (item) => {
    return <GroupItemCard cardItem={item} handleNavigate={handleNavigate} />;
  };
  return (
    <Container>
      <FlatList
        data={groupList}
        extraData={groupList}
        renderItem={({item, index}) => renderItem(item, index)}
        keyExtractor={useCallback((item) => item.expireAt.toString(), [])}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default GroupListScreen;
