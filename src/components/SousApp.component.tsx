import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type SouAppPropsType ={
    idx?: number;
    name: string;
    logo: string;
    bgColor?: string;
    numElm?: number;
}

const SousAppComponent: React.FC<SouAppPropsType> = ({
    name,
    logo,
}) => {
    return (
        <View
            style={styles.container}
        >
            <View style={styles.imageContainer}>
                <Image source={{uri: logo }} alt={'item.name'} style={styles.image}/>
            </View>
            <View style={styles.textContainer}>
                <Text
                    style={styles.text}
                    numberOfLines={2}
                    ellipsizeMode={'tail'}
                    lineBreakMode={'tail'}
                    textBreakStrategy={'balanced'}
                >
                    {name}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 100,
        gap: 8,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
    },
    circleBackground: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 30,
        opacity: 0.1,
    },
    image: {
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

export default SousAppComponent;
