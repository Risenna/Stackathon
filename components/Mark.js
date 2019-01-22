import React from 'react'
import { Button, Image, ScrollView, Text, View } from 'react-native'
import styles from '../constants/Styles'

const Mark = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <View>
            <Text>
              Welcome to the Treasure Hunt!
      </Text>
          </View>
          <Image
            source={require('../assets/images/treasure-chest.png')}
            style={styles.welcomeImage}
          />
        </View>
        <View style={styles.mark}>
          <Button title="Bury Treasure" color="white" onPress={props.onPress} />
        </View>
      </ScrollView>
    </View>
  )
}

export default Mark
