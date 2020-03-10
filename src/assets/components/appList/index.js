import React, { memo } from 'react';
import { TouchableOpacity, Text } from 'react-native'
import { Item } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../../config'

import { styles } from './styles';

const AppList = props => {
  return (
    <Item regular style={props.style}>
        <TouchableOpacity style={styles.touchableContainer} onPress={props.onPress}>
            <Text>
                <Icon name={props.iconName} color={colors.primary} size={16} />
            </Text>
            <Text style={{paddingLeft: 10}}>{props.title}</Text>
        </TouchableOpacity>
    </Item>
  );
};

export default memo(AppList);
