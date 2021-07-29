import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

function HomeS({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View 
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fffaf0',
        }}>

        <View style={styles.title}>
          <Text style={styles.titleText}>Food Planner</Text>
        </View>

        <Image
          source={require('../assets/BreakfastIcon.png')}
          style={{
            width: 100,
            height: 100,
            marginTop: -65,
            marginLeft: -160,
            marginBottom: -30,
          }}
        />
        <TouchableOpacity
          style={styles.buttonBreakfast}
          onPress={() => navigation.navigate('BreakfastOptions')}>
          <Text style={styles.buttonTextBreakfast}> Breakfast Options </Text>
        </TouchableOpacity>

        <Image
          source={require('../assets/LunchIcon.png')}
          style={{
            width: 99,
            height: 99,
            marginBottom: -65,
            marginRight: -160,
            marginTop: -140,
          }}
        />
        <TouchableOpacity
          style={styles.buttonLunch}
          onPress={() => navigation.navigate('LunchOptions')}>
          <Text style={styles.buttonTextLunch}> Lunch Options </Text>
        </TouchableOpacity>

        <Image
          source={require('../assets/DinnerIcon.png')}
          style={{
            width: 100,
            height: 100,
            marginTop: 25,
            marginLeft: -160,
            marginBottom: -30,
          }}
        />
        <TouchableOpacity
          style={styles.buttonDinner}
          onPress={() => navigation.navigate('DinnerOptions')}>
          <Text style={styles.buttonTextDinner}> Dinner Options </Text>
        </TouchableOpacity>

        <Image
          source={require('../assets/SnackIcon.png')}
          style={{
            width: 100,
            height: 100,
            marginTop: -48,
            marginLeft: 160,
            marginBottom: -30,
          }}
        />
        <TouchableOpacity
          style={styles.buttonSnack}
          onPress={() => navigation.navigate('SnackOptions')}>
          <Text style={styles.buttonTextSnack}> Snack Options </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },

  title: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -180,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 30,
    //backgroundColor:'green',
    width: 380,
    height: 5,
  },

  titleText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -60,
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fc8e03',
  },

  buttonBreakfast: {
    justifyContent: 'center',
    width: 150,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#ffc580',
    marginTop: 40,
    marginLeft: -160,
  },

  buttonLunch: {
    flex: 0.065,
    justifyContent: 'center',
    width: 150,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#ffc580',
    marginTop: 75.4,
    marginLeft: 160,
  },

  buttonDinner: {
    justifyContent: 'center',
    width: 150,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#ffc580',
    marginTop: 40,
    marginLeft: -160,
    marginBottom: -90,
  },

  buttonSnack: {
    justifyContent: 'center',
    width: 150,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#ffc580',
    marginTop: 38,
    marginLeft: 160,
    marginBottom: -90,
  },

  buttonTextLunch: {
    flex: 0.1,
    justifyContent: 'center',
    marginLeft: 26,
    fontWeight: 'bold',
  },

  buttonTextBreakfast: {
    flex: 0.1,
    justifyContent: 'center',
    marginLeft: 12,
    fontWeight: 'bold',
  },

  buttonTextDinner: {
    flex: 0.1,
    justifyContent: 'center',
    marginLeft: 20,
    fontWeight: 'bold',
  },

  buttonTextSnack: {
    flex: 0.1,
    justifyContent: 'center',
    marginLeft: 25,
    fontWeight: 'bold',
  },
});

export default HomeS;
