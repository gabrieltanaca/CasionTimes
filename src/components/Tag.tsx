import React from 'react';
import {View, Text, StyleSheet, StyleProp} from 'react-native';

// import { Container } from './styles';

interface TagProps {
  tag: string,
}

const components = (props: TagProps) => {
  return (
    <View>
      <Text style={styles.tag}>{props.tag}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    fontSize:16,
    lineHeight:16,
    fontFamily: "Inter-Medium",
    textTransform: "uppercase",
    borderWidth: 1
  }
});

export default components;
