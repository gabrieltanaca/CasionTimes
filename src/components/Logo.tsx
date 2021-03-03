import React from 'react';
import {StyleSheet, View} from 'react-native';

import CasionTimes from '../assets/casiontimeslogo.svg';
import colors from '../utils/colors';

const Logo= () => {
  return (
    <View
      style={{
        margin: 10,
        width: 135,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: colors.orange,
      }}>
      <CasionTimes width='135' height='22' />
    </View>
  );
};

export default Logo;
