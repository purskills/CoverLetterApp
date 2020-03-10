import React, { Component } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {Container, Tab, Tabs, ScrollableTab} from 'native-base';
import { AppHeader } from '../../assets/components/index'
import { colors } from '../../config' 
import {styles} from './styles'

import Civil from './tabs/civil'
import Electrical from './tabs/electrical'
import Mechanical from './tabs/mechanical'

export default class media extends Component {

  viewPager = () => {
    return (
        <Tabs tabBarUnderlineStyle={{backgroundColor: colors.primary}} renderTabBar={()=> <ScrollableTab />}>
            <Tab heading="Civil Engineering" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
               <Civil />
            </Tab>  

            <Tab heading="Electrical Engineering" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
                <Electrical />
            </Tab>

            <Tab heading="Mechanical Engineering" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
                <Mechanical />
            </Tab> 
        </Tabs>
        )
    }

  render() {
    return (
    <Container style={{flex: 1}}>
        <SafeAreaView backgroundColor={colors.primary}/>
        <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
        <AppHeader leftIcon="arrow-left" title="Engineering Cover Letter" onPressLeftText={()=> this.props.navigation.goBack()} />
        {this.viewPager()} 
    </Container>
    );
  }
}
