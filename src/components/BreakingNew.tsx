import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../utils/colors';
import Tag from './Tag';

interface newProps {
  title: string,
  image: React.FunctionComponent<React.SVGAttributes<SVGElement>>,
}

const BreakingNew= ({title, image: Image}: newProps) => {
  return (
    <View>
      <Image width='-1'/>
    <View style={styles.newInformation}>
      <Tag tag="destaque"  />
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
  );
}

const styles= StyleSheet.create({
  
  title: {
    fontFamily: 'PTSerif-BoldItalic',
    fontSize: 24,
    color: colors.black
  },
  newInformation: {
    marginVertical: 16,
    backgroundColor: colors.white,
  }
});

export default BreakingNew;