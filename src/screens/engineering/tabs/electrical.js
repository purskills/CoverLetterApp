import React, { Component } from 'react'
import { Text, ScrollView, SafeAreaView, Clipboard } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-tiny-toast'
import { engineeringElectrical } from '../../../config/coverLetters'
import{ styles } from './styles' 


export default class electrical extends Component {
    copyContent = async () => {
        await Clipboard.setString(engineeringElectrical);
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
                    Ms. Carol McConnell{'\n'}
                    HR Manager{'\n'}
                    ABC Company{'\n'}
                    55 Victory Dr.{'\n'}
                    Sometown, FL 55555{'\n'}{'\n'}
                </Text>
                <Text style={styles.subject}>
                    Re: Electrical Engineer Position  •  Advertised on Monster{'\n'}{'\n'}
                </Text>
                <Text>
                    Dear Ms. McConnell:{'\n'}{'\n'}

                    I read your posting on Monster for an electrical engineer with great interest. This challenging position focused on heavy industrial projects is a perfect match to my qualifications.{'\n'}{'\n'}

                    Since earning a bachelor’s degree in electrical engineering (BSEE), I have worked for the last 5 years as an electrical engineer for XYZ Corporation, a leading U.S. shipbuilder of Navy aircraft carriers and submarines. In this role, I maintain, troubleshoot, upgrade and repair plant electrical equipment. This experience has given me a strong foundation within the heavy industrial manufacturing sector in addition to proven success in:{'\n'}{'\n'}

                    - Improving preventive-maintenance programs and inventory systems to minimize unscheduled equipment downtime by up to 34%.{'\n'}
                    - Extending the average life of electronic industrial systems and components by up to 25%.{'\n'}
                    - Cutting machinery repair and replacement costs by $250K in a single year.{'\n'}
                    - Troubleshooting circuitry, wiring and other electrical/electromechanical issues and implementing design improvements to prevent future problems.{'\n'}{'\n'}
                    During my tenure at XYZ Corporation, I developed expertise in an array of cutting-edge engines/motors and plant-wide electrical/control systems, including digital signal processors (DSPs) and programmable logic controllers (PLCs). I am also proficient in using electrical design tools and software such as ETAP, SPEL, SKM Systems Analysis and EasyPower.{'\n'}{'\n'}

                    I am very interested in being part of your integrated engineering team. Please call me at (555) 555-5555 to set up an interview. Thank you for your time.{'\n'}{'\n'}

                    Sincerely,{'\n'}{'\n'}

                    Cindy Jones{'\n'}
                    Enclosure: Résumé
                </Text>
                <SafeAreaView />
            </ScrollView>
        )
    }
}