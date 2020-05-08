import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback, Modal, Alert, TextInput} from 'react-native';


const EachBook = ({book, deleteBook, books, _storeData}) => {
    const [ubookName, changeBookName] = useState(book.name);
    const [modalVisible, toggleModal] = useState(false);
    const [ubookDesc, changeBookDesc] = useState(book.desc);

    const updateBook = (id, newBook) => {
        const newBooks = books.map(book => book.id == id ? book = newBook: book);
        _storeData(newBooks)
        toggleModal(false);
        alert('Book updated');
    }
    return(
        <View style={styles.container}>
            <View style={{flex:1, padding:10}}>
                <Text style={styles.bookname}>{book.name}</Text>
                <Text style={styles.bookdesc}>{book.desc}</Text>
            </View>
            <View>
                <TouchableWithoutFeedback onPress={() => deleteBook(book.id)}><Text style={{backgroundColor:'#ff4d4d', padding:10, color:'#ffe6e6'}}>Delete</Text></TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => toggleModal(true)}><Text style={{backgroundColor:'#4d79ff', padding:10, color:'#e6ecff'}}>Update</Text></TouchableWithoutFeedback>
            </View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={{flex: 1}}>
                    <View style={{padding:10, marginBottom:30}}>
                        <View style={{marginBottom: 10}}>
                            <Text>Name</Text>
                            <TextInput style={{borderBottomWidth: 1, borderBottomColor: '#d9d9d9'}} value={ubookName} placeholder="Book name" onChangeText={changeBookName}/>
                        </View>
                        <View>
                            <Text>Description</Text>
                            <TextInput style={{borderBottomWidth: 1, borderBottomColor: '#d9d9d9'}} value={ubookDesc} placeholder="Book description" onChangeText={changeBookDesc}/>
                        </View>
                        <View>
                            <TouchableWithoutFeedback onPress={() => updateBook(book.id, {id:book.id, name: ubookName, desc: ubookDesc})}><View style={{backgroundColor:'#9933ff', padding:10, width: 105, marginTop:10, borderRadius: 5}}><Text style={{color:'#f2e6ff'}}>Update Book</Text></View></TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={{position:'absolute', bottom: 0, width: '100%',backgroundColor:'#000', padding:10}}>
                        <TouchableWithoutFeedback
                        onPress={() => toggleModal(false)}
                        style={{backgroundColor:'#000', width:'100%', padding:10}}
                        >
                        <Text style={{color:'#fff', textAlign:'center'}}>Close</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor:'#e7e7e7',
        borderBottomWidth:0.8,
        flexDirection: 'row',
        marginTop:10
    },
    bookname: {
        fontSize:18
    },
    bookdesc: {
        fontSize:12
    }
})

export default EachBook;