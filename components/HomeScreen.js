import * as React from "react";
import { Text, StyleSheet, Image, View, ScrollView, ImageBackground, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import styles from "../css/CSS_All"
import { Card } from '@rneui/themed';
import { ImageSlider } from "react-native-image-slider-banner";

const HomeScreen = () => {
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 1 / 2);
    const imageWidth = dimensions.width;
    return (
        <View style={styles.container}>
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

                <View style={{ marginTop:50 }}>
                    <View style={{ flexDirection:'column' }}>
                        <View style={{flexDirection:'row',flex:1,height:120,marginRight:20}}>
                            <View style={{flex:1,flexDirection:'column'}}>
                                <View style={{ flex: 1 ,}}>
                                    <Image
                                        style={{
                                            width: 89,
                                            height: 92,
                                            left: 10,
                                            top: 0,
                                            position: "absolute",
                                            shadowColor: "#BDD5EB",
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            shadowOpacity: 0.8,
                                            shadowRadius: 2,
                                            elevation: 5,

                                        }}
                                        resizeMode='cover'
                                        source={require('../assets/finance.png')}
                                    >
                                    </Image>
                                </View>
                                <View style={{flex:2,left:30, top: 45}}>
                                    <Text style={{ color:'#134B70'}}>Finance</Text>
                                </View>
                                
                            </View>

                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flex: 1 }}>
                                    <Image
                                        style={{
                                            width: 89,
                                            height: 92,
                                            left: 10,
                                            top: 0,
                                            position: "absolute",
                                            shadowColor: "#CDEBE0",
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            shadowOpacity: 1,
                                            shadowRadius: 2,
                                            elevation: 5,

                                        }}
                                        resizeMode='cover'
                                        source={require('../assets/kirim.png')}
                                    >
                                    </Image>
                                </View>
                                <View style={{ flex: 2, left: 30, top: 45 }}>
                                    <Text style={{ color: '#134B70' }}>Transfer</Text>
                                </View>

                            </View>

                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flex: 1 }}>
                                    <Image
                                        style={{
                                            width: 89,
                                            height: 92,
                                            left: 10,
                                            top: 0,
                                            position: "absolute",
                                            shadowColor: "#CDEBE0",
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            shadowOpacity: 1,
                                            shadowRadius: 2,
                                            elevation: 5,

                                        }}
                                        resizeMode='cover'
                                        source={require('../assets/bill.png')}
                                    >
                                    </Image>
                                </View>
                                <View style={{ flex: 2, left: 45, top: 45 }}>
                                    <Text style={{ color: '#134B70' }}>Bill</Text>
                                </View>

                            </View>

                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flex: 1 }}>
                                    <Image
                                        style={{
                                            width: 89,
                                            height: 92,
                                            left: 10,
                                            top: 0,
                                            position: "absolute",
                                            shadowColor: "#CDEBE0",
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            shadowOpacity: 1,
                                            shadowRadius: 2,
                                            elevation: 5,

                                        }}
                                        resizeMode='cover'
                                        source={require('../assets/payment.png')}
                                    >
                                    </Image>
                                </View>
                                <View style={{ flex: 2, left: 30, top: 45 }}>
                                    <Text style={{ color: '#134B70' }}>Payment</Text>
                                </View>

                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', flex: 1, height: 120, marginRight:20 }}>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flex: 1 }}>
                                    <Image
                                        style={{
                                            width: 89,
                                            height: 92,
                                            left: 10,
                                            top: 0,
                                            position: "absolute",
                                            shadowColor: "#BDD5EB",
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            shadowOpacity: 0.8,
                                            shadowRadius: 2,
                                            elevation: 5,

                                        }}
                                        resizeMode='cover'
                                        source={require('../assets/nocard.png')}
                                    >
                                    </Image>
                                </View>
                                <View style={{ flex: 2, left: 30, top: 45 }}>
                                    <Text style={{ color: '#134B70' }}>Cardless</Text>
                                </View>

                            </View>

                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flex: 1 }}>
                                    <Image
                                        style={{
                                            width: 89,
                                            height: 92,
                                            left: 10,
                                            top: 0,
                                            position: "absolute",
                                            shadowColor: "#CDEBE0",
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            shadowOpacity: 1,
                                            shadowRadius: 2,
                                            elevation: 5,

                                        }}
                                        resizeMode='cover'
                                        source={require('../assets/open_account.png')}
                                    >
                                    </Image>
                                </View>
                                <View style={{ flex: 2, left: 12, top: 45 }}>
                                    <Text style={{ color: '#134B70' }}>Open Account</Text>
                                </View>

                            </View>

                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flex: 1 }}>
                                    <Image
                                        style={{
                                            width: 89,
                                            height: 92,
                                            left: 10,
                                            top: 0,
                                            position: "absolute",
                                            shadowColor: "#CDEBE0",
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            shadowOpacity: 1,
                                            shadowRadius: 2,
                                            elevation: 5,

                                        }}
                                        resizeMode='cover'
                                        source={require('../assets/depo.png')}
                                    >
                                    </Image>
                                </View>
                                <View style={{ flex: 2, left: 18, top: 45 }}>
                                    <Text style={{ color: '#134B70' }}>Bjb Deposito</Text>
                                </View>

                            </View>

                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flex: 1 }}>
                                    <Image
                                        style={{
                                            width: 89,
                                            height: 92,
                                            left: 10,
                                            top: 0,
                                            position: "absolute",
                                            shadowColor: "#CDEBE0",
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            shadowOpacity: 1,
                                            shadowRadius: 2,
                                            elevation: 5,

                                        }}
                                        resizeMode='cover'
                                        source={require('../assets/lagi.png')}
                                    >
                                    </Image>
                                </View>
                                

                            </View>
                        </View>
                    </View>
                </View>

                {/* image slide */}
                <View style={{ }}>
                    <ImageSlider
                        data={[
                            
                            { img: require('../assets/bg-head.png') },
                            { img: require('../assets/banner_1.png') },
                            { img: require('../assets/banner_3.png') },
                            
                        ]}
                        localImg
                        showIndicator
                        caroselImageStyle={{ resizeMode: 'contain', width: imageWidth }}
                        autoPlay={false}
                        // onItemChanged={(item) => console.log("item", item)}
                        closeIconColor="#fff"
                    />
                </View>
                
            </ScrollView>

            <View style={{height:70, backgroundColor:'#fff'}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={{flex:1}}>
                            <Image
                                style={{
                                    width: 35,
                                    height: 33,
                                    left: 20,
                                    top: 10,
                                    position: "absolute",

                                }}
                                resizeMode='contain'
                                source={require('../assets/mailoutline.png')}
                            >
                            </Image>
                        </View>

                        <View style={{ top:45,left:25}}>
                            <Text style={{ color:'#67757B',fontSize:11}}>Inbox</Text>
                        </View>
                        
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={{
                                    width: 35,
                                    height: 33,
                                    left: 20,
                                    top: 10,
                                    position: "absolute",

                                }}
                                resizeMode='contain'
                                source={require('../assets/feather-heart.png')}
                            >
                            </Image>
                        </View>

                        <View style={{ top: 45, left: 20 }}>
                            <Text style={{ color: '#67757B', fontSize: 11 }}>Favorite</Text>
                        </View>

                    </View>

                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={{
                                    width: 81,
                                    height: 81,
                                    left: 0,
                                    top: -40,
                                    position: "absolute",
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 10,
                                    },
                                    shadowOpacity: 0.8,
                                    shadowRadius: 10,
                                    elevation: 20,

                                }}
                                resizeMode='contain'
                                source={require('../assets/qeris.png')}
                            >
                            </Image>
                        </View>

                       

                    </View>

                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={{
                                    width: 35,
                                    height: 33,
                                    left: 20,
                                    top: 10,
                                    position: "absolute",

                                }}
                                resizeMode='contain'
                                source={require('../assets/feather-settings.png')}
                            >
                            </Image>
                        </View>

                        <View style={{ top: 45, left: 25 }}>
                            <Text style={{ color: '#67757B', fontSize: 11 }}>Setting</Text>
                        </View>

                    </View>

                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={{
                                    width: 35,
                                    height: 33,
                                    left: 20,
                                    top: 10,
                                    position: "absolute",

                                }}
                                resizeMode='contain'
                                source={require('../assets/feather-log-out.png')}
                            >
                            </Image>
                        </View>

                        <View style={{ top: 45, left: 25 }}>
                            <Text style={{ color: '#67757B', fontSize: 11 }}>Log Out</Text>
                        </View>

                    </View>
                    
                </View>
            </View>

        </View>

        


    );
};



export default HomeScreen;
