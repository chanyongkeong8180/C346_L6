import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {datasource} from "./Data.js";
import navigation from "./Navigation.js";

const Add = ({navigation}) => {
    const [letter, setLetter] = useState('');
    const [letterType, setLetterType] = useState('');
    return (
        <View>
            <Text>Letter:</Text>
            <TextInput
                style={{borderWidth: 1}}
                onChangeText={(text) => setLetter(text)}/>
            <RNPickerSelect
                onValueChange={(value) => setLetterType(value)}
                items={ [
                    {label: 'Vowels', value: 'Vowels'},
                    {label: 'Consonants', value: 'Consonants'}
                ]}/>
            <Button
                title="Submit"
                onPress={()=> {
                    let item = {key:letter};
                    let indexnum = 1;
                    if (letterType==="Vowels") {
                        indexnum = 0;
                    }
                    datasource[indexnum].data.push(item);
                    navigation.navigate("Home")
                }
            }/>
        </View>
    );
}

export default Add;
