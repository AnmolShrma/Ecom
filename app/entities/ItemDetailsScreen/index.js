import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Container from '../../components/Container';
import {
  PRIMARY,
  GRAY_DARK,
  GRAY_MEDIUM,
  LIGHT_RED,
  WHITE,
} from '../../theme/colors';
import {ALIGN_CONTENT_CENTER, boxShadow, FLEX_1} from '../../theme/mixins';
import {
  FONT_BOLD_16,
  FONT_BOLD_20,
  FONT_MEDIUM_15,
  FONT_MEDIUM_16,
  FONT_REGULAR_14,
} from '../../theme/typography';
import styles from './styles';

const ItemDetailsScreen = (props) => {
  const {itemData, onShare, handleAddToCart} = props;
  const [counterValue, setCounterValue] = useState(1);

  const calculateDiscount = (price, sellingPrice) => {
    return Math.floor(price / (price - sellingPrice));
  };

  const counterIncrement = () => setCounterValue(counterValue + 1);
  const counterDecrement = () => {
    if (counterValue > 1) {
      setCounterValue(counterValue - 1);
    }
  };

  return (
    <Container>
      <View>
        <SliderBox
          images={itemData.itemDTO.images}
          sliderBoxHeight={400}
          dotColor={PRIMARY}
          inactiveDotColor={LIGHT_RED}
          resizeMode={'contain'}
          circleLoop
          ImageComponentStyle={{backgroundColor: WHITE}}
        />
      </View>
      <View style={{padding: 32}}>
        <View style={{flexDirection: 'row', ...ALIGN_CONTENT_CENTER}}>
          <View style={{flex: 4}}>
            <Text style={[FONT_BOLD_16]}>{itemData.itemDTO.name}</Text>
          </View>
          <View style={[FLEX_1, ALIGN_CONTENT_CENTER]}>
            <TouchableOpacity
              onPress={() =>
                onShare(itemData.itemDTO.name, itemData.itemDTO.groupPrice)
              }
              style={styles.shareBtn}>
              <FontAwesome5 name="share-alt" color={PRIMARY} size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{...FONT_MEDIUM_15, marginTop: 16, marginBottom: 16}}>
          Quantity: {itemData.itemDTO.quantity}
        </Text>
        <View>
          <View style={styles.bodyText}>
            <View style={styles.discountView}>
              <Text style={{...FONT_BOLD_16, color: PRIMARY}}>
                {calculateDiscount(
                  itemData.itemDTO.price,
                  itemData.itemDTO.groupPrice,
                )}
                % off
              </Text>
            </View>
            <Text
              style={[{textDecorationLine: 'line-through'}, FONT_REGULAR_14]}>
              Rp.{itemData.itemDTO.price}
            </Text>
          </View>
          <View style={{flexDirection: 'row', ...ALIGN_CONTENT_CENTER}}>
            <View style={{flex: 1}}>
              <Text style={{...FONT_MEDIUM_16, color: PRIMARY}}>
                Rp.{itemData.itemDTO.groupPrice * counterValue}/Renceng
              </Text>
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
          <Text style={{...FONT_REGULAR_14, marginTop: 32, marginBottom: 32}}>
            {itemData.itemDTO.breadcrumb}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            handleAddToCart(
              itemData.itemDTO.groupPrice,
              counterValue,
              itemData.itemDTO.name,
              itemData.itemDTO.images[0],
            )
          }
          style={styles.addCartBtn}>
          <Text style={[FONT_BOLD_16, {color: WHITE}]}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default ItemDetailsScreen;
