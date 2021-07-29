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
  Platform,
  ImageBackground,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

function HHS({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fffaf0',
      }}>
      <SafeAreaView style={styles.droidSafeArea}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Healthy Habbits</Text>
          </View>

          <View style={styles.cardContainer}>
            <Text style={styles.routeText}>
              - Eat healthy from time to time (salads, fruits, etc.) 
              - Exercise your body 
              - Go offline 
              - Don't Smoke 
              - Have proper sleep
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d9d6e2',
  },

  contentContainer: {
    paddingVertical: 20,
  },

  routeCard: {
    flex: 0.15,
    marginLeft: 10,
    marginRight: 50,
    marginTop: 10,
    borderRadius: 100,
    backgroundColor: '#00008b',
  },
  titleBar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: -20,
    color: '#f5a300',
  },
  routeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffd685',
    marginTop: 5,
    marginRight: 70,
    paddingLeft: 30,
  },

  cardContainer: {
    flex: 0.85,
  },
});

export default HHS;
