import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Tag from './Tag';

interface postProps {
  image: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  tag: string;
  title: string;
  subtitle: string;
  notice: string;
}

const Post = ({image: Image, tag, title, subtitle, notice}: postProps) => {
  return (
    <View>
      <View style={styles.image}>
        <Image width="96" height="96" />
      </View>
      <Tag tag={tag} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.notice}>{notice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {},
  title: {},
  subtitle: {},
  notice: {},
});

export default Post;
