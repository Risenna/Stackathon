import React from 'react';
import geolib from 'geolib'
import Mark from '../components/Mark'
import Start from '../components/Start'
import Searching from '../components/Searching'
import Won from '../components/Won'
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

const initialState = {
  count: 0,
  markedLatitude: null,
  markedLongitude: null,
  currentLatitude: null,
  currentLongitude: null,
  distance: 5000,
  started: false,
  won: false,
  error: null,
}

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.watchId = 0;
    this.count = 0;
    this.state = initialState;
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
        //sets coordinates for markedLocation
      );
    } else if (!this.state.started) {
      return (
        <Start onPress={this.handleStartPress} />
        //begins the game, started = true
      );
    } else if (this.state.distance > 2) {
      return (
        //renders Searching component while dist > 2
        <View style={styles.getStartedContainer}>
          <Searching {...this.state} onPress={this.handleNewGamePress} />
        </View>
      );
    } else {
      //distance < 2 so render 'You Won' screen (Play again button)
      return (
        <Won onPress={this.handleNewGamePress} />
      )

      // this.state.gameWon()  
      //sets 'won' = to true  now that dist < 2
      //do something to set the state back!
      //Marked = true, started = true, distance <=3. render 'U won, play again?'
      //Playagain button onPress - set state back to initial state, render Mark again! (should this be automatic?)
      //while won is true, render Play again screen
      //Play again pressed, won set back to false, everything set back, render Mark
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

  handleMarkPress = async () => {
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

  handleStartPress = () => {
    this.setState({
      started: true
    })
  }

  handleNewGamePress = () => {
    this.setState(initialState)
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

