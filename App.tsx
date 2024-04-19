import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

// Importing all the Components
import Header from './src/Components/Header/Header';
import Footer from './src/Components/Footer/Footer';
import AddItem from './src/Components/AddItem/AddItem';
import ItemList from './src/Components/ItemList/ItemList';
import storage from './storage';

export type ShoppingListItem = {
  item: string;
  quantity: string;
  id: string;
}

function App(): React.JSX.Element {
  // useState for ShoppingList
  const [shoppinglist, setShoppingList] = useState<ShoppingListItem[]>([]);
  const backgroundStyle = { backgroundColor: '#5D1049'};

  useEffect(() => {
    // Load shoppingList from storage when component appears
    storage
      .load({
        key: 'shoppingList'
      })
      .then((data: ShoppingListItem[]) => {
        setShoppingList(data);
      })
      .catch((error: Error) => {
        console.error('Error loading shoppingList:', error);
      });
  }, []);

  // SaveShoppingList to storage
  const saveShoppingList = (list: ShoppingListItem[]) => {
    storage
      .save({
        key: 'shoppingList',
        data: list,
      })
      .then(() => {
        console.log('ShoppingList saved.');
      })
      .catch((error: Error) => {
        console.error('Error saving.', error);
      });
  };

  // Save to Storage and setShoppingList at the same time
  const setShoppingListWithSave = (list: ShoppingListItem[]) => {
    setShoppingList(list);
    saveShoppingList(list);
  };

  // Delete Item and Save at the same time
  const deleteItem = (id: string) => {
    setShoppingListWithSave(shoppinglist.filter(item => item.id !== id));
  };

  console.log(`ShoppingList ${JSON.stringify(shoppinglist)}`)

  return (
    <SafeAreaView style={[styles.mainContainer, backgroundStyle]}>
      {/* StatusBar */}
      <StatusBar
        backgroundColor={'#4E0D3A'}
      />

      {/* Header */}
      <View style={styles.headerContainer}>
        <Header title="Shopping List App" mainStyles={styles.headerComponent}></Header>
      </View>

      {/* AddItem */}
      <View style={styles.addItemContainer}>
        <AddItem
          shoppingList={shoppinglist}
          setShoppingListWithSave={setShoppingListWithSave}
        />
      </View>

      {/* ItemList */}
      <View style={styles.listItemsContainer}>
        <ItemList 
          shoppingList={shoppinglist}
          deleteItem={deleteItem}
        ></ItemList>
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <Footer title='(c) Lab/TVT' mainStyles={styles.footerComponent}></Footer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  headerContainer: {
    flex: 1,
  },
  addItemContainer: {
    flex: 5,
  },
  listItemsContainer: {
    flex: 7,
    borderWidth: 0.5,
    borderColor: 'black'
  },
  footerContainer: {
    flex: 1,
  },
  headerComponent: {
    backgroundColor: '#5D1049',
  },
  footerComponent: {
    backgroundColor: '#5D1049'
  },
  addItemComponent: {
    backgroundColor: '#720D5D'
  },
});

export default App;
