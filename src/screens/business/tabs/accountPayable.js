import React, { Component } from 'react'
import { Text, ScrollView, SafeAreaView, Clipboard } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-tiny-toast'
import { businessAccounts } from '../../../config/coverLetters'
import{ styles } from './styles' 


export default class accountPayable extends Component {
    copyContent = async () => {
        await Clipboard.setString(businessAccounts);
        await Toast.show('Letter copied to clipboard',{
            position: Toast.position.center,
            containerStyle:{backgroundColor: 'rgba(60, 60, 60, 0.95)', borderRadius: 25},
            mask: true,
        })
    }

    render() {
        return (
            <ScrollView style={styles.mainView}>
                <TouchableOpacity onPress={() => this.copyContent()}>
                    <Icon name="copy" color='grey' size={18} style={{alignSelf: 'flex-end'}} />
                </TouchableOpacity>
                <Text>
                    March 1, 2020{'\n'}{'\n'} 
                    Ms. Wendy McMillan{'\n'}
                    HR Manager{'\n'}
                    ABC Company{'\n'}
                    55 Hart Blvd.{'\n'}
                    Sometown, IA 55555{'\n'}{'\n'}
                </Text>
                <Text style={styles.subject}>
                    Re: Accounts Payable (AP) Specialist | Advertised on Monster{'\n'}{'\n'}
                </Text>
                <Text>
                    Dear Ms. McMillan:{'\n'}{'\n'}

                    While AP is a back-office function and its importance can easily be overlooked, the way the process is managed could make or break a company. As an AP specialist for a leading automotive parts manufacturer, I ensure efficient processes and workflows are in place to keep vendors happy while maximizing my employer’s bottom line. I am confident that my hands-on approach would add value to your AP team.{'\n'}{'\n'}

                    My current day-to-day responsibilities as an AP specialist mirror the job responsibilities outlined in your ad. At XYZ Company, I:{'\n'}{'\n'}

                    - Review invoices for appropriate documentation and approval prior to payment{'\n'}
                    - Research, reconcile and correct discrepancies on vendor statements{'\n'}
                    - Process vendor invoices, AP batches and check rebates{'\n'}
                    - Help plan and execute month-end AP closing processes{'\n'}
                    - Throughout my tenure with XYZ, I have maintained accurate files and documentation; processed invoices and payments on time; and provided first-class service.{'\n'}{'\n'}

                    One of the keys to successful account management is my ability to build relationships and communicate effectively with vendors, suppliers and distributors. If an account issue arises, I expedite resolution to maintain professional, trusting relationships.{'\n'}{'\n'}

                    My qualifications include an associate’s degree in accounting; proficiency in Great Plains, Concur and Ariett invoice management an AP systems; expertise in Excel; knowledge of SOX and GAAP standards; and agility in handling high-volume workloads.{'\n'}{'\n'}

                    May we schedule a meeting? You can reach me at (555) 555-5555. Thank you for your time.{'\n'}{'\n'}

                    Sincerely,{'\n'}{'\n'}

                    Celine Smith{'\n'}
                    Enclosure: Résumé
                </Text>
                <SafeAreaView />
            </ScrollView>
        )
    }
}