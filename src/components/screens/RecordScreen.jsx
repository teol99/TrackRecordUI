import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import pull_ups from "../../../sample_data/pull_ups.json"

const data = pull_ups;

export default function RecordScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <LineChart data = {data} areaChart/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
