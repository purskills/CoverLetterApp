import React, { Component } from 'react'
import { Text, ScrollView, SafeAreaView, Clipboard } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-tiny-toast'
import { mediaGraphic } from '../../../config/coverLetters'
import{ styles } from './styles' 


export default class graphicDesign extends Component {
    copyContent = async () => {
        await Clipboard.setString(mediaGraphic);
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
                    Mr. Michael Preston{'\n'} 
                    Human Resources Director{'\n'}
                    ABC Corporation{'\n'}
                    55 Madison Ave.{'\n'}
                    Sometown, NY 55555{'\n'}
                </Text>
                <Text style={styles.subject}>
                    Re: Graphic Designer, Advertised on Monster{'\n'}
                </Text>
                <Text>
                    Dear Mr. Preston:{'\n'}
                    It might seem strange that I get excited thinking about colors, typography and cascading style sheets, but my passion for all aspects of graphic design has remained strong throughout my 10-year career. I am very interested in the graphic designer position posted on Monster, and hope to have the chance to interview for this exciting opportunity.{'\n'}{'\n'}
                    My background includes corporate, agency and freelance graphic design experience, with a history of leading print, interactive and digital design projects to acclaimed completion. I have worked on nationwide and international marketing, advertising, product launch and image campaigns for global brands and companies, including DEF Co, GHI Co, JKL Co, MNO Co and PQR Co, as well as a host of startup and mid-size businesses.{'\n'}{'\n'}
                    Highlights of my skills include:{'\n'}{'\n'}

                    - Print and Digital Graphic Design{'\n'}
                    - Website, UX and GUI Design{'\n'}
                    - Packaging Design{'\n'}
                    - Flash Animation and 3D Art{'\n'}
                    - Brand Creation and Extension{'\n'}
                    - Interactive Media and Typography Design{'\n'}
                    - Clickable Prototypes and Information Architecture{'\n'}
                    - Pre-Press and Printing Processes{'\n'}
                    - Original Artwork and Photorealistic Illustration{'\n'}
                    - Color Rendering and Correction{'\n'}
                    - I am backed by a BA in graphic design and proficiencies in Adobe Creative Suite, HTML, HTML5, CSS, WordPress and a range of other design, video, web, wireframe and multimedia software.{'\n'}{'\n'}

                    Dedicated to bringing brands to life through omni-channel marketing programs, my key focus is to exceed client and employer expectations. I enjoy collaborating with clients, creative teams and production professionals to deliver design solutions propelling web traffic, social media engagement, response rates and customer-acquisition results.{'\n'}{'\n'}
                    You may visit my portfolio at Portfolio URL to see examples of my work, and call me at (555) 555-5555 to set up an interview. Thank you.{'\n'}{'\n'}

                    Sincerely,{'\n'}{'\n'}

                    
                    Mary J. Sampson{'\n'}{'\n'}
                    Enclosure: Resume 
                    </Text>
                <SafeAreaView />
            </ScrollView>
        )
    }
}