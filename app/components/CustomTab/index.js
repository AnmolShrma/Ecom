import React from 'react';
import {View, TouchableOpacity, Platform} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ALIGN_CONTENT_CENTER, padding} from '../../theme/mixins';
import {PRIMARY, SECONDARY} from '../../theme/colors';
import styles from './styles';

const TabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const getTabIcon = (name, isFocused) => {
    switch (name) {
      case 'GroupList':
        return (
          <FontAwesome5
            name="users"
            color={!isFocused ? SECONDARY : PRIMARY}
            size={24}
          />
        );

      case 'Checkout':
        return (
          <FontAwesome5
            name="shopping-cart"
            color={!isFocused ? SECONDARY : PRIMARY}
            size={24}
          />
        );

      default:
        return null;
    }
  };

  return (
    <View
      style={[
        ALIGN_CONTENT_CENTER,
        styles.tabBarContainer,
        Platform.OS === 'ios' ? padding(0, 0, 10, 0) : null,
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[ALIGN_CONTENT_CENTER, styles.tabBtn]}>
            {getTabIcon(route.name, isFocused)}
            {/* <Text
              style={[
                styles.tabLabel,
                isFocused ? {...{color: PRIMARY}} : {},
              ]}>
              {label}
            </Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
