import { StyleSheet, Platform } from 'react-native'
const styles = StyleSheet.create({
  markContainer: {
    display: 'flex',
    flexDirection: 'column',
    //backgroundColor: 'black',
    //color: 'white',
    height: '100%',
    width: '100%',
    padding: 50,
  },
  headerContainer: {
    width: '100%',
    marginTop: 30
  },
  headerPrefix: {
    width: '100%',
    fontSize: 30,
    textAlign: 'center'
  },
  headerContent: {
    width: '100%',
    fontSize: 80,
    textAlign: 'center'
  },
  bodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  treasureImage: {
    marginBottom: 30,
  },
  markButtonContainer: {
    backgroundColor: 'goldenrod',
    padding: 10,
    borderRadius: 5
  },
  markButton: {
    color: 'black'
  },
  // container: {
  //   flex: 1,
  //   flexDirection: 'column',
  //   backgroundColor: '#fff',
  // },
  // developmentModeText: {
  //   marginBottom: 20,
  //   color: 'rgba(0,0,0,0.4)',
  //   fontSize: 14,
  //   lineHeight: 19,
  //   textAlign: 'center',
  // },
  // contentContainer: {
  //   paddingTop: 30,
  // },
  // welcomeContainer: {
  //   alignItems: 'center',
  //   marginTop: 10,
  //   marginBottom: 20,
  // },
  // welcomeImage: {
  //   width: 100,
  //   height: 80,
  //   resizeMode: 'contain',
  //   marginTop: 3,
  //   marginLeft: -10,
  // },
  // getStartedContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginHorizontal: 50,
  // },
  // homeScreenFilename: {
  //   marginVertical: 7,
  // },
  // codeHighlightText: {
  //   color: 'rgba(96,100,109, 0.8)',
  // },
  // codeHighlightContainer: {
  //   backgroundColor: 'rgba(0,0,0,0.05)',
  //   borderRadius: 3,
  //   paddingHorizontal: 4,
  // },
  // getStartedText: {
  //   fontSize: 23,
  //   color: 'rgba(96,100,109, 1)',
  //   lineHeight: 24,
  //   textAlign: 'center',
  // },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  // header: {
  //   textAlign: 'center',
  //   height: 

  // },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  mark: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple'
  },
  start: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  cold: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  hot: {
    flex: 1,
    alignItems: 'center',  //vertical alignment. baseline aligns text
    justifyContent: 'center', //between, around
    backgroundColor: 'red'
  }
});

export default styles;

//<View style={[(this.props.isTrue) ? styles.bgcolorBlack : styles.bgColorWhite]}>
