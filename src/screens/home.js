import React, { Component } from 'react';
import { Text, ImageBackground,StatusBar } from 'react-native';
import { Button } from 'native-base';
import {ScaledSheet} from 'react-native-size-matters'
import { SafeAreaView } from 'react-navigation';
import { AppHeader } from '../assets/components/'
import {colors} from '../config/index'

export default class home extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {
    };
  }

  render() {
    return (
        <ImageBackground source={require('../assets/images/home2.jpg')} style={styles.mainView}>
          <SafeAreaView backgroundColor={colors.primary}/>
          <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
          <AppHeader leftIcon="bars" title="Top Cover Letters" onPressLeftText={()=> this.props.navigation.openDrawer()}></AppHeader>
          <Button rounded style={styles.buttonStyle} block onPress={()=> this.props.navigation.openDrawer()} >
            <Text style={styles.buttonText}>Start Reading</Text>
          </Button>
          
        </ImageBackground>
    );
  }
}

const styles = ScaledSheet.create({
    mainView: {
        height: '100%',
        width: '100%'
    },
    buttonStyle: {
      width: '80%',
      height: '42@ms',
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignSelf: 'center',
      position: 'absolute',
      bottom:'80@ms',
    },
    buttonText: {
      fontSize: '14@ms0.3',
      color: colors.white
    },
})
