import React, { Component } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {Container, Tab, Tabs, ScrollableTab} from 'native-base';
import { AppHeader, CoverLetter } from '../../assets/components/index'
import { colors } from '../../config'
import {styles} from './styles'
import { 
    jobSearchApproach, 
    jobSearchCareerChange, 
    jobSearchEarlyCareerChange, 
    jobSearchMidCareer,
    jobSearchJobPosting,
    jobSearchInterviewThank,
    jobSearchUnemployed 
} from '../../config/coverLetters' 




export default class jobSearch extends Component {

  viewPager = () => {
    return (
        <Tabs tabBarUnderlineStyle={{backgroundColor: colors.primary}} renderTabBar={()=> <ScrollableTab />}>
            <Tab heading="Approach" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
               <CoverLetter content={jobSearchApproach}/>
            </Tab>  

            <Tab heading="Career Change" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
                <CoverLetter content={jobSearchCareerChange}/>
            </Tab>

            <Tab heading="Early Career Change" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
                <CoverLetter content={jobSearchEarlyCareerChange}/>
            </Tab> 

            <Tab heading="Mid Career" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
               <CoverLetter content={jobSearchMidCareer}/>
            </Tab>  

            <Tab heading="Job Posting" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
                <CoverLetter content={jobSearchJobPosting}/>
            </Tab>

            <Tab heading="Interview Thank" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
                <CoverLetter content={jobSearchInterviewThank}/>
            </Tab> 

            <Tab heading="Unemployed" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
                <CoverLetter content={jobSearchUnemployed}/>
            </Tab> 
        </Tabs>
        )
    }

  render() {
    return (
    <Container style={{flex: 1}}>
        <SafeAreaView backgroundColor={colors.primary}/>
        <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
        <AppHeader leftIcon="arrow-left" title="Job Search Cover Letter" onPressLeftText={()=> this.props.navigation.goBack()} />
        {this.viewPager()} 
    </Container>
    );
  }
}
