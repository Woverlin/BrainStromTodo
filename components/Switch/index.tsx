import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
export default ({
  leftTitle,
  rightTitle,
  colorActive,
  colorDeActive,
  currentValue,
  onPress: onChangeSwitch,
}: any) => {
  const offset = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value, {
            damping: 100,
            stiffness: 90,
          }),
        },
      ],
    };
  });
  const onPress = () => {
    if (currentValue == 0) {
      offset.value = withSpring(150);
    } else offset.value = withSpring(0);
    onChangeSwitch();
  };
  return (
    <View
      style={{
        width: 300,
        height: 50,
        borderRadius: 50,
        backgroundColor: colorDeActive,
        borderWidth: 1,
        borderColor: 'lightgray',
        flexDirection: 'row',
        position: 'relative',
      }}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            borderRadius: 50,
            width: 150,
            height: 48,
            flexDirection: 'row',
            backgroundColor: colorActive,
          },
          animatedStyles,
        ]}
      />
      <TouchableOpacity style={styles.switchItem} onPress={onPress}>
        <Text
          style={{
            color: currentValue === 0 ? 'white' : '#2E3C40',
          }}>
          {leftTitle}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.switchItem} onPress={onPress}>
        <Text
          style={{
            color: currentValue === 1 ? 'white' : '#2E3C40',
          }}>
          {rightTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  switchItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 48,
    flexDirection: 'row',
  },
});
