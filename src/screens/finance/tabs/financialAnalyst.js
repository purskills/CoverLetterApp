import React, { Component } from 'react'
import { Text, ScrollView, SafeAreaView, Clipboard } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-tiny-toast'
import { financeAnalyst } from '../../../config/coverLetters'
import{ styles } from './styles' 


export default class financialAnalyst extends Component {
    copyContent = async () => {
        await Clipboard.setString(financeAnalyst);
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
                    Mr. Joshua Hartwell{'\n'}
                    HR Coordinator{'\n'}
                    ABC Company{'\n'}
                    567 North Ave.{'\n'}
                    Sometown, VT 55555{'\n'}{'\n'}
                </Text>
                <Text style={styles.subject}>
                    Re: Financial Analyst, FP&A  |  Advertised on Monster{'\n'}{'\n'}
                </Text>
                <Text>
                    Dear Mr. Hartwell:{'\n'}{'\n'}

                    I am very interested in the financial analyst opportunity posted on Monster. As a financial analyst with a BS in finance and 12 years of diverse-industry experience, I excel at managing complex FP&A initiatives for publicly held companies and global, multimillion-dollar operations.{'\n'}{'\n'}

                    Valued as a decision-support partner by executives and boards of directors, I provide ad hoc analysis, data sourcing, research and financial modeling contributing to business transformations, including:{'\n'}{'\n'}

                    - Structuring acquisition deals of up to $200M.{'\n'}
                    - Providing financial and operational analysis contributing to approvals or rejection of business cases valued at up to $500M.{'\n'}
                    - Benchmarking analyses giving employers tools to achieve a competitive advantage.{'\n'}
                    - Fostering cross-departmental relationships and sharing trends with executive leaders to develop continuous-improvement solutions throughout the organization.{'\n'}{'\n'}
                    I also play a key role in refining models and reports that support forecast and budget processes. By “owning the data,” I am able to drive visibility into my employers’ revenue, expenses and functional operations and guide better decision-making.{'\n'}{'\n'}

                    If you are searching for a financial analyst armed with the vision and know-how to increase shareholder value, we should speak. You may contact me at (555) 555-5555 or no@somedomain.com.{'\n'}{'\n'}

                    Sincerely,{'\n'}{'\n'}{'\n'}

                    

                    Natalie O’Brien{'\n'}
                    Enclosure: Resume 
                </Text>
                <SafeAreaView />
            </ScrollView>
        )
    }
}