import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'
import EachBook from './components/EachBook'
import AddBookForm from './components/AddBookForm'

const App = () => {
  const [books, setBooks] = useState([
    {id: Math.random(10), name: "Mathematics", desc: "Lorem ipsum"},
    {id: Math.random(10), name: "English", desc: "Lorem ipsum"},
    {id: Math.random(10), name: "Geography", desc: "Lorem ipsum"},
  ])
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const deleteBook = (id) => {
    setBooks(prevBooks => {
      return prevBooks.filter(book => book.id != id)
    })
  }
  const submitForm = () => {
    if(name.length > 0 && desc.length > 0){
      const newBook = {id: Math.random(10), name: name, desc: desc};
      setBooks(prevBooks => {
        return [newBook, ...prevBooks];
      })
      setName('');
      setDesc('');
    }
    else{
      alert('Please, complete the form.')
    }
  }
  return(
    <View style={styles.container}>
      <AddBookForm name={name} desc={desc} setName={setName} setDesc={setDesc} submitForm={submitForm} />
      <FlatList
        data={books}
        renderItem={({item}) => <EachBook book={item} deleteBook={deleteBook} />}
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