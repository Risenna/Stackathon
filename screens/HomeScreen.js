import React from 'react';
import geolib from 'geolib'
import {Mark, Start, Searching, Won} from '../components'
import { View } from 'react-native';
import styles from '../constants/Styles'

//due to gps inaccuracies, anywhere within this distance counts as reaching the goal
const rangeToWin = 5;

const initialState = {
  count: 0,
  markedLatitude: null,
  markedLongitude: null,
  currentLatitude: null,
  currentLongitude: null,
  distance: Infinity,
  started: false,
  error: null,
  hotter: false,
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
          //calculate distance from start location to treasure
          if (previousState.markedLatitude && previousState.currentLatitude) {
            let markedLocation = {
              latitude: previousState.markedLatitude,           
              longitude: previousState.markedLongitude
            };
            let startLocation = { 
              latitude: previousState.currentLatitude,             
              longitude: previousState.currentLongitude
            };
            let distToMark = geolib.getDistance(startLocation, markedLocation, 1);
            newState.distance = distToMark;
            newState.hotter = distToMark < previousState.distToMark;
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
        //When button pressed, sets coordinates for markedLocation
        <Mark onPress={this.handleMarkPress} />
      );
    } else if (!this.state.started) {
      return (
        //When button pressed, game begins, started = true
        <Start onPress={this.handleStartPress} />
      );
    } else if (this.state.distance > rangeToWin) {
      return (
        //renders Searching component while distance outside acceptable range
        <View style={styles.getStartedContainer}>
          <Searching {...this.state} onPress={this.handleNewGamePress} />
        </View>
      );
    } else {
      //within range of treasure; game won! 
      return (
        <Won onPress={this.handleNewGamePress} />
      )
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
}

