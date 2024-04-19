// AddItem.tsx

import React, { useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { Appbar, IconButton, Text, TextInput } from 'react-native-paper';
import { ShoppingListItem } from '../../../App';
import uuid from 'react-native-uuid'

interface Props {
    shoppingList: ShoppingListItem[];
    setShoppingListWithSave: (shoppingList: ShoppingListItem[]) => void;
    mainStyles: StyleProp<ViewStyle>;
}

const AddItem: React.FC<Props> = ({shoppingList, setShoppingListWithSave, mainStyles}) => {
    const [item, setItem] = useState<string>('')
    const [quantity, setQuantity] = useState<string>('')
    
    const addItem = () => {
        if(!item) {
            console.log("Item can not be empty")
        } else {
            setShoppingListWithSave([...shoppingList, {item, quantity: quantity||'1', id: uuid.v4().toString(),
        }]);
            setItem('');
            setQuantity('');
        }
    }

    return(
        <View style={styles.container}>
            <Text variant="headlineMedium" style={styles.headline}>Add Items to List</Text>
            <TextInput
                style={styles.containerInputText}
                label="Item Name"
                value={item}
                mode="outlined"
                onChangeText={(item) => setItem(item)}
            />
            <TextInput
                style={styles.containerInputText}
                label="Quantity"
                value={quantity}
                mode="outlined"
                onChangeText={(quantity) => setQuantity(quantity)}
                keyboardType='numeric'
                placeholder='Type quantity'
            />
            <IconButton
                containerColor='#4E0D3A'
                iconColor='white'
                icon="plus"
                mode="contained"
                animated={true}
                size={20}
                onPress={() => addItem()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerInputText: {
        width: "80%",
        margin: 10,
    },
    headline: {
        color: 'white'
    }
});


export default AddItem;