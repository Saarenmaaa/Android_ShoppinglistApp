// Footer.tsx

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
// Footer BAR
const Footer: React.FC<Props> = ({title, mainStyles}) => {
    return(
        <Appbar.Header style={[mainStyles, styles.footer]} mode='center-aligned'>
            <Appbar.Content title={title} titleStyle={styles.footerTitle}/>
        </Appbar.Header>
    );
}

const styles = StyleSheet.create({
    footer: {
      alignItems: 'center',
    },
    footerTitle: {
        fontWeight: '200',
        fontSize: 18,
        color: 'white'
    }
});


export default Footer;