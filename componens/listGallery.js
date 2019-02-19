import React, {Component} from 'react';
import { Text, View, Image, TouchableOpacity, KeyboardAvoidingView,FlatList, ScrollView} from 'react-native';
import {styles} from "./styles/styles";
import {Actions} from "react-native-router-flux";
import firebase from './config/firebase';
import axios from 'axios';


const { galleryItem, galleryAvatarList,titleGallery,nameExhibition,listContent } = styles;

type Props = {};
export default class listGallery extends Component<Props> {


    constructor() {
        super();

        this.state = {
            loading: true,
            galleries: [],
        }
    }




    componentWillMount() {
        const ref = firebase.database().ref('gallery');
        ref.on('value',  (snapshot)=> {
            const galleries =[];
            const galleriesObj = snapshot.val();
            for (let key in galleriesObj){
                galleries.push({
                    id: key,
                    ...galleriesObj[key]
                })
            }
            this.setState({galleries})
        });


    }



    renderItem({item}){

        return     <View style={styles.listGallery}>
            <TouchableOpacity style={galleryItem}
                              key={item.id}
                              onPress={() => Actions.detailedGallery({item})}
            >
                <Image style={galleryAvatarList}
                       source={{uri:'data:image/jpeg;base64,'+ item.pictures[0].data}}
                />
                <View >
                    <Text style={titleGallery}>{item.name}</Text>
                    <Text style={nameExhibition}>{item.city}</Text>

                </View>
            </TouchableOpacity>
        </View>

    }



    render() {
        return (
            <FlatList
                data={this.state.galleries}
                renderItem={this.renderItem}
            />


        );
    }
}

