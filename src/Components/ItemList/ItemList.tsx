// ItemList.tsx

import React, { useState } from 'react';
import {
    FlatList,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { Appbar, IconButton, Text, TextInput } from 'react-native-paper';
import { ShoppingListItem } from '../../../App';

interface Props {
    shoppingList: ShoppingListItem[];
    deleteItem: (id: string) => void;
}

const ItemList: React.FC<Props> = ({ shoppingList, deleteItem }) => {
    const items = ({ item }: { item: ShoppingListItem }) => 
        <View style={styles.item}>
            <Text style={styles.quantity}>{item.quantity}x</Text>
            <Text style={styles.name}>{item.item}</Text>
            <IconButton
                iconColor='white'
                icon="delete"
                mode="contained"
                animated={true}
                size={20}
                containerColor='#4E0D3A'
                onPress={() => deleteItem(item.id)}
            />
        </View>
    return (
        <FlatList
            data={shoppingList}
            renderItem={items}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        marginVertical: 5,
        paddingHorizontal: 5,
        backgroundColor: '#720D5D',
        borderRadius: 7,
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 18,
        color: 'white'
    },
    quantity: {
        fontSize: 18,
        paddingHorizontal: 20,
        color: 'white'
    },
});


export default ItemList;