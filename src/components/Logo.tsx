import React from 'react';
import {StyleSheet, View} from 'react-native';

import CasionTimes from '../assets/casiontimeslogo.svg';
import colors from '../utils/colors';

const Logo: React.FC = () => {
  return (
    <View style={styles.logo}>
      <CasionTimes {...image} />
    </View>
  );
};

const image: React.SVGAttributes<SVGElement> = {
  width: 135,
  height: 22,
};

const styles = StyleSheet.create({
  logo: {
    margin: 20,
    width: 135,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: colors.orange,
  }
});

export default Logo;
