import React from 'react'
import { Button, Image, ScrollView, Text, View } from 'react-native'
import styles from '../constants/Styles'

const Searching = (props) => {
  return (
    <View nativeID="markContainer" style={styles.markContainer}>
      <View nativeID="headerContainer" style={styles.headerContainer}>
        <Text style={styles.headerPrefix}>You are getting</Text>
        <Text style={styles.headerContent}>HOTTER!</Text>
      </View>

      <View nativeID="bodyContainer" style={styles.bodyContainer}>
        <Image
          source={require('../assets/images/map.jpeg')}
          style={styles.treasureImage}
        />
        <View style={styles.markButtonContainer}>
          {/* <Text style={styles.headerPrefix}>I give up :(</Text> */}
          <Button
            color="black"
            style={styles.markButton}
            title="Start Over"
            onPress={props.onPress} />
        </View>
      </View>
    </View>
  )
}

export default Searching


{/* <Text>
{`You are ${props.distance} meters from the marked location.`}
</Text> */}

