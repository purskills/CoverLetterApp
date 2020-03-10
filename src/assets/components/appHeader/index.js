import React, { memo } from 'react';
import { Text } from 'react-native';
import { Right, Left, Body, Button } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AppHeader = ({ title, leftIcon, onPressRightText, onPressLeftText}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#142850','#142850','#142850']}
      style={styles.appHeader}>

      <Left style={styles.leftStyle}>
        <Button transparent rounded  onPress={onPressLeftText}>
          <Text style={styles.rightTitleText}>
            <Icon name={leftIcon} size={20} style={styles.rightIcon} />
          </Text>
        </Button>
      </Left>
    
      <Body>
        <Text style={styles.title}>{title}</Text>
      </Body>

      <Right>
        <Button transparent rounded style={styles.rightTextButton} onPress={onPressRightText}>
        </Button>
      </Right>
    </LinearGradient>
  );
};

export default memo(AppHeader);
