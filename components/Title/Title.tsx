import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

function Title() {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
export default Title;
