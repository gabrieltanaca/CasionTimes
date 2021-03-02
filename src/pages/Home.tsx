import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import colors from '../utils/colors';
import donutsImage from '../assets/donuts.svg'

import NewsCards from '../components/NewsCards'


// import { Container } from './styles';

const pages: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.view}>
      <View>
        <NewsCards tag='Food' image={donutsImage} title='Descubra o sabor de rosquinha que melhor te representa!' />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.white,
    alignItems:'center',
    flex: 1,
  },
});

export default pages;
