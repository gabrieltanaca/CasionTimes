import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, Text} from 'react-native';
import colors from '../utils/colors';
import news from '../utils/news';
import breakingNewImage from '../assets/breakingNew.svg';
import NewsCards from '../components/NewsCards';
import BreakingNew from '../components/BreakingNew';
import Logo from '../components/Logo';

const pages: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.logo}>
          <Logo />
        </View>

        <BreakingNew
          image={breakingNewImage}
          title="Descubra o sabor de rosquinha que melhor te representa!"
        />
        <Text style={styles.textButton}>Leia agora -&gt;</Text>

        <View>
          <Text style={styles.textList}>Todas as notícias</Text>
          {news.map((news) => (
            <NewsCards tag={news.tag} image={news.image} title={news.title} />
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
  logo: {
    alignItems: 'center',
  },
  textButton: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    textTransform: 'uppercase',
    alignSelf: 'flex-end',
    color: colors.gray,
    marginBottom: 1,
  },
  textList: {
    fontFamily: 'PTSerif-BoldItalic',
    fontSize: 12,
    color: colors.gray,
  },
});

export default pages;
