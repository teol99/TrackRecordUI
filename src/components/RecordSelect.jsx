import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import ButtonText from './text/ButtonText';


const RecordSelect = ({ content, onPress }) => {
  return (
    <Pressable style={styles.selectView} onPress={onPress}>
      <ButtonText content={content} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  selectView: {
    backgroundColor: '#B0D4F4',
    justifyContent: 'center',
    paddingLeft: 12,
    margin: 8,
    height: 56,
    width: '85%',
    borderWidth: 2,
    borderRadius: 8
  }
});

export default RecordSelect;
