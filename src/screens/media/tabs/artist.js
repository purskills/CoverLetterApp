import React, { Component } from 'react'
import { Text, ScrollView, SafeAreaView, Clipboard } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-tiny-toast'
import { mediaArtist } from '../../../config/coverLetters'
import{ styles } from './styles' 


export default class artist extends Component {
    copyContent = async () => {
        await Clipboard.setString(mediaArtist);
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
                    Ms. Susan Jones{'\n'} 
                    HR Manager{'\n'}
                    ABC Agency{'\n'}
                    55 Main St.{'\n'}
                    Sometown, NY 55555{'\n'}
                </Text>
                <Text style={styles.subject}>
                    Re: Forensic Artist | Advertised on Monster{'\n'}
                </Text>
                <Text>
                    Dear Ms. Jones:{'\n'}
                    It is no secret that forensic sketch art is considered a dying art. The advances of computer-aided design tools used to create realistic digital composite drawings make hand sketches seem like relics of a bygone era. While I embrace technology, I also believe that hand-drawn sketches can be just as effective in capturing the nuances of facial characteristics. {'\n'}{'\n'}

                    The forensic artist opening advertised on Monster marries old-school drawing with modern technology, and I am very interested in joining your team.

                    As part of my associate’s degree in fine art program that I completed last year, I worked as a police composite artist apprentice for XYZ Police Department in Sometown, NY. In this role, I sketched accurate facial likenesses and created digital age progressions using Photoshop to help find missing persons and identify criminal suspects. {'\n'}{'\n'}

                    Throughout the apprenticeship, I was commended for my ability to build rapport with witnesses, crime victims, family members and law enforcement officers to help solve active and cold cases. I developed skills in forensic-imaging techniques, portraiture and facial-change characteristics. {'\n'}{'\n'}

                    ABC Agency’s mission to rescue and recover missing and exploited children is one that I share, and I believe I can make significant contributions as a member of your team. You can reach me at 555-555-5555 or email gc@somedomain.com. Thank you for your time. {'\n'}{'\n'}

                    Sincerely, {'\n'}
                    George Cole {'\n'}{'\n'}

                    Enclosures: Résumé and Work Samples </Text>
                    <SafeAreaView />
            </ScrollView>
        )
    }
}


