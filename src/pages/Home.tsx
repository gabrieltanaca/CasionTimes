import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, Text} from 'react-native';
import colors from '../utils/colors';
import news from '../utils/news';
import breakingNewImage from '../assets/breakingNew.svg';
import NewsCards from '../components/NewsCards';
import BreakingNew from '../components/BreakingNew';
import Header from '../components/Header';

const pages: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Header />

        <BreakingNew {...news[0]} />

        <View>
          <Text style={styles.textList}>Todas as notícias</Text>
          {news.map((news) => (
            <NewsCards key={news.title} {...news} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
  },
  textList: {
    fontFamily: 'PTSerif-BoldItalic',
    fontSize: 12,
    color: colors.gray,
  },
});

export default pages;
