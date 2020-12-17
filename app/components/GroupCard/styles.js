import {StyleSheet} from 'react-native';
import {PRIMARY, GRAY_LIGHT, GRAY_MEDIUM, WHITE} from '../../theme/colors';
import {ALIGN_CONTENT_CENTER, boxShadow} from '../../theme/mixins';

const styles = StyleSheet.create({
  cardContainer: {
    width: '90%',
    height: 200,
    borderColor: GRAY_MEDIUM,
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: WHITE,
    ...boxShadow(),
    marginBottom: 10,
  },
  itemImage: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
  },
  cardItemsContainer: {
    flex: 2,
    padding: 8,
    paddingTop: 12,
    paddingBottom: 12,
  },
  cardItemsHeaderContainer: {
    flexDirection: 'row',
    ...ALIGN_CONTENT_CENTER,
  },
  cardItemsfooterContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  avatarContainer: {
    flex: 0.7,
  },
  avatarImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: GRAY_LIGHT,
  },
  joinGroupBtn: {
    backgroundColor: PRIMARY,
    width: '80%',
    height: '80%',
    borderRadius: 6,
    ...ALIGN_CONTENT_CENTER,
    ...boxShadow(),
  },
});

export default styles;
