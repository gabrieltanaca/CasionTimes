import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../utils/colors';
import Tag from './Tag';

interface cardProps {
  image: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  tag: string;
  title: string;
}

const NewCards = ({title, tag, image: Image}: cardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.image}>
        <Image width='96' height='96' />
      </View>
      <View style={styles.informationView}>
        <Tag tag={tag} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    paddingBottom: 16,
  },
  informationView: {
    flexDirection: 'column',
    marginLeft: 24,
    maxWidth: 243,
  },
  title: {
    fontSize: 17,
    fontFamily: 'Inter-Regular',
    flex: 1,
  },
  image: {
    width: 96,
    height: 96,
    borderLeftWidth: 3,
    borderLeftColor: colors.orange,
  }
});

export default NewCards;