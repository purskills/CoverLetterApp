import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../../config'

export const styles = ScaledSheet.create({
  touchableContainer: {
    backgroundColor: colors.themeGrey, 
    paddingRight: '20@ms', 
    paddingLeft: '20@ms', 
    height: '44@ms', 
    width: '100%', 
    flexDirection: 'row', 
    alignItems: 'center'
  }
});
