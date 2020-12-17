import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  Dimensions,
  StyleSheet,
  StatusBar,
  View,
  SafeAreaView,
} from 'react-native';
import {TRANSPARENT, WHITE} from '../../theme/colors';
const deviceHeight = Dimensions.get('window').height;

const Container = (props) => {
  const {containerStyle, children} = props;

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <StatusBar backgroundColor={WHITE} barStyle="dark-content" />
      <SafeAreaView style={styles.contentStyle}>{children}</SafeAreaView>
    </View>
  );
};

Container.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.elementType,
  ]).isRequired,
};

export default Container;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    height: Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20,
    backgroundColor: WHITE,
  },
  contentStyle: {
    flex: 1,
    backgroundColor: TRANSPARENT,
  },
});
