import { useState } from 'react'
import { View, Text,TextInput,TouchableOpacity,Image ,FlatList  } from 'react-native';
import { useRouter } from 'expo-router';
import {icons,SIZES} from '../../../constants';

import styles from './welcome.style'

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Aryan</Text>
        <Text style={styles.welcomeMessage}>find your perfect Job</Text>

      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput></TextInput>
        </View>
      </View>
    </View>
  )
}

export default Welcome