import React, { Component } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {Container, Tab, Tabs } from 'native-base';
import { AppHeader } from '../../assets/components/index'
import { colors } from '../../config' 
import {styles} from './styles'


import BusinessAnalayst from './tabs/businessAnalyst'
import AccountPayable from './tabs/accountPayable'

export default class media extends Component {

  viewPager = () => {
    return (
        <Tabs tabBarUnderlineStyle={{backgroundColor: colors.primary}}>
            <Tab heading="Business Analyst" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
              <BusinessAnalayst />
            </Tab>  

            <Tab heading="Account Payable" tabStyle={styles.tabStyle} activeTabStyle={styles.tabStyle} textStyle={styles.tabTextStyle}  activeTextStyle={styles.tabTextStyle2} >
              <AccountPayable />
            </Tab>
        </Tabs>
        )
    }

  render() {
    return (
    <Container style={{flex: 1}}>
        <SafeAreaView backgroundColor={colors.primary}/>
        <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
        <AppHeader leftIcon="arrow-left" title="Business Cover Letter" onPressLeftText={()=> this.props.navigation.goBack()} />
        {this.viewPager()} 
    </Container>
    );
  }
}
