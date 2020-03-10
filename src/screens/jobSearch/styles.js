import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../config';

export const styles = ScaledSheet.create({
    mainTabView: {
        backgroundColor: '#FFF', 
        height: '50@vs'
    },
    tabStyle: {
        backgroundColor: '#FFF'
    },
    tabTextStyle: {
        color: colors.grey,
    },
    tabTextStyle2: {
        color: colors.secondary, 
    },
})