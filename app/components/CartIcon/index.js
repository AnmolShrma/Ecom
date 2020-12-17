import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {PRIMARY} from '../../theme/colors';

const CartIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
      <FontAwesome5 name="opencart" color={PRIMARY} size={24} />
    </TouchableOpacity>
  );
};

export default CartIcon;
