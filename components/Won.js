import React from 'react'
import { Button, Image, ScrollView, Text, View } from 'react-native'
import styles from '../constants/Styles'

const Won = (props) => {
  return (
    <View nativeID="markContainer" style={styles.markContainer}>
      <View nativeID="headerContainer" style={styles.headerContainer}>
        <Text style={styles.headerPrefix}>Hooray,</Text>
        <Text style={styles.headerContent}>You Won!</Text>
      </View>

      <View nativeID="bodyContainer" style={styles.bodyContainer}>
        <Image
          source={require('../assets/images/treasure2.jpeg')}
          style={styles.treasureImage}
        />
        <View style={styles.markButtonContainer}>
          <Button
            color="black"
            style={styles.markButton}
            title="New Game"
            onPress={props.onPress} />
        </View>
      </View>
    </View>
  )
}

export default Won
