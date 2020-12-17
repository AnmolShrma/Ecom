import {Dimensions, PixelRatio} from 'react-native';
import {BLACK} from './colors';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = (size) => (WINDOW_WIDTH / guidelineBaseWidth) * size;

// export const scaleFont = size => size * PixelRatio.getFontScale();

const scale = WINDOW_WIDTH / 360;

export const scaleFont = (size) => {
  const newSize = size * scale;
  // if (Platform.OS === 'ios') {
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  // } else {
  //   return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  // }
};
const dimensions = (top, right = top, bottom = top, left = right, property) => {
  let styles = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
};

export const margin = (top, right, bottom, left) => {
  return dimensions(top, right, bottom, left, 'margin');
};

export const padding = (top, right, bottom, left) => {
  return dimensions(top, right, bottom, left, 'padding');
};

export const boxShadow = (
  color = BLACK,
  offset = {height: 2, width: 2},
  radius = 8,
  opacity = 0.2,
) => {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
};

export const alignText = (alignment = 'auto') => {
  return {
    textAlign: alignment,
  };
};

export const ALIGN_CONTENT_CENTER = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const FLEX_1 = {
  flex: 1,
};

export const FLEX_GLOW_1 = {
  flexGrow: 1,
};
