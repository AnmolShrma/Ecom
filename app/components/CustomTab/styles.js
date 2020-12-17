import {StyleSheet} from 'react-native';
import {PRIMARY, LIGHT_RED} from '../../theme/colors';

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: '10%',
    backgroundColor: LIGHT_RED,
  },
  tabBtn: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
  },
  tabLabel: {
    fontSize: 12,
    textAlign: 'center',
    alignSelf: 'center',
    color: PRIMARY,
  },
});

export default styles;
