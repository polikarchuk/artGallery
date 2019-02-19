import React, {Component} from 'react';
import Authorization from './Authorization'
import Registration from './Registration'
import profile from './profile'
import listGallery from './listGallery'
import CreateGallery from './CreateGallery'
import detailedGallery from './detailedGallery'


import {Scene, Router} from 'react-native-router-flux';




const App = () => (
    <Router>
        <Scene>
            <Scene key="Authorization"
                   initial
                   component={Authorization}
                   title="Authorization"/>

            <Scene key="Registration"
                   component={Registration}
                   title="Registration"/>

            <Scene key="profile"
                   component={profile}
                   title="profile"/>


            <Scene key="listGallery"

                   component={listGallery}
                   title="listGallery"/>

            <Scene key="detailedGallery"

                   component={detailedGallery}
                   title="detailedGallery"/>

            <Scene key="CreateGallery"

                   component={CreateGallery}
                   title="CreateGallery"/>


        </Scene>

    </Router>
);

export default  App;

