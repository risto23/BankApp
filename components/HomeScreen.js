import * as React from "react";
import { Text, StyleSheet, Image, View, ScrollView, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import styles from "../css/CSS_All"
import { Card } from '@rneui/themed';

const HomeScreen = () => {
    return (
        <View>
            <ScrollView>
                <View style={{
                    height: 201,
                   
                    overflow: "visible",
                    width: 390,
                }}>
                    <Image
                        style={{
                            width: 413,
                            height: 214,
                            left: 0,
                            top: 0,
                            position: "absolute",

                        }}
                        resizeMode='cover'
                        source={require('../assets/bg-head.png')}
                    >
                    </Image>

                    {/* logo digi */}
                    <View 
                        style={{
                            flexDirection: 'row',
                            top: 55,
                            }}>

                        <View style={{flex:5}}>
                            <Image
                                style={{
                                    width: 89,
                                    height: 44,
                                    left: 0,
                                    top: 0,
                                    position: "absolute",

                                }}
                                resizeMode='cover'
                                source={require('../assets/digi.png')}
                            >
                            </Image>

                        </View>
                        <View style={{ flex: 1 }}>

                            <Image
                                style={{
                                    width: 35,
                                    height: 34,
                                    left: 0,
                                    top: 10,
                                    position: "absolute",

                                }}
                                resizeMode='cover'
                                source={require('../assets/search.png')}
                            >
                            </Image>

                        </View>
                        <View style={{ flex: 1 }}>

                            <Image
                                style={{
                                    width: 35,
                                    height: 34,
                                    left: 0,
                                    top: 10,
                                    position: "absolute",

                                }}
                                resizeMode='cover'
                                source={require('../assets/mic.png')}
                            >
                            </Image>

                        </View>

                        

                    </View>


                    {/* my info */}
                    <View 
                        style={{
                            flexDirection: 'row',
                            top: 110,
                    }}>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={{
                                    width: 20,
                                    height: 19,
                                    left: 10,
                                    top: 0,
                                    position: "absolute",

                                }}
                                resizeMode='cover'
                                source={require('../assets/user-profile.png')}
                            >
                            </Image>


                        </View>

                        <View style={{ flex: 8 }}>
                            <Text style={{ color: '#FFFFFF' }}>My Info</Text>

                        </View>


                    </View>


                    {/* hi */}
                    <View
                        style={{
                            flexDirection: 'row',
                            top: 125,
                        }}>
                        <View style={{ flex: 2 , flexDirection:'row'}}>
                            <View>
                                <Text style={{ color: '#FFFFFF', fontSize: 12, left: 10, top: 8 }}>Hi</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#FFFFFF', fontSize: 20, left: 15, top: 0}}>Tammi</Text>
                            </View>



                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={{ color: '#FFFFFF',fontWeight:'bold', top:8, }}>2.167 Point</Text>
                        </View>

                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row', top: 8, backgroundColor:'rgba(250, 250, 250, 0.7)', borderRadius:10,width:100}}>
                                
                                <View>
                                    <Image
                                        style={{
                                            width: 20,
                                            height: 19,
                                            left: 10,
                                            top: 0,
                                            position: "absolute",

                                        }}
                                        resizeMode='cover'
                                        source={require('../assets/2panah.png')}
                                    >
                                    </Image>
                                </View>
                                <View>
                                    <Text style={{ color: '#FFFFFF',  left: 40, top: 0 }}>Redeem</Text>
                                </View>

                            </View>
                           
                            
                        </View>


                    </View>
                    
                    
                </View>

                <View style={{flexDirection:'column',top:30}}>
                    {/* tabungan */}
                    <View style={ styles.card}>
                        <View style={{flex:1}}>
                        
                            <View>
                                <Image
                                    style={{
                                        width: 30,
                                        height: 35,
                                        left: 10,
                                        top: 0,
                                        position: "absolute",

                                    }}
                                    resizeMode='cover'
                                    source={require('../assets/img_27.png')}
                                >
                                </Image>
                            </View>
                            {/* <Text>kkkk</Text> */}          

                        </View>
                        <View style={{flex:4,flexDirection:'column',left:5}}>
                            <View style={{flexDirection:'row'}}>
                                <View>
                                    <Text style={{fontSize:11,color:'#000'}}>Tabungan Tandamata </Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 11, color: '#000' }}>0021*****5100 </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row',marginTop:3 }}>
                                <View>
                                    <Image
                                        style={{
                                            width: 15,
                                            height: 12,
                                            left: 0,
                                            top: 5,
                                            position: "absolute",

                                        }}
                                        resizeMode='cover'
                                        source={require('../assets/mata_coret.png')}
                                    >
                                    </Image>
                                </View>
                                <View style={{left:25}}>
                                    <Text style={{ fontSize: 15, color: '#000', left: 0 }}>IDR 13,373,000 </Text>
                                </View>
                            </View>
                            
                        </View>
                        <View style={{ flex: 1, backgroundColor:'#FFC945', }}>

                            <Image
                                style={{
                                    width: 15,
                                    height: 30,
                                    left: 15,
                                    top: 5,
                                    position: "absolute",

                                }}
                                resizeMode='cover'
                                source={require('../assets/panah.png')}
                            >
                            </Image>

                        </View>
                    </View>
                    
                    {/* saldo */}
                    <View style={styles.card}>
                        <View style={{ flex: 1 }}>

                            <View>
                                <Image
                                    style={{
                                        width: 30,
                                        height: 35,
                                        left: 10,
                                        top: 5,
                                        position: "absolute",

                                    }}
                                    resizeMode='cover'
                                    source={require('../assets/dompet.png')}
                                >
                                </Image>
                            </View>
                            {/* <Text>kkkk</Text> */}

                        </View>
                        <View style={{ flex: 4, flexDirection: 'column', left: 5 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={{ fontSize: 13, color: '#000' }}>Digicash </Text>
                                </View>
                                
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 3 }}>
                                <View>
                                    <Image
                                        style={{
                                            width: 15,
                                            height: 12,
                                            left: 0,
                                            top: 5,
                                            position: "absolute",

                                        }}
                                        resizeMode='cover'
                                        source={require('../assets/mata_coret.png')}
                                    >
                                    </Image>
                                </View>
                                <View style={{ left: 25 }}>
                                    <Text style={{ fontSize: 15, color: '#000', left: 0 }}>IDR 3,373,000 </Text>
                                </View>
                            </View>

                        </View>
                        <View style={{ flex: 1, backgroundColor: '#FFC945', }}>

                            <Image
                                style={{
                                    width: 15,
                                    height: 30,
                                    left: 15,
                                    top: 5,
                                    position: "absolute",

                                }}
                                resizeMode='cover'
                                source={require('../assets/panah.png')}
                            >
                            </Image>

                        </View>
                    </View>

                   
                    
                </View>

                <View style={{ marginTop:40 }}>
                    <View style={{  }}>
                        <Text>jnfdoivdoifvnodin</Text>
                    </View>
                </View>
                
            </ScrollView>

        </View>

        


    );
};



export default HomeScreen;
