import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'
import EachBook from './components/EachBook'

const App = () => {
  const [books, setBooks] = useState([
    {id: Math.random(10), name: "Mathematics", desc: "Lorem ipsum"},
    {id: Math.random(10), name: "English", desc: "Lorem ipsum"},
    {id: Math.random(10), name: "Geography", desc: "Lorem ipsum"},
  ])

  const deleteBook = (id) => {
    setBooks(prevBooks => {
      return prevBooks.filter(book => book.id != id)
    })
  }

  return(
    <View style={styles.container}>
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