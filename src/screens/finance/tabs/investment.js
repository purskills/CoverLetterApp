import React, { Component } from 'react'
import { Text, ScrollView, SafeAreaView, Clipboard } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-tiny-toast'
import { financeInvestment } from '../../../config/coverLetters'
import{ styles } from './styles' 


export default class investment extends Component {
    copyContent = async () => {
        await Clipboard.setString(financeInvestment);
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
                    Ms. Sherry Maxwell{'\n'}
                    Director, Human Resources{'\n'}
                    ABC Company{'\n'}
                    555 Maple Ave.{'\n'}
                    Sometown, IL 55555{'\n'}{'\n'}
                </Text>
                <Text style={styles.subject}>
                    Re: Investment Banking Analyst, Advertised on Monster{'\n'}{'\n'}
                </Text>
                <Text>
                    Dear Ms. Maxwell:{'\n'}{'\n'}

                    As a recent graduate of XYZ University with a BS in finance, I am eager to launch my career in investment banking. Your entry-level analyst opening provides an excellent fit to my qualifications and aspirations, and I hope to have the chance to interview for this position.{'\n'}
                    In addition to my academic credentials, I offer hands-on experience in finance gained through a six-month internship with DEF Co, one of the largest full-service investment banks in the U.S. I contributed to complex projects that included valuations, forensic reviews, debt restructures and business model analysis.{'\n'}
                    I thrived in this fast-paced, client-centered setting. My supervisor called me an “integral member of the Investment Banking Department, willing to jump in to assist whenever necessary to help the department and clients achieve their goals.”{'\n'}{'\n'}


                    Rounding out my qualifications are computer proficiencies in Excel, SAP and Oracle, and an understanding of compliance applications within securities transactions (SEC and FINRA).{'\n'}
                    I realize that this is a unique opportunity to join the investment team of a bank that has generated strong long-term returns for its constituents, and I would like to be part of your continued success. Please call me at (555) 555-5555 or email jg@somedomain.com to arrange an interview.{'\n'}{'\n'}

                    I look forward to hearing from you.{'\n'}{'\n'}

                    Sincerely,{'\n'}{'\n'}

                    Jonathan Green{'\n'}
                    Enclosure: Résumé
                </Text>
                <SafeAreaView />
            </ScrollView>
        )
    }
}