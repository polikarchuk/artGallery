import React, {Component} from 'react';
import {Text, View, Image, ScrollView, KeyboardAvoidingView,TextInput,TouchableOpacity} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import {styles} from "./styles/styles";
import firebase from './config/firebase';
import {Actions} from "react-native-router-flux";
import listGallery from "./listGallery";





const {
    detailedGalleryWrapper,
    detailedTitleGallery,
    profilText,
    reviwerWrapper,
    textArea,
    textAreaContainerRreview,
    reviwerItem,
    nameExhibition,
    titleGallery


} = styles;

type Props = {};
export default class detailedGallery extends Component<Props> {

    constructor() {
        super();
        this.state = {
            reviews:'',
            pictures:[]
        }
    }

    componentWillMount(){
        const pictures = this.props.item.pictures.map(pic=>'data:image/jpeg;base64,'+ pic.data);
        const reviews = [];
        const reviewsObj = this.props.item.reviews;

        // for (let key in reviewsObj){
        //       reviews.push({
        //      //     id: key,
        //      //     review: reviewsObj[key]
        //       })
        // }
        console.warn(reviews);
        this.setState({pictures, reviews});

    }



    saveReviwer() {
        const id =  this.props.item.id;
        const reviwer =this.state.reviwer;
        firebase.database().ref('gallery/'+id+'/reviews/').push(reviwer,
            (error) => {
                if (error) {
                    // The write failed...
                } else {
                    // Data saved successfully!
                    Actions.listGallery()
                }
            });
    }


    render() {



        const item = this.props.item;

        return  <KeyboardAvoidingView style={detailedGalleryWrapper}>
            <ImageSlider
                style={{height: "35%"}}
                loopBothSides
                autoPlayWithInterval={3000}
                images={this.state.pictures}
            />
            <ScrollView style={detailedGalleryWrapper}>

                <Text style={detailedTitleGallery}>{item.name}</Text>
                <Text style={nameExhibition}>City: {item.city}</Text>
                <Text style={nameExhibition}>Address: {item.address}</Text>
                <Text style={nameExhibition}>Business hours</Text>
                <Text style={nameExhibition}>{item.time} a.m. to {item.time_2} p.m.</Text>
                <Text style={nameExhibition}>Description: {item.description}</Text>


                <View style = {reviwerWrapper}>
                    <View style={textAreaContainerRreview} >
                        <TextInput
                            value={this.state.Reviwer}
                            onChangeText={(reviwer) => {this.setState({reviwer})}}
                            style={textArea}
                            underlineColorAndroid="transparent"
                            placeholder="leave a review"
                            placeholderTextColor="#ccc"
                            numberOfLines={10}
                            multiline={true}
                        />
                    </View>
                    <TouchableOpacity onPress={this.saveReviwer.bind(this)}>
                        <Text style={styles.buttonSend}> add reviwer </Text>
                    </TouchableOpacity>
                </View>

                {/*<FlatList*/}
                    {/*data={this.state.reviews}*/}
                    {/*renderItem={({item})=>  <View key={item } style={reviwerItem}>*/}
                        {/*<Text style={titleGallery}>{item}</Text>*/}
                    {/*</View>}*/}
                {/*/>*/}

            </ScrollView>

        </KeyboardAvoidingView>

    }


}
