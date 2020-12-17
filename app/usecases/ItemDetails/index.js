import React, {useContext} from 'react';
import {Share} from 'react-native';
import {CheckoutItemsContext} from '../../context/CheckoutItemsProvider';
import ItemDetailsScreen from '../../entities/ItemDetailsScreen';

const ItemDetails = ({navigation: {navigate}, route: {params}}) => {
  const {itemDetails} = params;
  const [, updateCheckoutItemsState] = useContext(CheckoutItemsContext);

  const onShare = async (productName, price) => {
    try {
      const result = await Share.share({
        message: `Product Name: ${productName}, Discount Price: Rp.${price}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleAddToCart = (price, quantity, itemName, itemImage) => {
    updateCheckoutItemsState({price, quantity, itemName, itemImage});
    navigate('Checkout');
  };
  return (
    <ItemDetailsScreen
      itemData={itemDetails}
      onShare={onShare}
      handleAddToCart={handleAddToCart}
    />
  );
};

export default ItemDetails;
