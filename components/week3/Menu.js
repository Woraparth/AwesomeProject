import React from 'react';
import { TextInput, View } from 'react-native';
import MyIcon from './MyIcon';


export default function Menu() {
    return (
        <View style={{ borderWidth : 1 , borderColor : 'grey' , borderRadius : 10 , margin : 20 , padding : 20}}>
            {/* ก้อนที่1 */}
            <View style={{ borderWidth : 1 , borderColor : 'grey' , borderRadius : 10 , margin : 10 , padding : 10 , backgroundColor : 'lightgrey'}}>
                <TextInput placeholder="What're you looking for?" />
            </View>
            {/* ก้อนที่2/ */}
            <View style = {{flexDirection : 'row' , justifyContent : 'space-around' , marginVertical : 10}}> 
                <MyIcon title='Hotel' name='building' size={30} color='brown' />
                <MyIcon title='Tour' name='map-marker' size={30} color='tomato' />
                <MyIcon title='Car' name='car' size={30} color='lime' />
                <MyIcon title='Flight' name='plane' size={30} color='gold' />
            </View>
            {/* ก้อนที่3 */}
            <View style = {{flexDirection : 'row' , justifyContent : 'space-around'}}>
                <MyIcon title='Cruise' name='ship' size={30} color='purple' />
                <MyIcon title='Bus' name='bus' size={30} color='lightblue' />
                <MyIcon title='Event' name='star' size={30} color='yellow' />
                <MyIcon title='More' name='ellipsis-h' size={30} color='blue' />
            </View>
        </View>
    );
}
