import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer, NativeStackNavigationProp } from '@react-navigation/native';
import RecordSelect from '../RecordSelect';

export default function HomeScreen ({ navigation }) {
  

  return (
    <View style={styles.container}>
      <RecordSelect content="Sample 1" onPress={() => { navigation.navigate('RecordScreen'); }}/>
      <RecordSelect content="Sample 2" onPress={() => { navigation.navigate('RecordScreen'); }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 8,
  }
});
