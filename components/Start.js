import React from 'react'
import { Button, Image, ScrollView, Text, View } from 'react-native'
import styles from '../constants/Styles'

const Start = (props) => {
  return (
    <View nativeID="markContainer" style={styles.markContainer}>
      <View nativeID="headerContainer" style={styles.headerContainer}>
        <Text style={styles.headerPrefix}>Click to</Text>
        <Text style={styles.headerContent}>Begin Adventure!</Text>
      </View>

      <View nativeID="bodyContainer" style={styles.bodyContainer}>
        <Image
          source={require('../assets/images/map.jpeg')}
          style={styles.treasureImage}
        />
        <View style={styles.markButtonContainer}>
          <Button
            color="black"
            style={styles.markButton}
            title="Start"
            onPress={props.onPress} />
        </View>
      </View>
    </View>
  )
}

export default Start
