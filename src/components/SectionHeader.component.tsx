import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SectionHeaderComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Explorer les services temtem one</Text>
            <Text style={styles.description}>Laivraison et services pour vous et vos proches</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 24,
        gap: 4,
    },
    title: {
        color: '#262626',
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
})

export default SectionHeaderComponent;
