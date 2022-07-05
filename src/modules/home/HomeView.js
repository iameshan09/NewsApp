import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import fonts from '../../styles/fonts';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';
import HeadLineItem from '../../components/HeadLineItem';
import * as Assets from '../../../assets/utils/index';

export default function HomeView(props) {
  const [itemsArray, setItemsArray] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=07a27901b9964e06aeef8ef0f0e46a6c',
      )
      .then(
        response => {
          setItemsArray(response.data.articles);
          console.log(response.data.articles[1]);
        },
        error => {
          console.error(error);
        },
      );
  }, []);

  const itemExtractorKey = (item, index) => {
    return index.toString();
  };

  const navigationToDetailView = (props, item) => {
    props.setItemsObjectAction(item.item);
    props.navigation.navigate('Detail');
  };

  const renderData = item => {
    return (
      <TouchableOpacity
        style={styles.articleItemView}
        activeOpacity={0.8}
        onPress={() => navigationToDetailView(props, item)}>
        <HeadLineItem article={item.item} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.contentView}>
      <View style={styles.contentTopView}>
        <View style={styles.contentTopSliceView}>
          <Image style={styles.menuIcon} source={Assets.menu} />
        </View>
        <View style={styles.contentTopSliceView2}>
          <Text style={styles.txtTopic}>Discover</Text>
          <Text style={styles.txtSubTopic}>News from all over the world</Text>
        </View>
        <View style={styles.contentTopSliceView3}></View>
      </View>
      <View style={styles.contentBottomView}>
        <FlatList
          data={itemsArray}
          keyExtractor={itemExtractorKey}
          renderItem={renderData}
        />
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
  },
  contentTopView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  contentBottomView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderTopColor: '#C1C1C1',
    borderTopWidth: 1,
  },
  articleItemView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  txtStyle2: {
    color: 'black',
    fontFamily: fonts.bold,
    fontSize: 30,
  },
  contentTopSliceView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  contentTopSliceView2: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  contentTopSliceView3: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  menuIcon: {
    flex: 1,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  txtTopic: {
    color: 'black',
    fontFamily: fonts.bold,
    fontSize: 35,
  },
  txtSubTopic: {
    color: '#8A8A8A',
    fontFamily: fonts.medium,
    fontSize: 13,
  },
});
