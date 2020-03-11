import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions, SafeAreaView } from 'react-navigation';
import { Container } from 'native-base';
import { styles } from './styles';
import { colors } from '../../../config';
import { AppList, AppHeader } from '../index'


export default class SideMenu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  navigateToTab = (screen) => {
    this.props.navigation.navigate(screen)
  }

  render() {
    return (
      <Container style={{ BackgroundColor: 'white' }}>
        <SafeAreaView backgroundColor={colors.primary} />
        <AppHeader title="Top Cover Letters" />
          <AppList iconName="film" title="Art / Design / Media Cover Letter" onPress={ () => this.navigateToTab('Media')} />
          <AppList iconName="briefcase" title="Business Cover Letter" onPress={ () => this.navigateToTab('Business')} />
          <AppList iconName="graduation-cap" title="Education Cover Letter" onPress={ () => this.navigateToTab('Education')} />
          <AppList iconName="tools" title="Engineering Cover Letter" onPress={ () => this.navigateToTab('Engineering')} />
          <AppList iconName="money-bill-alt" title="Finance / Accounting Cover Letter" onPress={ () => this.navigateToTab('Finance')} />
          <AppList iconName="search-dollar" title="Job Search Cover Letter" onPress={ () => this.navigateToTab('JobSearch')} />
          <AppList iconName="user" title="Sales Cover Letter" onPress={ () => this.navigateToTab('Sales')} />
          <AppList iconName="microscope" title="Science Cover Letter" onPress={ () => this.navigateToTab('Science')}/>
          <AppList iconName="user-graduate" title="Student Cover Letter" onPress={ () => this.navigateToTab('Student')} />
          <AppList iconName="tv" title="Technology Cover Letter" onPress={ () => this.navigateToTab('Technology')} />
      </Container>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};