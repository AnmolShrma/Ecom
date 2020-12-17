import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Container from '../../components/Container';
import {GRAY_DARK, GRAY_MEDIUM, PRIMARY, WHITE} from '../../theme/colors';
import {
  ALIGN_CONTENT_CENTER,
  boxShadow,
  FLEX_1,
  FLEX_GLOW_1,
} from '../../theme/mixins';
import {
  FONT_BOLD_16,
  FONT_BOLD_20,
  FONT_MEDIUM_15,
  FONT_MEDIUM_16,
} from '../../theme/typography';
import styles from './styles';

const CheckoutScreen = (props) => {
  const {price, quantity, itemName, itemImage, handleItemPurchase} = props;
  console.log(
    'price, quantity, itemName, itemImage',
    price,
    quantity,
    itemName,
    itemImage,
  );

  const [counterValue, setCounterValue] = useState(1);

  const counterIncrement = () => setCounterValue(counterValue + 1);
  const counterDecrement = () => {
    if (counterValue > 1) {
      setCounterValue(counterValue - 1);
    }
  };

  useEffect(() => {
    setCounterValue(quantity);
  }, [quantity]);

  return price && quantity && itemName && itemImage ? (
    <Container>
      <View style={FLEX_GLOW_1}>
        <View style={styles.cardContainer}>
          <View style={styles.cardHeaderContainer}>
            <View style={FLEX_1}>
              <Image
                style={styles.cardImage}
                resizeMode={'contain'}
                source={{
                  uri: itemImage,
                }}
              />
            </View>
            <View style={FLEX_1}>
              <View style={FLEX_1}>
                <Text style={[FONT_MEDIUM_16]}>{itemName}</Text>
              </View>
              <View style={styles.counterContainer}>
                <TouchableOpacity
                  onPress={counterDecrement}
                  style={styles.decrementView}>
                  <Text style={{...FONT_BOLD_20, color: GRAY_DARK}}>-</Text>
                </TouchableOpacity>
                <Text style={{...FONT_BOLD_16, color: GRAY_DARK}}>
                  {counterValue}
                </Text>
                <TouchableOpacity
                  onPress={counterIncrement}
                  style={styles.incrementView}>
                  <Text style={{...FONT_BOLD_20, color: GRAY_DARK}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.cardFooterContainer}>
            <View style={[FLEX_1, ALIGN_CONTENT_CENTER]}>
              <Text style={{...FONT_MEDIUM_15, color: PRIMARY}}>
                Quantity: {counterValue}
              </Text>
            </View>
            <View style={[FLEX_1, ALIGN_CONTENT_CENTER]}>
              <Text style={{...FONT_MEDIUM_15, color: PRIMARY}}>
                Price: Rp.{price * counterValue}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={handleItemPurchase} style={styles.buyBtn}>
        <Text style={[FONT_BOLD_16, {color: WHITE}]}>Buy Item</Text>
      </TouchableOpacity>
    </Container>
  ) : (
    <Container>
      <View style={[FLEX_GLOW_1, ALIGN_CONTENT_CENTER]}>
        <Text style={{...FONT_MEDIUM_15}}>No Items to Checkout</Text>
      </View>
    </Container>
  );
};

export default CheckoutScreen;
