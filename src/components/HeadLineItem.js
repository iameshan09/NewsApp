import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import fonts from '../styles/fonts';
import moment from 'moment';

export default function HeadLineItem(props) {
  const date = moment(props.article.publishedAt);

  return (
    <View style={styles.contentView}>
      <View style={styles.contentTopView}>
        <View style={styles.firstRow}>
          <Text style={styles.heading}>{props.article.title}</Text>
        </View>
      </View>
      <View style={styles.contentBottomView}>
        <View style={styles.contentBottomLeftView}>
          <Image
            style={styles.imageView}
            source={{uri: props.article.urlToImage}}></Image>
        </View>
        <View style={styles.contentBottomRightView}>
          <View style={styles.firstRow}>
            <Text style={styles.desc}>{props.article.description}</Text>
          </View>

          <View style={styles.secondRow}>
            <View style={styles.column}>
              <Text style={styles.author}>{date.format('DD MMM YYYY')}</Text>
            </View>
            <View style={styles.column2}>
              <Text style={styles.author}>By {props.article.author}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '95%',
  },
  contentTopView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
  contentMiddleView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
    marginTop: 5,
  },
  contentBottomView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
  },
  heading: {
    color: 'black',
    fontFamily: fonts.bold,
    fontSize: 15,
    textAlign: 'justify',
  },
  author: {
    color: '#6A6A6A',
    fontFamily: fonts.bold,
    fontSize: 12,
  },
  contentBottomLeftView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
    marginRight: 10,
  },
  contentBottomRightView: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    height: 120,
    paddingVertical: 5,
  },
  imageView: {
    resizeMode: 'cover',
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  desc: {
    color: 'black',
    fontFamily: fonts.medium,
    fontSize: 12,
    textAlign: 'justify',
  },
  firstRow: {
    flex: 6,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
  },
  secondRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
  },
  column2: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
  },
});
