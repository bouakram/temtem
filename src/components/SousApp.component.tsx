import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/styles';
import { MotiView } from 'moti';
import { IMAGES } from '../constants/images';

type SouAppPropsType ={
    idx: number;
    name: string;
    logo: string;
    bgColor?: string;
    numElm: number;
}

const SousAppComponent: React.FC<SouAppPropsType> = ({idx, name, logo, bgColor, numElm}) => {
    return (
        // <MotiView
        //     style={styles.container}
        //     from={{opacity: 0, scale: 0.2}}
        //     animate={{opacity: 1, scale: 1}}
        //     exit={{opacity: 0, scale: 0.2}}
        //     transition={{
        //         duration: numElm > 5 ? 400 : 400,
        //         delay: numElm > 5 ? 0 : 100 * idx,
        //     }}
        // >
        <View
            style={styles.container}
        >
            <View style={styles.imageContainer}>
                {/* <View style={[styles.circleBackground, {backgroundColor: bgColor !== undefined ? bgColor : COLORS[idx]}]}/> */}
                {/* <Image source={{uri: IMAGES[idx] }} alt={'item.name'} style={styles.image}/> */}
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
