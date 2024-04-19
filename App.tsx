import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
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
  const [shoppinglist, setShoppingList] = useState<ShoppingListItem[]>([]);
  const backgroundStyle = { backgroundColor: '#5D1049'};

  useEffect(() => {
    // shoppingList from storage when component starts
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

  const setShoppingListWithSave = (list: ShoppingListItem[]) => {
    setShoppingList(list);
    saveShoppingList(list);
  };

  const deleteItem = (id: string) => {
    setShoppingListWithSave(shoppinglist.filter(item => item.id !== id));
  };

  console.log(`ShoppingList ${JSON.stringify(shoppinglist)}`)

  return (
    <SafeAreaView style={[styles.mainContainer, backgroundStyle]}>
      <StatusBar
        backgroundColor={'#4E0D3A'}
      />

      <View style={styles.headerContainer}>
        <Header title="Shopping List App" mainStyles={styles.headerComponent}></Header>
      </View>

      <View style={styles.addItemContainer}>
        <AddItem
          shoppingList={shoppinglist}
          setShoppingListWithSave={setShoppingListWithSave}
          mainStyles={styles.addItemComponent}
        />
      </View>

      <View style={styles.listItemsContainer}>
        <ItemList 
          shoppingList={shoppinglist}
          deleteItem={deleteItem}
        ></ItemList>
      </View>

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
    fontFamily: 'd'
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
