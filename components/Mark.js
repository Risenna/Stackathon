import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import styles from '../constants/Styles'

const Mark = (props) => {
  return (
    <View nativeID="markContainer" style={styles.markContainer}>
      <View nativeID="headerContainer" style={styles.headerContainer}>
        <Text style={styles.headerPrefix}>Welcome to</Text>
        <Text style={styles.headerContent}>The Treasure Hunt!</Text>
      </View>

      <View nativeID="bodyContainer" style={styles.bodyContainer}>
        <Image
          source={require('../assets/images/treasure-chest.png')}
          style={styles.treasureImage}
        />
        <View style={styles.markButtonContainer}>
          <Button
            color="black"
            style={styles.markButton}
            title="Bury Treasure"
            onPress={props.onPress} />
        </View>
      </View>
    </View>
  )
}

export default Mark
