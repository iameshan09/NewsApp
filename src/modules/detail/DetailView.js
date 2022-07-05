import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import fonts from '../../styles/fonts';
import moment from 'moment';
import * as Assets from '../../../assets/utils/index';

export default function DetailView(props) {
  const date = moment(props.itemObject.publishedAt);
  useEffect(() => {
    console.log(props.itemObject);
  }, []);

  return (
    <View style={styles.contentView}>
      <View style={styles.contentTopView}>
        {/* <Text style={styles.heading}>{props.itemObject.title}</Text> */}
        <ImageBackground
          source={{uri: props.itemObject.urlToImage}}
          resizeMode="cover"
          style={styles.imageBackground}
          imageStyle={{
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            opacity: 0.9,
          }}
        />
        <View style={styles.imageView}>
          <View style={styles.imageTopView}>
            <Image style={styles.imageLeftArrow} source={Assets.arrow_left} />
          </View>
          <View style={styles.imageBottomView}>
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>{props.itemObject.title}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.contentBottomView}>
        <View style={styles.bottomTopView}>
          <View style={styles.authorContainer}>
            <Text style={styles.authorTxtStyle}>
              By {props.itemObject.author}-{props.itemObject.source.name}
            </Text>
          </View>

          <View style={styles.dateContainer}>
            <Text style={styles.dateTxtStyle}>
              {date.format('DD MMM YYYY')}
            </Text>
          </View>
        </View>
        <View style={styles.bottomBottomView}>
          <Text style={styles.descTxtStyle}>
            {props.itemObject.description}
          </Text>
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
    width: '100%',
    backgroundColor: 'white',
  },
  contentTopView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
  },
  contentBottomView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',

    width: '100%',
  },
  headingContainer: {
    //backgroundColor: '#A9A4A4',
    padding: 10,
    borderRadius: 10,
  },
  heading: {
    color: 'white',
    fontFamily: fonts.bold,
    fontSize: 25,
  },

  contentBottomLeftView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
  contentBottomRightView: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    width: '100%',

    height: 120,
    padding: 10,
  },
  imageBackground: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  imageView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
  imageTopView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
  },
  imageBottomView: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 5,
  },
  imageLeftArrow: {
    resizeMode: 'contain',
  },
  bottomTopView: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '100%',

    padding: 15,
  },
  bottomBottomView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',

    padding: 15,
  },
  authorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    padding: 10,
    height: 40,
    marginRight: 10,
  },
  dateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 15,
    height: 40,
    padding: 10,
  },
  authorTxtStyle: {
    color: 'black',
    fontFamily: fonts.medium,
    fontSize: 15,
  },
  dateTxtStyle: {
    color: 'black',
    fontFamily: fonts.medium,
    fontSize: 15,
  },
  descTxtStyle: {
    color: 'black',
    fontFamily: fonts.medium,
    fontSize: 15,
  },
});
