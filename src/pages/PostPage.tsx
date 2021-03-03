import React from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import Logo from '../components/Logo';
import colors from '../utils/colors';
import breakingNewImage from '../assets/breakingNew.svg';

import Post from '../components/Post';

const pages: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerTitle}>
          <Image source={require('../assets/arrow-left.jpg')} />
          <Text style={styles.backText}> Voltar</Text>
          <View style={styles.headerLogo}>
            <Logo />
          </View>
        </View>

        <View style={styles.banner}></View>

        <View style={styles.post}>
          <Post
            tag="destaque"
            image={breakingNewImage}
            title="Descubra o sabor de rosquinha que melhor te representa!"
            subtitle="Tantos sabores por aí. Qual melhor exprime sua personalidade?"
            notice='Um donut, doughnut, dónute, rosca ou rosquinha é um pequeno bolo em forma de rosca (mais precisamente de toro), popular nos Estados Unidos e de origem incerta. Consiste numa massa açucarada frita, que pode ser coberta com diversos tipos de cobertura doce e colorida, como por exemplo chocolate. Nos Estados Unidos e no Canadá, esta designação também pode ser usada para bolas de Berlim, que são conhecidas como "sonhos" no Brasil. Neste caso, em que o bolo tem uma forma esférica, a designação precisa usada nos Estados Unidos é filled doughnut, que significa "donut recheado". Pode ser recheado com geleia ou outros cremes doces. No caso da rosca, a designação precisa é ring doughnut, significando "donut rosca". Em Portugal, a expressão donut ou dónute designa apenas o bolo em forma de rosca. O bolo esférico corresponde à bola de Berlim;'
          />
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
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 12,
    fontFamily: 'PTSerif-BoldItalic',
    color: colors.gray,
  },
  headerLogo: {
    marginLeft: 170,
  },
  banner: {},
  post: {},
});

export default pages;
