import React from 'react';
import geolib from 'geolib'
import Mark from '../components/Mark'
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import styles from '../constants/Styles'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.watchId = 0;
    this.count = 0;
    this.state = {
      count: 0,
      markedLatitude: null,
      markedLongitude: null,
      currentLatitude: null,
      currentLongitude: null,
      distance: 5000,
      error: null,
    }
    this.handleMarkPress = this.handleMarkPress.bind(this)
  }
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    console.log('mounting!')
    this.watchId = setInterval(() => {
      console.log('this.state', this.state)
      navigator.geolocation.getCurrentPosition((position) => {
        this.count++;
        this.setState((previousState) => {
          let newState = {
            count: previousState.count + 1,
            currentLatitude: position.coords.latitude,
            currentLongitude: position.coords.longitude,
            error: null,
          }
          if (previousState.markedLatitude && previousState.currentLatitude) {
            let markedLocation = { latitude: previousState.markedLatitude, longitude: previousState.markedLongitude }
            let newLocation = { latitude: previousState.currentLatitude, longitude: previousState.currentLongitude }
            let distToMark = geolib.getDistance(newLocation, markedLocation, 1)
            newState.distance = distToMark;
          }
          return newState;
        });
      },
        (error) => this.setState({ error: error }),
        { enableHighAccuracy: true, timeout: 1000, maximumAge: 0 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.watchId)
  }

  render() {
    if (!this.state.markedLatitude) {
      return (
          <Mark onPress={this.handleMarkPress} />
      );
    } else {
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

            <View style={styles.getStartedContainer}>

              <Text style={styles.getStartedText}>
                Here is your marked position:
              </Text>
              <Text>{`Latitude: ${this.state.markedLatitude}
                    Longitude: ${this.state.markedLongitude}
                    State count: ${this.state.count}
                    count: ${this.count}`}
                {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
              </Text>

              <Text style={styles.getStartedText}>
                Here is your current position:
              </Text>
              <Text>{`Latitude: ${this.state.currentLatitude}
                    Longitude: ${this.state.currentLongitude}
                    State count: ${this.state.count}
                    count: ${this.count}`}
                {this.state.error ?
                  <Text>Error: {this.state.error}</Text>
                  : null}
              </Text>
              <Text>
                {`You are ${this.state.distance} meters from the marked location.`}
              </Text>
            </View>

          </ScrollView>
        </View>
      );
    }
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  async handleMarkPress() {
    await navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        markedLatitude: position.coords.latitude,
        markedLongitude: position.coords.longitude,
        error: null,
      });
    },
      (error) => this.setState({ error: error }),
      { enableHighAccuracy: true, timeout: 1000, maximumAge: 0 })
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#fff',
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10,
//   },
//   getStartedContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 23,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//     alignItems: 'center',
//     backgroundColor: '#fbfbfb',
//     paddingVertical: 20,
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center',
//   },
//   navigationFilename: {
//     marginTop: 5,
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
// });
