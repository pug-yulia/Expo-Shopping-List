import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet } from 'react-native';

const ShoppingListApp = () => {
  const [item, setItem] = useState('');
  const [shoppingList, setShoppingList] = useState([]);

  const handleAddItem = () => {
    if (item.trim() !== '') {
      setShoppingList((prevList) => [...prevList, item]);
      setItem('');
    }
  };

  const handleClearList = () => {
    setShoppingList([]);
  };

  const renderShoppingItem = ({ item }) => (
    <Text style={styles.shoppingItem}>{item}</Text>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type a shopping item"
        value={item}
        onChangeText={(text) => setItem(text)}
      />
      <View style={styles.buttonsContainer}>
        <Button title="Add" onPress={handleAddItem} />
        <Button title="Clear" onPress={handleClearList} />
      </View>
      <Text style={styles.title}>Shopping list: </Text>
      <FlatList
        data={shoppingList}
        renderItem={renderShoppingItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.shoppingList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 50,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  shoppingList: {
    marginTop: 20,
    width: '80%',
  },
  shoppingItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ShoppingListApp;
