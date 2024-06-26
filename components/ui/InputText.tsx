// Input.js
import React from 'react';
import {Text, TextInput, View } from 'react-native';

export default function  InputText ({ label, value, placeholder, secureTextEntry, onChangeText }) {
    return (
        <View className="w-full px-8">
            <Text className="text-lg">{label}</Text>
            <TextInput
                className="border-2 border-black p-2 w-full rounded-lg"
                value={value}
                id={label}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
            />
        </View>
    );
};