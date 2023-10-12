import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from "react";

const ButtonText = ({ content }) => {
  return (
    <Text style={styles.buttonText}>
      {content}
    </Text>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 30,
  },
});

export default ButtonText;