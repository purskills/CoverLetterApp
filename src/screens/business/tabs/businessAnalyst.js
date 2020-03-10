import React, { Component } from 'react'
import { Text, ScrollView, SafeAreaView, Clipboard } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-tiny-toast'
import { businessAnalyst } from '../../../config/coverLetters'
import{ styles } from './styles' 


export default class businessAnalayst extends Component {
    copyContent = async () => {
        await Clipboard.setString(businessAnalyst);
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
                    Ms. Katherine Collins{'\n'}
                    HR Manager{'\n'}
                    ABC Corporation{'\n'}
                    55 Great Lakes Blvd.{'\n'}
                    Sometown, IL 55555{'\n'}{'\n'}
                </Text>
                <Text style={styles.subject}>
                    Re: Business Analyst, Ref. #12345, Advertised on Monster{'\n'}{'\n'}
                </Text>
                <Text>
                    Dear Ms. Collins:{'\n'}{'\n'}

                    When I read ABC Corporation’s advertisement on Monster for a business analyst, I decided to apply immediately. Data-driven and highly analytical, I bring to the table 15 years of experience as a business analyst able to influence corporate growth strategies through fact-based, data-driven insights and analysis.{'\n'}{'\n'}

                    Since earning an MBA, I have worked as a business analyst for a mid-size supermarket chain, a financial services organization and a global pharmaceutical company. In each position, I planned and directed analysis of complex initiatives ranging from proposed mergers, acquisitions and divestitures to Six Sigma-based process improvements, organizational restructures and product launch proposals.{'\n'}{'\n'}

                    Areas of success include:{'\n'}{'\n'}

                    -Producing detailed analytics and actionable reports that show key performance indicators, identify areas of improvement and facilitate informed decision making.{'\n'}
                    -Minimizing uncertainty, removing ambiguity and synthesizing large amounts of complex data into clear, concise and meaningful contexts.{'\n'}
                    -Leading system and process reengineering to capture improved efficiencies, fail-safe business continuity and multimillion-dollar cost savings.{'\n'}
                    -Conducting in-depth data mining, visualization and analysis to uncover and rectify process weaknesses and vulnerabilities, mitigate risk and resolve business and IT{'\n'}{'\n'}

                    As you can see, I am committed to being a positive driver of company goals and confident in my ability to improve ABC Corporation’s operational performance. I am available to interview anytime and look forward to speaking with you. You can call me at (555) 555-5555 or email pw@somedomain.com. Thank you.{'\n'}{'\n'}

                    Sincerely,{'\n'}{'\n'}

                    Phoebe Wen{'\n'}{'\n'}

                    Enclosure: Resume 
                </Text>
                <SafeAreaView />
            </ScrollView>
        )
    }
}


