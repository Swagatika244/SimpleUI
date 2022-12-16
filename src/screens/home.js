/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native';
//import Feather from 'react-native-vector-icons/Feather';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient';

const dataList = [
  {
    id: 1,
    title: 'Daily Reward',
    desc: 'Log in daily to claim free coins!',
    button: 'CLAIM PRIZE'
  },
  {
    id: 2,
    title: 'Spin and Win',
    desc: 'Spin the wheel of rewards and win big!',
    button: 'SPEEN THE WHEEL'
  },
  {
    id: 3,
    title: 'Challenges',
    desc: 'Complete challenges to earn extra rewards',
    button: 'SEE CHALLENGES'
  },
];

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const images = [
  require('../assets/R.png'),
  require('../assets/wheel.png'),
  require('../assets/cup.png')
]

const renderList = ({item, index}) => {
  return(
    <LinearGradient 
      colors={['#7318bd', '#bd86ee']} 
      style={styles.itemContainer}
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 0 }}
    >
      <View style = {styles.itemTextContainer}>
        <Text style = {styles.titleStyle}>{item.title}</Text>
        <Text style = {styles.descStyle}>{item.desc}</Text>
        <TouchableOpacity style = {styles.buttonContainer}>
          <Text style = {styles.buttonTextStyle}>{item.button}</Text>
        </TouchableOpacity>
      </View>
      <Image 
        style = {{width: '30%', height: '80%'}} 
        source = {images[index]}
        resizeMode = {'contain'}
      />
    </LinearGradient>
  )
}

function Home () {
  return (
    <View style = {styles.root}>
      <View style = {styles.bigContaner1}>
        <FlatList
          horizontal
          data={dataList}
          renderItem = {renderList} 
          keyExtractor = {(item) => item.id}
          showsHorizontalScrollIndicator = {false}
        />
      </View>
      <LinearGradient 
        colors={['#ffffff', '#93e7c6']} 
        style={styles.gradientButtonContainer1}
        start={{ x: 0.55, y: 0 }} 
        end={{ x: 1, y: 0 }}
       >
          <View style = {{flex: 1}}>
            <Text style = {styles.text1}>Buzz Offers</Text>
            <Text style = {styles.text2}>Complete buzz offers to get coins</Text>
          </View>
          {/*<Feather name = 'zap' size = {50} color = '#ffffff'/>*/}
       </LinearGradient>
      <LinearGradient 
        colors={['#ffffff', '#f67973']} 
        style={styles.gradientButtonContainer1}
        start={{ x: 0.55, y: 0 }} 
        end={{ x: 1, y: 0 }}
       >
        <View style = {{flex: 1}}>
            <Text style = {styles.text1}>Buzz Offers</Text>
            <Text style = {styles.text2}>Complete buzz offers to get coins</Text>
          </View>
          {/*<MaterialCommunityIcons name = 'format-list-checkbox' size = {50} color = '#ffffff'/>*/}
       </LinearGradient>
       <View style = {styles.secondBigContainer}>
          <LinearGradient 
            colors={['#ffffff', '#eeb858']} 
            style={styles.gradientButtonContainer2}
            start={{ x: 0.55, y: 0 }} 
            end={{ x: 1, y: 0 }}
          >
            <Text style = {styles.text3}>Adscend Offer</Text>
          </LinearGradient>
          <LinearGradient 
            colors={['#ffffff', '#8cb3f8']} 
            style={[styles.gradientButtonContainer2, {marginLeft: 15}]}
            start={{ x: 0.55, y: 0 }} 
            end={{ x: 1, y: 0 }}
          >
            <Text style = {styles.text3}>Adgate Offer</Text>
          </LinearGradient>
       </View>
    </View>
  );
}

export default Home;

var styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  itemContainer: {
    width: width * 0.84,
    marginHorizontal: width * 0.08,
    borderRadius: 20,
    height: height * 0.23,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  bigContaner1: {
    elevation: 10,
    backgroundColor: 'white',
    paddingBottom: 30,
    paddingTop: 10
  },
  itemTextContainer: {
    flex: 1,
    justifyContent: 'space-around',
    height: '100%'
  },
  titleStyle: {
    fontSize: 25,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  descStyle: {
    fontSize: 15,
    color: '#ffffff',
  },
  buttonContainer: {
    backgroundColor: '#b39ddb',
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: 'center',
    width: '80%',
    borderRadius: 10
  },
  buttonTextStyle: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: '500'
  },
  gradientButtonContainer1: {
    width: width * 0.90,
    borderRadius: 20,
    height: height * 0.145,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingHorizontal: 25,
    alignSelf: 'center',
    marginTop: 15,
    flexDirection: 'row'
  },
  gradientButtonContainer2: {
    borderRadius: 20,
    height: height * 0.145,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //padding: 20,
    alignSelf: 'center',
    marginTop: 15,
    flex: 1,
  },
  secondBigContainer: {
    flexDirection: 'row',
    width: width * 0.9,
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  text1: {
    fontSize: 26,
    color: '#6607b9',
    fontWeight: '600'
  },
  text2: {
    fontSize: 15,
    color: '#6607b9',
    fontWeight: '500',
    marginTop: 5
  },
  text3: {
    fontSize: 24,
    color: '#6607b9',
    fontWeight: '600',
    marginTop: 5
  }

});