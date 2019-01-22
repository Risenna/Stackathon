import React from 'react'
import { Button, Image, ScrollView, Text, View } from 'react-native'
import styles from '../constants/Styles'

const Searching = (props) => {
  return (
    <View nativeID="markContainer" style={styles.markContainer}>
      <View nativeID="headerContainer" style={styles.headerContainer}>
        <Text style={styles.headerPrefix}>You are getting</Text>
        <Text style={styles.headerContent}>{props.hotter ? 'HOTTER!' : 'COLDER!'}</Text>
      </View>

      <View nativeID="bodyContainer" style={styles.bodyContainer}>
        <Image
          source={props.hotter ? require('../assets/images/fire.jpg')
          : require('../assets/images/polarbears.jpg')}
          style={styles.treasureImage}
        />
        <View style={styles.markButtonContainer}>
          <Button
            color="black"
            style={styles.markButton}
            title="I Give Up :("
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

