import React from 'react';
import { Image, Text, View } from 'react-native';


export default function Section1() {
    return (
        <View style={{}}>

            <View style={{ flexDirection: 'row' }}>
                <Image style={{ flex: 1, aspectRatio: 16 / 9, resizeMode: 'cover' }} source={require('../../assets/week3/room-6.jpg')} />

            </View>

        </View>
    );
}
