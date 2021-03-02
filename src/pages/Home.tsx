import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import Logo from '../components/Logo';
import Tag from '../components/Tag';
import colors from '../utils/colors';

// import { Container } from './styles';

const pages: React.FC = () => {
  return (
    <ScrollView style={styles.view}>
      <View>
        <Tag tag="Destaque" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
});

export default pages;
