import React from 'react';
import {
    StatusBar,
    View,
    Text,
    StyleSheet,
    Pressable,
    ImageBackground
} from 'react-native';
import COLORS from '../../consts/colors';

//fonts
import { useFonts } from "expo-font";
import Apploading from "expo-app-loading";

const OnBoardScreen = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        'Blair ITC.otf': require('../../assets/Blair ITC.otf'),
    });

    if (!fontsLoaded) {
        return <Apploading/>;
    }
    return (
        <ImageBackground source={require('../../assets/mobilescreen.png')}
            style={style.image}>
            <StatusBar translucent backgroundColor={COLORS.tranparent} />

            {/* Onboarding Image */}
            {/* <Image
  source={require('../../assets/mobilescreen.png')}
  style={style.image}
/> */}

            {/* Indicator container */}
            <View style={style.indicatorContainer}>
                <View style={style.indicator} />
                <View style={style.indicator} />
                <View style={[style.indicator, style.indicatorActive]} />
            </View>

            {/* Title and text container */}
            <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                {/* Title container */}
                <View>
                    <Text style={style.title}>BLACKDEFYNITION</Text>
                </View>

                {/* Text container */}
                <View style={{ marginTop: 10 }}>
                    <Text style={style.textStyle}>
                    Bridging Communities, Sharing Cultures & Diversity 
                </Text>
                </View>
            </View>

            {/* Button container */}
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    paddingBottom: 40,
                }}>
                {/* button */}
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <View style={style.btn}>
                        <Text style={{ color: 'black', fontSize: 12, fontFamily: 'Blair ITC.otf', fontWeight: 500, textTransform: 'uppercase', fontStyle: 'normal' }}>constellate</Text>
                    </View>
                </Pressable>
            </View>
        </ImageBackground>


    );
};

const style = StyleSheet.create({
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    indicatorContainer: {
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    indicator: {
        height: 3,
        width: 30,
        backgroundColor: COLORS.grey,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    indicatorActive: {
        backgroundColor: COLORS.dark,
    },
    btn: {
        height: 43,
        width: 139,
        bottom: 40,
        marginHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        position: 'absolute',
        width: 322,
        height: 40,
        

        fontSize: 20,
        fontWeight: 500,
        color: 'white',
        textTransform: 'uppercase',
        top: 490,
        fontFamily: 'Blair ITC.otf',
        // textAlign: 'center',
    },
    textStyle: { 
       fontFamily: 'Blair ITC.otf',
       fontStyle: 'normal',
       textAlign: 'center',
       letterSpacing: 1,
       
        fontSize: 12,
        top: 550,
        width: 247,
        height: 28,
       
        color: 'white' 
     },
});
export default OnBoardScreen;