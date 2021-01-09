import React from 'react';
import { View, Text } from 'react-native';

interface IProps {
  children: String;
}

function Title({ children }: IProps) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

export default Title;
