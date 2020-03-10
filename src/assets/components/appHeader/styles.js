import { ScaledSheet } from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  appHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '5@ms0.3'
  },
  title: {
    color: '#fff',
    fontSize: '16@ms0.3',
    letterSpacing: '2@ms0.3',
    width: '240@ms',
    textAlign: 'center',
    fontWeight: '600'
  },
  userAvatarContainer: {
    flexDirection: 'row',
    marginRight: '20@ms0.2'
  },
  leftStyle: {
    paddingLeft: '20@ms',
  },
  rightTitleText: {
    color: '#fff',
  },
  userAvatar: {
    width: '20@ms',
    height: '20@ms',
  },
  leftStyling: {
    paddingLeft: '20@ms'
  }  
});
