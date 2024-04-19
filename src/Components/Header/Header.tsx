// Header.tsx

import React from 'react';
import {
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { Appbar } from 'react-native-paper';

interface Props {
    title: string;
    mainStyles: StyleProp<ViewStyle>;
}

const Header: React.FC<Props> = ({title, mainStyles}) => {
    return(
        <Appbar.Header style={[mainStyles, styles.header]} mode='center-aligned'>
            <Appbar.Content title={title} titleStyle={styles.headerTitle}/>
            <Appbar.Action icon="information" color='white' onPress={() => {console.log(`AppBar info pressed`)}} />
            <Appbar.Action icon="dots-vertical" color='white' onPress={() => {console.log(`AppBar menu pressed`)}} />
        </Appbar.Header>
    );
}

const styles = StyleSheet.create({
    header: {
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: 'black'
    },
    headerTitle: {
        fontWeight: '600',
        color: 'white'
    },
});


export default Header;