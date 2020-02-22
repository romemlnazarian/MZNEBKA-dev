import { Platform } from "react-native";

const MainCss = {
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    chatlistcartitem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chatlistitem1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 150
    },
    chatlistitem2: {
        marginTop: 25
    },
    totalnewchat: {
        alignSelf: 'center',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    containersend: {
        marginTop: 10
    },

    fistusersend: {
        marginRight: 10,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        width: '95%',
        justifyContent: 'flex-end'

    },

    text1send: {
        minWidth: '30%',
        maxWidth: '80%',
        minHeight: 20,
        backgroundColor: '#dfe3ee',
        borderRadius: 10,
        paddingRight: 5,
        paddingLeft: 5,

        marginRight: 5,
        fontSize: 14

    },
    containerreceve: {
        marginTop: 10,

    },


    fistuserreceve: {
        marginLeft: 10,
        flexDirection: 'row',
        width: '95%',



    },

    text1receve: {
        minWidth: '30%',
        maxWidth: '80%',
        fontFamily: 'B Nazanin',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
        fontSize: 14

    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -1
    },
    newchatprivateviewtotal: {
        // marginButton:Platform.OS==='ios'?10:5,
        borderWidth: 1,
        borderRadius: 25,
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
        flexDirection: 'row',
        width: '98%',
        backgroundColor: 'white',

    }
};


export default MainCss;
