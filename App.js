import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, AsyncStorage, ActivityIndicator} from 'react-native'
import EachBook from './components/EachBook'
import AddBookForm from './components/AddBookForm'

const App = () => {
  
  const [books, setBooks] = useState([])
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [loading, toggleLoader] = useState(true);

  const deleteBook = (id) => {
    const newBooks = books.filter(book => book.id != id);
    _storeData(newBooks);
  }
  const submitForm = () => {
    if(name.length > 0 && desc.length > 0){
      const newBook = {id: Math.random(10), name: name, desc: desc};
      const newBooks = [newBook, ...books];
      _storeData(newBooks);
      setName('');
      setDesc('');
    }
    else{
      alert('Please, complete the form.')
    }
  }
  const _storeData = async (books) => {
    try {
      await AsyncStorage.setItem(
        'BOOKS',
        JSON.stringify(books)
      );
    } catch (error) {
      // Error saving data
    }
    _retrieveData();
  };
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('BOOKS');
      if (value !== null) {
        setBooks(JSON.parse(value));
      }
      else{
        console.log('no data found')
      }
      toggleLoader(false);
    } catch (error) {
      // Error retrieving data
    }
  };

  useEffect(() => {
    // Update the document title using the browser API
    _retrieveData();
  });
  
  return(
    <View style={styles.container}>
      <AddBookForm name={name} desc={desc} setName={setName} setDesc={setDesc} submitForm={submitForm} />
      {loading ? 
        <View style={{padding:10, position: 'relative'}}>
          <ActivityIndicator style={{position: 'absolute'}} size="small" color="#00ff00" />
        </View>
        : null
      }
      
      <FlatList
        data={books}
        renderItem={({item}) => <EachBook book={item} deleteBook={deleteBook} books={books} _storeData={_storeData}/>}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App;