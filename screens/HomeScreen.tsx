import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Restaurantes</Text>
      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
export default HomeScreen;
