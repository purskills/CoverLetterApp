import React, { Component } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {Container, Tab, Tabs, ScrollableTab} from 'native-base';
import { AppHeader, CoverLetter } from '../../assets/components/index'
import { colors } from '../../config' 
import {styles} from './styles'
import { educationAdmission, educationElementary, educationLibrarian} from '../../config/coverLetters'
import TeachingAssistant from './tabs/teachingAssistant'

export default class education extends Component {

  viewPager = () => {
    return (
        <Tabs tabBarUnderlineStyle={{backgroundColor: colors.primary}} renderTabBar={()=> <ScrollableTab />}>
            <Tab heading="Admissions Councelor" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
               <CoverLetter content={educationAdmission} />
            </Tab>  

            <Tab heading="Elementary School Teacher" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
                <CoverLetter content={educationElementary} />
            </Tab>

            <Tab heading="Librarian" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
                <CoverLetter content={educationLibrarian} />
            </Tab> 

            <Tab heading="Teaching Assistant" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
                <TeachingAssistant />
            </Tab> 
        </Tabs>
        )
    }

  render() {
    return (
    <Container style={{flex: 1}}>
        <SafeAreaView backgroundColor={colors.primary}/>
        <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
        <AppHeader leftIcon="arrow-left" title="Education Cover Letter" onPressLeftText={()=> this.props.navigation.goBack()} />
        {this.viewPager()} 
    </Container>
    );
  }
}
