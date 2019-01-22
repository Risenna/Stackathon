import React from 'react'
import { Button, Image, ScrollView, Text, View } from 'react-native'
import styles from '../constants/Styles'

const Start = (props) => {
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
        <Text>
          Click Start to begin the search!
        </Text>
        <View style={styles.start}>
          <Button title="Start!" color="white" onPress={props.onPress} />
        </View>
      </ScrollView>
    </View>
  )
}

export default Start
