import React, { Component } from 'react'
import { Text, ScrollView, SafeAreaView, Clipboard } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-tiny-toast'
import { salesRepresentative } from '../../../config/coverLetters'
import{ styles } from './styles' 


export default class sales extends Component {
    copyContent = async () => {
        await Clipboard.setString(salesRepresentative);
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
                    March 1, 2020{'\n'}
                    Ms. Rita Jones{'\n'}
                    VP of Sales{'\n'}
                    ABC Corporation{'\n'}
                    55 East Second Street{'\n'}
                    Sometown, FL 55555{'\n'}{'\n'}
                </Text>
                <Text style={styles.subject}>
                    Re: Territory Sales Manager, Advertised on Monster{'\n'}{'\n'}
                </Text>
                <Text>
                    Dear Ms. Jones:{'\n'}{'\n'}

                    As your next territory sales manager, my focus and energy will be directed toward achieving the same multimillion-dollar growth for your southeast territory that I have delivered for my current and former employers.{'\n'}{'\n'}

                    I am a dedicated sales professional with experience propelling my assigned regions to record-setting revenue results. I oversee top-producing salesforces; multi-state territories; and retail, wholesale and distributer channels.{'\n'}{'\n'}

                    In my present role as sales territory manager at XYZ Company as well as in earlier sales positions, I have consistently met or exceeded quotas and expectations. For example, I have:{'\n'}{'\n'}

                    - Closed $6.8M in 2017 (20% above goal) to achieve a new territory record in overall sales volume at XYZ Company.{'\n'}
                    - Ranked in the top 5% of sales professionals company-wide throughout my career, including #1 revenue and market-share honors out of 100 colleagues nationwide during my tenure with DEF Company.{'\n'}
                    - Expanded account base by 23% during a time when industry sales declined by 10%.{'\n'}{'\n'}
                    Regarded as an expert in consultative sales, account management and salesforce development, I am driven to sell, enjoy teaching others how to sell and take pride in serving my customers and channel partners with excellence.{'\n'}

                    I look forward to discussing plans for generating new business opportunities within ABC’s southeast territory, and I have some ideas I would like to share with you. The best way to reach me is my cell (555-555-5555) or email mf@somedomain.com. Thank you for your time!{'\n'}{'\n'}

                    Sincerely,{'\n'}{'\n'}

                    Maria Frank{'\n'}
                    Enclosure: Résumé
                </Text>
                <SafeAreaView />
            </ScrollView>
        )
    }
}