import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';





interface ScreenProps extends NativeStackScreenProps<any> {

}



const Main: React.FC<ScreenProps> = () => {

    return (
        <View style={styles.container}>

            <Text style={styles.greeting}>
                <Text style={styles.name}>

                </Text>
            </Text>



        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    greeting: {
        margin: 16,
        fontSize: 17,
        fontWeight: '500',
        textAlign: 'center',
        marginHorizontal: 40
    },
    name: {
        color: 'red',
        fontSize: 20
    },
    linkText: {
        margin: 16,
        fontSize: 16,
        color: 'blue',
        textAlign: 'center',

    }
});

export default Main;

