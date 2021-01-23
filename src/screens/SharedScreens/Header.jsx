import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { useDispatch } from 'react-redux'
import { logOutUser } from '../../redux/index'

export default function Header({ title }) {

  const dispatch = useDispatch();

  const logout = () =>{ dispatch(logOutUser()) }

  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28}  style={styles.icon} onPress={ ()=>logout() } />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#e3f2fd',
    letterSpacing: 3
  },
  icon: {
    position: 'absolute',
    left: 16,
    color:"#bbdefb"
  }
});