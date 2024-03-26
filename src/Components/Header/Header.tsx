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
            {/*<Appbar.BackAction onPress={() => {console.log(`AppBar back pressed`)}} />*/}
            <Appbar.Content title={title} titleStyle={styles.headerTitle}/>
            <Appbar.Action icon="information" onPress={() => {console.log(`AppBar info pressed`)}} />
            <Appbar.Action icon="dots-vertical" onPress={() => {console.log(`AppBar menu pressed`)}} />
        </Appbar.Header>
    );
}

const styles = StyleSheet.create({
    header: {
      alignItems: 'center',
    },
    headerTitle: {
        fontWeight: '600',
        color: 'blue'
    }
});


export default Header;