import React from 'react'
import { Button, Image, ScrollView, Text, View } from 'react-native'
import styles from '../constants/Styles'

const Searching = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/map.jpeg')}
            style={styles.welcomeImage}
          />
        </View>
        <Text style={styles.getStartedText}>
          Here is your current position:
        </Text>
        <Text>{`Latitude: ${props.currentLatitude}
                    Longitude: ${props.currentLongitude}
                    State count: ${props.count}`}
          {props.error ?
            <Text>Error: {props.error}</Text>
            : null}
        </Text>
        <Text>
          {`You are ${props.distance} meters from the marked location.`}
        </Text>
        <View style={styles.mark}>
        <Text>
          I give up! :(
        </Text>
          <Button title="Start Over" color="white" onPress={props.onPress} />
        </View>
      </ScrollView>
    </View>
  )
}

export default Searching

