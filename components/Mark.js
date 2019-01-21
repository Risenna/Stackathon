import React from 'react'
import { Button, Image, ScrollView, View } from 'react-native'
import styles from '../constants/Styles'

const Mark = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>
        <View style={styles.center}>
          <Button title="Mark Location" color="white" onPress={props.onPress} />
        </View>
      </ScrollView>
    </View>
  )
}

export default Mark
