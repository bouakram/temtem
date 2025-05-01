import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import Icon from '@react-native-vector-icons/feather';

type AddMoreServicesPropsType = {
    laodData: () => void;
    text: string;
    add: boolean;
}

const AddMoreServicesComponent: React.FC<AddMoreServicesPropsType> = ({laodData, text, add}) => {
    return (
    <Pressable style={styles.buttonStyle} onPress={laodData}>
        <View style={styles.iconContainer}>
            {/* eslint-disable-next-line react-native/no-inline-styles */}
            <View style={[styles.circleBackground, {backgroundColor: '#ea580c'}]}/>
            <View style={styles.icon}>
                {
                add ?
                <Icon name="plus-circle" size={20} color="#ea580c" />
                :
                <Icon name="minus-circle" size={20} color="#ea580c" />
                }
            </View>
        </View>
        <View style={styles.textContainer}>
            <Text
                style={styles.text}
                numberOfLines={2}
                ellipsizeMode={'tail'}
                lineBreakMode={'tail'}
                textBreakStrategy={'balanced'}
            >
                {text}
            </Text>
        </View>
    </Pressable>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        width: 100,
        gap: 8,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
    },
    circleBackground: {
        position: 'absolute',
        width: 45,
        height: 45,
        borderRadius: 30,
        opacity: 0.1,
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        color: '#262626',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default AddMoreServicesComponent;
