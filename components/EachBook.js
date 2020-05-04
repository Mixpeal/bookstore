import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';


const EachBook = ({book, deleteBook}) => {
    return(
        <View style={styles.container}>
            <View style={{flex:1, padding:10}}>
                <Text style={styles.bookname}>{book.name}</Text>
                <Text style={styles.bookdesc}>{book.desc}</Text>
            </View>
            <View>
                <TouchableWithoutFeedback onPress={() => deleteBook(book.id)}><Text style={{backgroundColor:'red', padding:10, color:'#fff'}}>Delete</Text></TouchableWithoutFeedback>
                <TouchableWithoutFeedback><Text style={{backgroundColor:'blue', padding:10, color:'#fff'}}>Update</Text></TouchableWithoutFeedback>
            </View>
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