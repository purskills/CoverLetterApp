import React, { Component } from 'react'
import { Text, ScrollView, SafeAreaView, Clipboard } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-tiny-toast'
import { mediaPhotographer } from '../../../config/coverLetters'
import{ styles } from './styles' 


export default class photographer extends Component {
    copyContent = async () => {
        await Clipboard.setString(mediaPhotographer);
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
                    Ms. Mary Hart{'\n'}
                    HR Manager{'\n'}
                    ABC Company{'\n'}
                    55 Bridge Rd.{'\n'}
                    Sometown, NC 55555{'\n'}{'\n'}
                </Text>
                <Text style={styles.subject}>
                    Re: Photographer Position n Advertised on Monster{'\n'}{'\n'}
                </Text>
                <Text>
                    Dear Ms. Hart:{'\n'}{'\n'}

                    After reviewing the product photographer job posting on Monster, I am confident I can support your creative department in producing high-quality product shots for marketing and social media.{'\n'}{'\n'}

                    I offer 12 years of commercial studio and on-location experience, producing photos from idea conception to end production. My work has been featured in leading publications (e.g., DEF Publication, GHI Magazine and JKL Home & Garden) as well as global campaigns for MNO Co., PQR Co. and STU Co.{'\n'}{'\n'}

                    Currently a photographer for an online marketing and communications firm, I produce images for catalog, website and social media marketing. I plan, prepare, light, compose and edit 100+ images each day for a range of products, from jewelry, fashion and food to restaurant, hotel and other on-location shots.{'\n'}{'\n'}

                    Skilled at creating images that capture attention on social media, thousands of my images have appeared on Facebook, Instagram, YouTube, Pinterest, Twitter and Tumblr. I play a key role in the visual storytelling and branding of leading consumer product companies and contribute to successful marketing campaigns.{'\n'}{'\n'}

                    Previously, I traveled throughout the U.S. to capture nature, landscape and architectural photography for print magazines and websites as a staff photographer for XYZ Publication Company.{'\n'}{'\n'}

                    I have comprehensive knowledge of Photoshop, InDesign, Lightroom, Bridge, Illustrator and Capture One Pro; studio and lighting setups; and photography equipment including Canon cameras (I currently shoot with an EOS 5D Mark IV). You can say I’m obsessed with learning about and applying the latest advances in photography tools, services and equipment to improve image quality and automate workflows.{'\n'}{'\n'}

                    Let’s discuss how I can translate strategic vision into high-quality, memorable images for your brand. Please review my portfolio at someportfolio.com and call me at (555) 555-5555 to set up an interview. Thank you.{'\n'}{'\n'}

                    Sincerely,{'\n'}
                    Chris Jones{'\n'}{'\n'}

                    Enclosure: Résumé                    
                </Text>
                <SafeAreaView />
            </ScrollView>
        )
    }
}

















