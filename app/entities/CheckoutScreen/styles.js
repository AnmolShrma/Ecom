import {StyleSheet} from 'react-native';
import {GRAY_DARK, GRAY_MEDIUM, PRIMARY, WHITE} from '../../theme/colors';
import {ALIGN_CONTENT_CENTER, boxShadow} from '../../theme/mixins';

const styles = StyleSheet.create({
  cardContainer: {
    width: '85%',
    height: 200,
    borderColor: GRAY_MEDIUM,
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
    backgroundColor: WHITE,
    ...boxShadow(),
    padding: 16,
  },
  cardHeaderContainer: {
    flex: 3,
    flexDirection: 'row',
    ...ALIGN_CONTENT_CENTER,
  },
  cardImage: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
  },
  counterContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
  buyBtn: {
    backgroundColor: PRIMARY,
    width: '80%',
    height: 50,
    borderRadius: 6,
    ...ALIGN_CONTENT_CENTER,
    ...boxShadow(),
    alignSelf: 'center',
    marginBottom: 32,
  },
});

export default styles;
