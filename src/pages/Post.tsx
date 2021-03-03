import React from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import colors from '../utils/colors';

import Header from '../components/Header';
import Tag from '../components/Tag';
import {useRoute} from '@react-navigation/native';
import {NewsI} from '../utils/interface';

const pages: React.FC = () => {
  const {image: Image, tag, subtitle, title, notice} = useRoute()
    .params as NewsI;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Header goBack />

        <View>
          <View >
            <Image width="100%" height="414" />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                backgroundColor: colors.white,
                paddingTop: 16,
                paddingHorizontal: 24,
                width: '100%',
              }}>
              <Tag tag={tag} />
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>

          <View style={styles.post}>
            <Text style={styles.subtitle}>{subtitle}</Text>
            {notice.split('./.').map((paragrafo) => (
              <Text style={styles.notice}>{paragrafo}</Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {},
  post: {
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 32,
    fontFamily: 'PTSerif-BoldItalic',
    color: colors.black,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'PTSerif-Regular',
    color: colors.gray,
    borderLeftColor: colors.orange,
    borderLeftWidth: 3,
    paddingHorizontal: 16,
    marginBottom: 48,
  },
  notice: {
    paddingBottom: 29 ,
    fontSize: 17,
    fontFamily: 'Inter-Regular',
    lineHeight: 30,
    color: colors.black,
  },
});

export default pages;
