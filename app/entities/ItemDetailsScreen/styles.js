import {StyleSheet} from 'react-native';
import {
  GRAY_DARK,
  GRAY_MEDIUM,
  LIGHT_RED,
  PRIMARY,
  WHITE,
} from '../../theme/colors';
import {ALIGN_CONTENT_CENTER, boxShadow} from '../../theme/mixins';

const styles = StyleSheet.create({
  shareBtn: {
    borderColor: GRAY_MEDIUM,
    borderWidth: 1,
    borderRadius: 8,
    width: 50,
    height: 50,
    borderRadius: 6,
    ...ALIGN_CONTENT_CENTER,
    ...boxShadow(),
  },
  bodyText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 16,
  },
  discountView: {
    height: 30,
    width: 70,
    backgroundColor: LIGHT_RED,
    borderRadius: 8,
    ...ALIGN_CONTENT_CENTER,
    marginRight: 8,
  },
  counterContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  decrementView: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: GRAY_DARK,
    ...ALIGN_CONTENT_CENTER,
    marginRight: 16,
  },
  incrementView: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: GRAY_DARK,
    ...ALIGN_CONTENT_CENTER,
    marginLeft: 16,
  },
  cardFooterContainer: {
    flex: 1,
    flexDirection: 'row',
    ...ALIGN_CONTENT_CENTER,
  },
  addCartBtn: {
    backgroundColor: PRIMARY,
    width: '100%',
    height: 50,
    borderRadius: 6,
    ...ALIGN_CONTENT_CENTER,
    ...boxShadow(),
    alignSelf: 'center',
  },
});

export default styles;
