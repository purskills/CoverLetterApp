import React, { memo } from 'react'
import { Text, ScrollView, SafeAreaView, Clipboard } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-tiny-toast'
import{ styles } from './styles' 

    const copyContent = async (content) => {
        await Clipboard.setString(content);
        await Toast.show('Letter copied to clipboard',{
            position: Toast.position.center,
            containerStyle:{backgroundColor: 'rgba(60, 60, 60, 0.95)', borderRadius: 25},
            mask: true,
        })
    }
    
const CoverLetter = ({ content }) => {
    
    return (
        <ScrollView style={styles.mainView}>
            <TouchableOpacity onPress={() => copyContent(content)}>
                <Icon name="copy" color='grey' size={18} style={{alignSelf: 'flex-end'}} />
            </TouchableOpacity>
            <Text>{content}</Text>
            <SafeAreaView />
        </ScrollView>
    )
}

export default memo(CoverLetter);