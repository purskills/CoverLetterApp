import React, { memo } from 'react';
import { Button, Text } from 'native-base';
import { Image } from 'react-native';

import { styles } from './styles';

const AppButton = ({ buttonText, onPress, style, textStyle, iconSource , disabled }) => {
  return (
    <Button rounded style={[styles.buttonStyle, style]} block onPress={onPress} disabled={disabled} >
      {iconSource && (
        <Image source={iconSource} style={styles.icon} resizeMode={'contain'} />
      )}
      <Text style={[styles.buttonText, textStyle]}>{buttonText}</Text>
    </Button>
  );
};

export default memo(AppButton);
