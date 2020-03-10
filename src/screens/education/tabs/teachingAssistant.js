import React, { Component } from 'react'
import { Text, ScrollView, SafeAreaView, Clipboard } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-tiny-toast'
import { educationTeachingAssistant } from '../../../config/coverLetters'
import{ styles } from './styles' 


export default class teachingAssistant extends Component {
    copyContent = async () => {
        await Clipboard.setString(educationTeachingAssistant);
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
                    Ms. Sherry Martin{'\n'}
                    HR Manager{'\n'}
                    ABC School District{'\n'}
                    55 Orange Circle{'\n'}
                    Sometown, CA 55555{'\n'}{'\n'}
                </Text>
                <Text style={styles.subject}>
                    Re: Teaching Assistant, Advertised on Monster{'\n'}{'\n'}
                </Text>
                <Text>
                    Dear Ms. Martin:{'\n'}{'\n'}
                    I am a high school graduate with multilingual fluencies (English, Mandarin, American Sign Language); experience as a classroom aide; certifications in First Aid, CPR and Nonviolent Crisis Intervention®; and a love for working with children diagnosed with special needs. These qualifications make me well-suited for your teaching assistant opening advertised on Monster.{'\n'}{'\n'}

                    Raised in the U.S. by immigrant parents, I have benefitted greatly from my upbringing in which both English and Mandarin were spoken in our home. After my younger brother was diagnosed with profound deafness, I was first in the family to learn American Sign Language (ASL). Before long I was tutoring my brother, parents and other family members in ASL fundamentals, and these circumstances cemented my passion for teaching, linguistics and early childhood education that has only grown over time.{'\n'}{'\n'}

                    In high school, I was selected for a yearlong internship serving as a part-time classroom aide assisting pre-K and Kindergarten teachers three afternoons per week. I gained experience working with students with a range of disabilities and learning differences within an inclusive classroom setting, and engaged young learners in activities to optimize their understanding of lessons presented.{'\n'}{'\n'}

                    I am motivated to become a professional educator. After I have completed the first year as a teaching assistant, I intend to pursue a bachelor’s degree in elementary education part-time while continuing to work as a teaching assistant. My long-term goal is to serve ABC School District as a full-time educator for years to come.{'\n'}{'\n'}

                    To arrange a meeting, please contact me at (555) 555-5555 or email jl@somedomain.com. Thank you for your time.{'\n'}{'\n'}

                    Sincerely,{'\n'}{'\n'}{'\n'}


                    Jia Lee{'\n'}
                    Enclosure: Resume             
                </Text>
                <SafeAreaView />
            </ScrollView>
        )
    }
}