import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../utils/colors';
import {NewsI} from '../utils/interface';
import Tag from './Tag';

const BreakingNew = (props: NewsI) => {
  const navigate = useNavigation();
  const {title, image: Image} = props;

  return (
    <TouchableOpacity
      onPress={() => navigate.navigate('Post', {...props, tag: 'destaque'})}>
      <View style={{ backgroundColor: colors.white }}>
        <View>
          <Image width="100%" height="388" />
        </View>
        <View style={styles.newInformation}>
          <Tag tag="destaque" />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.textButton}>Leia agora -&gt;</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'PTSerif-BoldItalic',
    fontSize: 24,
    lineHeight: 35,
    color: colors.black,
  },
  newInformation: {
    paddingTop: 16,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
  },
  textButton: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    textTransform: 'uppercase',
    alignSelf: 'flex-end',
    color: colors.gray,
    paddingBottom: 1,
  },
});

export default BreakingNew;
