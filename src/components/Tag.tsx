import React from 'react';
import {View, Text, StyleSheet, StyleProp} from 'react-native';
import colors from '../utils/colors';

// import { Container } from './styles';

interface TagProps {
  tag: string,
}

const components = (props: TagProps) => {
  return (
    <View style={styles.viewTag}>
      <Text style={styles.tag}>{props.tag}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewTag: {
    flex: 0,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: colors.orange,
    borderBottomRightRadius: 8,
    justifyContent: 'center'
  },
  tag: {
    fontSize:12,
    fontFamily: "Inter-Medium",
    textTransform: "uppercase",
    color: colors.orange
  }
});

export default components;
