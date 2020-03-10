import React, { Component } from 'react'
import { Text, ScrollView, SafeAreaView, Clipboard } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-tiny-toast'
import { engineeringCivil } from '../../../config/coverLetters'
import{ styles } from './styles' 


export default class civil extends Component {
    copyContent = async () => {
        await Clipboard.setString(engineeringCivil);
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
                    Ms. Diane Smith{'\n'}
                    HR Manager{'\n'}
                    ABC Company{'\n'}
                    55 Circle Point{'\n'}
                    Sometown, AZ 55555{'\n'}{'\n'}
                </Text>
                <Text style={styles.subject}>
                    Re: Civil Engineer Trainee III u Advertised on Monster{'\n'}{'\n'}
                </Text>
                <Text>
                    Dear Ms. Smith:{'\n'}{'\n'}

                    Your civil engineer trainee position is an exciting opportunity. ABC Company’s stellar reputation for providing quality service and project support to your clients is well-known, and I am motivated to join your team.{'\n'}{'\n'}

                    Highlights of my credentials:{'\n'}{'\n'}

                    - BS in civil engineering and Engineer in Training (EIT) certification from NCEES.{'\n'}
                    - Two years of experience as a civil engineer trainee and intern for premier design firms.{'\n'}
                    - Hands-on experience providing project design and site civil engineering leadership for water, wastewater, roadway and other municipal infrastructure projects in Sometown, AZ.{'\n'}
                    - Delivery of on-schedule, on-budget and high-quality completion of infrastructure projects with varying degrees of complexity and budgets ranging from $500K to $6.8M.{'\n'}
                    - Proficient in preparing drawings and technical specs using AutoCAD Civil 3D and MicroStation.{'\n'}{'\n'}

                    In addition, I have worked closely with licensed PEs to save our clients and employers tens of thousands of dollars while maintaining compliance with regulatory requirements. I have provided creative, cost-effective design solutions to issues including erosion, corrosive groundwater, insufficient water inflow/drainage, soil instability, steep-slope grading and other engineering challenges.{'\n'}{'\n'}

                    If my credentials and strong understanding of municipal water and wastewater infrastructure systems are well matched to your needs, please contact me at (555) 555-5555 or email lm@somedomain.com to schedule an interview. Thanks very much.{'\n'}{'\n'}

                    Sincerely,{'\n'}{'\n'}

                    Lena Marks, EIT{'\n'}
                    Enclosure: Résumé 
                </Text>
                <SafeAreaView />
            </ScrollView>
        )
    }
}