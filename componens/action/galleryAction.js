
import firebase from '../config/firebase';



export const addGallery = (gallery) => dispatch => {
    const pictures = gallery.pictures.map(img => img.data);
    // delete cafe.pictures;
    firebase.database().ref('cafes/' + uuid()).set(gallery,
        (error) => {
            if (error) {
                // The write failed...
            } else {
                // Data saved successfully!
                dispatch({
                    type:'add_gallery',
                    payload: gallery
                })
            }
        });




};
const uuid = () =>
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });

