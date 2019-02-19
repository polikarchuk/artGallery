import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    containerAuthorization: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
    },
    inputStyles: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        width: 250,
        marginBottom: 10,
        color: '#fff',


    },
    buttonSend: {
        color: '#000',
        fontSize: 16,
        width: 250,
        padding: 15,
        textAlign: "center",
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 10
    },
    buttonRegistration: {
        color: '#fff',
        borderColor: "#fff",
        borderWidth: 1,
        fontSize: 16,
        width: 250,
        padding: 15,
        textAlign: "center",
        backgroundColor: 'transparent',
        borderRadius: 10
    },
    buttonBack: {
        color: '#35b757',
        borderColor: "#35b757",
        borderWidth: 1,
        fontSize: 16,
        width: 250,
        padding: 15,
        textAlign: "center",
        backgroundColor: 'transparent',
        borderRadius: 10
    },


    //profile Page
    containerRpofile: {
        backgroundColor: '#000',
        display: "flex",
        flex: 1,


    },
    avatarWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 25,
        marginBottom: 40
    },
    avatarProfile: {
        width: 80,
        height: 80,
        borderRadius: 50,

    },
    profilContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        borderColor: '#fff',
        borderBottomWidth: 2,
        marginBottom: 15


    },
    profilText: {
        fontSize: 18,
        color: "#fff",
        width: 300,
        paddingBottom: 5

    },
    wrapperButton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingHorizontal: 10
    },
    buttonTr: {
        backgroundColor: 'transparent',
        borderRadius: 2,
        borderColor: "#fff",
        borderWidth: 1,
        width: 150,
        paddingVertical: 15,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff'


    },
    buttonbg: {
        backgroundColor: '#fff',
        borderRadius: 2,
        width: 150,
        paddingVertical: 16,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#000'
    },

    // end profile Page
    listGallery: {
        backgroundColor: '#000',
        display: 'flex',
        flex: 1,
        height: "100%",
        padding: 10
    },
    galleryItem: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 25,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        marginBottom: 15
    },
    reviwerItem:{
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        padding:10

    },
    galleryAvatarList: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginRight: 25
    },
    titleGallery: {
        fontSize: 23,
        color: '#fff'
    },
    nameExhibition: {
        fontSize: 16,
        color: '#fff'
    },


    //listGallery page


    textAreaContainer: {
        borderColor: '#fff',
        borderWidth: 1,
        padding: 5,
        width: 250,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10,
        color: '#fff',

    },
    textAreaContainerRreview: {
        borderColor: '#fff',
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10,
        color: '#fff',
        height:120,
        width:"100%"
    },
    textArea: {
        color: '#fff',
        height: 130
    },
    datePicker: {
        marginBottom: 15,
        width: 250,


    },

    //detailed Gallery page

    detailedGalleryWrapper: {
        backgroundColor: '#000',
        flex: 1,
        color: '#fff',
        padding: 10,


    },
    detailedTitleGallery: {
        textAlign: "center",
        color: '#fff',
        fontSize: 35,

    },
    businessHours: {},

    wrapperImg: {
        flexDirection: 'row',
        marginBottom: 10
    },
    reviwerWrapper:{
        alignItems:'center'
    }


})
