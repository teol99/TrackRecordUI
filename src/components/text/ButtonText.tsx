import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from "react";

interface Props {
  content: string
}

const ButtonText = ({ content }: Props) => {
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