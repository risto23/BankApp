import { StyleSheet } from
    'react-native';
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
export default StyleSheet.create({
    
    card: {
        backgroundColor: "#fff",
        // borderWidth:1,
        borderRadius: 10,
        borderEndEndRadius: 10,
        marginTop: 10,
        marginLeft: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 8.00,
        elevation: 10,
        marginRight: 20,
        // marginBottom: 10,
        // paddingTop: 10,
        // paddingBottom: 10,
        height:50,
        flex:1,
        flexDirection:'row'
    },
    card2: {
        backgroundColor: "#fff",
        // borderWidth:1,
        borderRadius: 10,
        borderEndEndRadius: 10,
        marginTop: 10,
        marginLeft: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 8.00,
        elevation: 10,
        marginRight: 20,
        // marginBottom: 10,
        // paddingTop: 10,
        // paddingBottom: 10,
        height: 80,
        flex: 1,
        flexDirection: 'row'
    },
    container :{
        backgroundColor:'#F5FCFF',
        height:'100%'
    }
})