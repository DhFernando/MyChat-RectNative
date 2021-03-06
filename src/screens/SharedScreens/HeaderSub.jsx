import React from 'react';
import { StyleSheet, Text, View} from 'react-native'; 


export default function Header({ title }) {


  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
      
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#e3f2fd',
    letterSpacing: 3
  }
});