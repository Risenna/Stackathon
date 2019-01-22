import React from 'react'
import { Button, Image, ScrollView, Text, View } from 'react-native'
import styles from '../constants/Styles'

const Won = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/treasure.jpeg')}
            style={styles.welcomeImage}
          />
        </View>
        <Text style={styles.getStartedText}>
          Hooray, you won!!!!!!!!
        </Text>
        <View style={styles.mark}>
          <Button title="New Game" color="white" onPress={props.onPress} />
        </View>
      </ScrollView>
    </View>
  )
}

export default Won
