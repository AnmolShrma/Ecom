import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import {PRIMARY, WHITE} from '../../theme/colors';
import {ALIGN_CONTENT_CENTER, FLEX_1} from '../../theme/mixins';
import {
  FONT_BOLD_14,
  FONT_MEDIUM_14,
  FONT_MEDIUM_15,
  FONT_MEDIUM_16,
  FONT_REGULAR_12,
} from '../../theme/typography';
import styles from './styles';

const GroupItemCard = (props) => {
  const [disableCard, setDisableCard] = useState(false);
  const {cardItem, handleNavigate} = props;
  const getTotalDuration = (timestamp) => {
    let expirydate = moment.unix(timestamp).format('YYYY-MM-DD hh:mm:ss');

    let diffr = moment.duration(moment(expirydate));

    let hours = parseInt(diffr.asHours());
    let minutes = parseInt(diffr.minutes());
    let seconds = parseInt(diffr.seconds());

    let d = hours * 60 * 60 + minutes * 60 + seconds;
    return d;
  };
  return (
    <View
      style={[styles.cardContainer, disableCard ? {opacity: 0.5} : null]}
      pointerEvents={disableCard ? 'none' : 'auto'}>
      <View style={FLEX_1}>
        <Image
          style={styles.itemImage}
          resizeMode={'contain'}
          source={{
            uri: cardItem.itemDTO.images[0],
          }}
        />
      </View>
      <View style={styles.cardItemsContainer}>
        <View style={FLEX_1}>
          <View style={styles.cardItemsHeaderContainer}>
            <View style={styles.avatarContainer}>
              <Image
                style={styles.avatarImage}
                resizeMode={'contain'}
                source={{
                  uri: cardItem.leaderAvatar,
                }}
              />
            </View>
            <View style={{flex: 2}}>
              <Text style={[FONT_BOLD_14]}>{cardItem.leaderName}</Text>
            </View>
            <View style={{flex: 2}}>
              <CountDown
                until={getTotalDuration(cardItem.expireAt)}
                onFinish={() => setDisableCard(true)}
                size={12}
                timeToShow={['H', 'M', 'S']}
                digitStyle={{}}
                timeLabels={{
                  h: null,
                  m: null,
                  s: null,
                }}
                digitTxtStyle={{color: PRIMARY}}
                separatorStyle={{color: PRIMARY}}
                showSeparator
              />
            </View>
          </View>
        </View>
        <View style={{flex: 2}}>
          <Text style={[FONT_MEDIUM_16]}>{cardItem.itemDTO.name}</Text>
        </View>
        <View style={styles.cardItemsfooterContainer}>
          <View style={FLEX_1}>
            <View>
              <Text
                style={[{textDecorationLine: 'line-through'}, FONT_REGULAR_12]}>
                Rp.{cardItem.itemDTO.price}
              </Text>
            </View>
            <View>
              <Text style={[FONT_MEDIUM_15]}>
                Rp.{cardItem.itemDTO.groupPrice}
              </Text>
            </View>
          </View>
          <View style={[FLEX_1, ALIGN_CONTENT_CENTER]}>
            <TouchableOpacity
              onPress={() => handleNavigate(cardItem)}
              style={styles.joinGroupBtn}>
              <Text style={[FONT_MEDIUM_14, {color: WHITE}]}>Join Group</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GroupItemCard;
