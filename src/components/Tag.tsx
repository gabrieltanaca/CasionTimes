import React from 'react';
import {View, Text, StyleSheet, StyleProp} from 'react-native';
import colors from '../utils/colors';

interface TagProps {
  tag: string;
}

const Tag = (props: TagProps) => {
  return (
    <View style={{ flexDirection: 'row'}}>
      <View style={styles.viewTag}>
        <Text style={styles.tag}>{props.tag}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewTag: {
    flex: 0,
    paddingBottom: 1,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: colors.orange,
    borderBottomRightRadius: 8,
    justifyContent: 'center',
    marginBottom: 10,
  },
  tag: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    textTransform: 'uppercase',
    color: colors.orange,
  },
});

export default Tag;
