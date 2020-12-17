import React, {useContext} from 'react';
import {Alert} from 'react-native';
import {CheckoutItemsContext} from '../../context/CheckoutItemsProvider';
import CheckoutScreen from '../../entities/CheckoutScreen';

const Checkout = ({navigation: {navigate}}) => {
  const [checkoutItemsState, updateCheckoutItemsState] = useContext(
    CheckoutItemsContext,
  );

  const handleItemPurchase = () => {
    Alert.alert(`${checkoutItemsState?.itemName} Purchased`);
    updateCheckoutItemsState({});
  };
  return (
    <CheckoutScreen
      price={checkoutItemsState?.price}
      quantity={checkoutItemsState?.quantity}
      itemName={checkoutItemsState?.itemName}
      itemImage={checkoutItemsState?.itemImage}
      handleItemPurchase={handleItemPurchase}
    />
  );
};

export default Checkout;
