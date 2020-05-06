import React from 'react'
import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native'

const  AddBookForm = (props) => {
    return(
        <View style={{padding:10, marginBottom:30}}>
            <View style={{marginBottom: 10}}>
                <Text>Name</Text>
                <TextInput style={{borderBottomWidth: 1, borderBottomColor: '#d9d9d9'}} value={props.name} placeholder="Book name" onChangeText={props.setName}/>
            </View>
            <View>
                <Text>Description</Text>
                <TextInput style={{borderBottomWidth: 1, borderBottomColor: '#d9d9d9'}} value={props.desc} placeholder="Book description" onChangeText={props.setDesc}/>
            </View>
            <View>
                <TouchableWithoutFeedback onPress={() => props.submitForm()}><View style={{backgroundColor:'#9933ff', padding:10, width: 70, marginTop:10, borderRadius: 5}}><Text style={{color:'#f2e6ff'}}>Submit</Text></View></TouchableWithoutFeedback>
            </View>
        </View>
    );
}

export default AddBookForm;