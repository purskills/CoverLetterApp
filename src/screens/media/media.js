import React, { Component } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {Container, Tab, Tabs, ScrollableTab} from 'native-base';
import { AppHeader, CoverLetter } from '../../assets/components/index'
import { colors } from '../../config' 
import { mediaJournalism } from '../../config/coverLetters' 
import {styles} from './styles'

import Artist from './tabs/artist'
import Photographer from './tabs/photographer'
import Graphic from './tabs/graphicDesign'

export default class media extends Component {

  viewPager = () => {
    return (
        <Tabs tabBarUnderlineStyle={{backgroundColor: colors.primary}} renderTabBar={()=> <ScrollableTab />}>
            <Tab heading="Artist" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
               <Artist />
            </Tab>  

            <Tab heading="Graphic Design" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
                <Graphic />
            </Tab>

            <Tab heading="Journalism" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
                <CoverLetter content={mediaJournalism} />
            </Tab> 

            <Tab heading="Photographer" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
                <Photographer />
            </Tab> 
        </Tabs>
        )
    }

  render() {
    return (
    <Container style={{flex: 1}}>
        <SafeAreaView backgroundColor={colors.primary}/>
        <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
        <AppHeader leftIcon="arrow-left" title="Art / Design & Media" onPressLeftText={()=> this.props.navigation.goBack()} />
        {this.viewPager()} 
    </Container>
    );
  }
}
