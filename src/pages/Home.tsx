import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Logo from '../components/Logo'
// import { Container } from './styles';

const pages: React.FC = () => {
  return (
    <View>
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'black',
    color: 'white',
  },
});

export default pages;
