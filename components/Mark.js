import React from 'react'
import { Button, Image, ScrollView, View } from 'react-native'
import styles from '../constants/Styles'

const Mark = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/robot-dev.png')}
            style={styles.welcomeImage}
          />
        </View>
        <View style={styles.mark}>
          <Button title="Mark Location" color="white" onPress={props.onPress} />
        </View>
      </ScrollView>
    </View>
  )
}

export default Mark
