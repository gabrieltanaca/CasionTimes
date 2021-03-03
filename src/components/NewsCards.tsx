import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import colors from '../utils/colors';
import Tag from './Tag';
import { NewsI } from '../utils/interface';

const NewCards = (props: NewsI) => {
  const navigate = useNavigation();
  const {title, tag, image: Image} = props;

  return (
    <TouchableOpacity onPress={() => navigate.navigate('Post', props)}>
      <View style={styles.card}>
        <View style={styles.image}>
          <Image width="96" height="96" />
        </View>
        <View style={styles.informationView}>
          <Tag tag={tag} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: 'rgba(110,121,131,0.2)',
  },
  informationView: {
    flexDirection: 'column',
    paddingLeft: 24,
    maxWidth: 243,
  },
  title: {
    fontSize: 17,
    fontFamily: 'Inter-Regular',
    lineHeight: 25.5,
    color: colors.black,
    flex: 1,

  },
  image: {
    width: 96,
    height: 96,
    borderLeftWidth: 3,
    borderLeftColor: colors.orange,
  },
});

export default NewCards;
