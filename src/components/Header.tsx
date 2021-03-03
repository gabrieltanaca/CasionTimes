import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import colors from '../utils/colors';
import Logo from './Logo';

interface headerProps {
  goBack?: boolean;
}

const Header = (props: headerProps) => {
  const navigate = useNavigation();
  return (
    <View style={{...styles.headerContainer, justifyContent: props.goBack ? 'space-between' : 'center'}}>
      {props.goBack && (
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <View style={styles.goBack}>
            <Image source={require('../assets/arrow-left.jpg')} />
            <Text style={styles.backText}>Voltar</Text>
          </View>
        </TouchableOpacity>
      )}
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24
  },
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 12,
    fontFamily: 'PTSerif-BoldItalic',
    color: colors.gray,
    
  },
});

export default Header;
