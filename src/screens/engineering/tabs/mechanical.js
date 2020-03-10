import React, { Component } from 'react'
import { Text, ScrollView, SafeAreaView, Clipboard } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-tiny-toast'
import { engineeringMechanical } from '../../../config/coverLetters'
import{ styles } from './styles' 


export default class mechanical extends Component {
    copyContent = async () => {
        await Clipboard.setString(engineeringMechanical);
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
                    Mr. Andrew Smith{'\n'}
                    Director of Operations{'\n'}
                    123 Company{'\n'}
                    15 Lafayette Way{'\n'}
                    Sometown, IN 55555{'\n'}{'\n'}
                </Text>
                <Text style={styles.subject}>
                    Re: Mechanical Engineer Position (Ref. Code: 12345), advertised on Monster.com{'\n'}{'\n'}
                </Text>
                <Text>
                    Dear Mr. Smith:{'\n'}{'\n'}

                    Your job description for a mechanical engineer perfectly matches my qualifications, and I am very interested in the opportunity.{'\n'}{'\n'}

                    I have enjoyed a progressively responsible engineering career with ABC Manufacturing Co., and participated in the engineering of three major car model changes. I am experienced in all phases of new vehicle model development and implementation, from conception to production stages. Most recently, I have:{'\n'}{'\n'}
                    
                    - Contributed to major model changes for the 2018 Carname, 2017 Carname and 2016 Carname;{'\n'}
                    - Developed process plans and layouts for seven additional car models;{'\n'}
                    - Reduced ergonomic impact on production team members by designing new assist lift systems;{'\n'}
                    - Helped create estimation and calculation tool for project budgets, greatly improving negotiating power with installation contractors; and{'\n'}
                    - Built rapport with overseas colleagues, often traveling to Japan for production consultations.{'\n'}{'\n'}
                    
                    In addition, I have served as lead engineer in establishing standards that have reduced costs, enhanced efficiency, improved production methods and simplified equipment and part needs.{'\n'}{'\n'}

                    Mr. Smith, I have received repeated commendations from ABC Manufacturing Co. for my work quality, revenue contributions, and commitment to achieving company goals, and I know I would be a valuable asset to your North American Division. Please feel free to call me at 555-555-5555 or send an email to rmatthews@somedomain.com to arrange a meeting. I look forward to speaking with you!{'\n'}{'\n'}

                    Sincerely,{'\n'}{'\n'}{'\n'}

                    Robyn A. Matthews{'\n'}
                    Enclosure: Resume
                </Text>
                <SafeAreaView />
            </ScrollView>
        )
    }
}