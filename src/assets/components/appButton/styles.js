import { ScaledSheet } from 'react-native-size-matters';

import { colors } from '../../../config';

export const styles = ScaledSheet.create({
  buttonStyle: {
    width: '80%',
    height: '42@ms',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  detailbuttonStyle: {
    width: '80%',
    height: '37@vs',
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: '14@ms0.3',
  },
  icon: {
    height: '20@ms',
    width: '20@ms'
  }
});
