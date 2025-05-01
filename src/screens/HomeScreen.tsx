import React, { useCallback, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
// import { temtemServicesApi, useGetTemtemServicesQuery } from '../store/temtemSlice/temtemServices.APISlice';
import { temtemServicesApi } from '../store/temtemSlice/temtemServices.APISlice';
import SousAppComponent from '../components/SousApp.component';
import SectionHeaderComponent from '../components/SectionHeader.component';
import AddMoreServicesComponent from '../components/AddMoreServices.component';
import { MotiView } from 'moti';

const HomeScreen = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [coutry, setCountry] = useState('Algeria');
    const [elemToDisplay, setElemToDisplay] = useState(5);
    const [showMore, setshowMore] = useState(false);
    const {data: services, isFetching, isError, error} = temtemServicesApi.useGetTemtemServicesQuery(coutry);

    // handling show more services
    const laodMoreData = useCallback(() => {
        if(services){
            setElemToDisplay(services.length);
            setshowMore(true);
        }
    }, [services]);

    // handling show less services.
    const laodLesseData = useCallback(() => {
        if(services) {
            setElemToDisplay(5);
            setshowMore(false);
        }
    }, [services]);

    if (isFetching) {
      return (
        <View style={styles.externalContainer}>
            <ActivityIndicator size={'large'} />
        </View>
      );
    }

    if (isError) {
      Alert.alert('Error', 'An error occurred while fetching data: ' + error);
      return (
        <View style={styles.externalContainer}>
            <Text>Error</Text>
        </View>
      );
    }

    return (
        <ScrollView style={styles.container}>
            <SectionHeaderComponent />
            <View style={styles.servicesContainer}>
            {
                // if the souApp are less then 6 display em all.
                services && services.length < 6
                ?
                services.map((item, index) => (
                    <SousAppComponent
                        key={item._id}
                        idx={index}
                        name={item.name}
                        logo={item.logo}
                        bgColor={item.customizations?.color}
                        numElm={elemToDisplay}
                    />
                ))
                :
                // if the souApp are more then 5 display the first 5 and display the rest when pressing loadmore
                services && services.length >= 6
                ?
                services.slice(0, elemToDisplay).map((item, index) => (
                    <SousAppComponent
                        key={item._id}
                        idx={index}
                        name={item.name}
                        logo={item.logo}
                        bgColor={item.customizations?.color}
                        numElm={elemToDisplay}
                    />
                ))
                :
                // if there is no service to display.
                <View style={styles.externalContainer}>
                    <Text>No Services to display.</Text>
                </View>
            }
            {
                // toggle displaying the button; if there is data to display or hide => show the button if not => don't show the button at all.
                (services && (services.length > elemToDisplay || showMore)) && (
                    // <MotiView
                    //     from={{opacity: 0, scale: 0.2}}
                    //     animate={{opacity: 1, scale: 1}}
                    //     exit={{opacity: 0, scale: 0.2}}
                    //     transition={{
                    //         duration: 400,
                    //         delay: 100 * elemToDisplay,
                    //     }}
                    // >
                        <AddMoreServicesComponent
                            laodData={!showMore ? laodMoreData : laodLesseData}
                            text={!showMore ? 'Autres Services' : 'Moin Services'}
                            add={!showMore}
                        />
                    // </MotiView>
                )
            }
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    externalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    container: {
        flex: 1,
        padding: 24,
    },
    servicesContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
        gap: 20,
        flexWrap: 'wrap',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default HomeScreen;
