import React, { Component } from 'react'
import { Text, ScrollView, SafeAreaView, Clipboard } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-tiny-toast'
import { techIT } from '../../../config/coverLetters'
import{ styles } from './styles' 


export default class graphicDesign extends Component {
    copyContent = async () => {
        await Clipboard.setString(techIT);
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
                    Mr. Thomas Jones{'\n'}
                    HR Manager{'\n'}
                    ABC Corp{'\n'}
                    15 Elm Street{'\n'}
                    Sometown, DE 55555{'\n'}{'\n'}
                </Text>
                <Text style={styles.subject}>
                    Re: IT Helpdesk Technician, Advertised on Monster{'\n'}{'\n'}
                </Text>
                <Text>
                    Dear Mr. Jones:{'\n'}{'\n'}

                    I am interested in joining your tier 1 helpdesk team. A longtime fan of ABC Corp’s commitment to customer service, I bring to the table a strong customer service mindset combined with technical skills honed throughout my 15 years of helpdesk experience.{'\n'}{'\n'}

                    Key strengths include:{'\n'}{'\n'}

                    - High-volume ticket management. In my current position as helpdesk support specialist for XYZ Co, I handle 1,725+ tickets per month, fully resolving and documenting issues for future reference.{'\n'}
                    - A track record of consistently meeting or exceeding performance targets correlated with call handling and customer satisfaction goals.{'\n'}
                    - Technical knowledge:{'\n'}
                    - Windows (all versions); Windows Server 2003, 2008 R2 and 2012; macOS; Unix{'\n'}
                    - Microsoft Active Directory Services{'\n'}
                    - LAN, WAN and WiFi network technology (DNS, DHCP, NTP, SNMP and Nagios){'\n'}
                    - MS Office 365/Exchange{'\n'}
                    - Recognition for exceptional service delivery through “ACE Team Member” awards.{'\n'}{'\n'}

                    Mr. Jones, if you are seeking an experienced, tech-savvy and customer service-oriented helpdesk technician with the proven ability to establish excellent relationships with customers, employees, vendors and manufacturers, we should speak.{'\n'}{'\n'}

                    I look forward to learning more about this position and can be reached at (555) 555-5555 or mf@somedomain.com. Thank you for your time.{'\n'}{'\n'}

                    Sincerely,{'\n'}{'\n'}

                    Maria Frankel{'\n'}
                    Enclosure: Résumé
                </Text>
                <SafeAreaView />
            </ScrollView>
        )
    }
}