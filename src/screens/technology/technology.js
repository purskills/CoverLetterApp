import React, { Component } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {Container, Tab, Tabs, ScrollableTab} from 'native-base';
import { AppHeader, CoverLetter } from '../../assets/components/index'
import { colors } from '../../config' 
import { techComputerScience, techSoftware, techWebDeveloper } from '../../config/coverLetters' 
import {styles} from './styles'

import ITProfessional from './tabs/itProfessional'

export default class media extends Component {

  viewPager = () => {
    return (
        <Tabs tabBarUnderlineStyle={{backgroundColor: colors.primary}} renderTabBar={()=> <ScrollableTab />}>
            <Tab heading="Computer Science" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
              <CoverLetter content={techComputerScience} />
            </Tab>  

            <Tab heading="IT Professional" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
              <ITProfessional />
            </Tab>

            <Tab heading="Software Engineer" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
              <CoverLetter content={techSoftware}/>
            </Tab> 

            <Tab heading="Web Developer" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
              <CoverLetter content={techWebDeveloper}/>
            </Tab> 
        </Tabs>
        )
    }

  render() {
    return (
    <Container style={{flex: 1}}>
        <SafeAreaView backgroundColor={colors.primary}/>
        <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
        <AppHeader leftIcon="arrow-left" title="Technology Cover Letter" onPressLeftText={()=> this.props.navigation.goBack()} />
        {this.viewPager()} 
    </Container>
    );
  }
}
