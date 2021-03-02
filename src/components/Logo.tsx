import React from 'react';
import { StyleSheet, View } from 'react-native';

import CasionTimes from '../assets/casiontimeslogo.svg';

const components: React.FC = () => {
  return (
    
<View>
  <CasionTimes style={styles.image} />
</View>
  );
}

const styles = StyleSheet.create({
  image:{
    width: 134,
    height: 2
  }
});

export default components;