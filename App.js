import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, View} from 'react-native';
import * as FileSystem from 'expo-file-system';
import {shareAsync} from 'expo-sharing'
import axios from "axios";

export default function App() {

    const donwloadFromAPI = async () => {
        const response = await axios.post('appURL', {
            "id": 16,
            "idProduct": null,
            "idBusiness": "117",
            "discount": 90,
            "description": "Disfrutalo",
            "isIncrement": 0,
            "priceDiscount": 9,
            "price": 90,
            "lifes": 1,
            "expirationDate": "2023-08-24",
            "status": 1,
            "createdBy": 1,
            "modifiedBy": 1,
            "qr": {
                "id": 830,
                "cuponVO": {
                    "id": 170,
                    "idProduct": null,
                    "idBusiness": {
                        "id": 117,
                        "catalogImgVO": {
                            "id": 193,
                            "catalog": "img_0086",
                            "code": "img_bus",
                            "description": "https://softitlan-storage.s3.us-east-2.amazonaws.com/images/cuponealo-banner-117.png",
                            "status": 1
                        },
                        "catalogCatVO": {
                            "id": 26,
                            "catalog": "cat_0007",
                            "code": "cat_bus",
                            "description": "Otros",
                            "status": 1
                        },
                        "name": "Linio",
                        "slogan": "La satisfaccion es importante",
                        "description": "Escucha lo que dice tu casa, todo lo que necesitas de hogar lo encuentras en un mismo sitio.",
                        "phone": "8009254646",
                        "contacEmail": "contacto.mx@linio.com",
                        "instagramLink": "",
                        "facebookLink": "https://www.facebook.com/LinioMexico",
                        "twitterLink": "Linio México",
                        "googlemaps": "",
                        "mainSociamedia": "Facebook",
                        "status": 1,
                        "createdBy": 1,
                        "createdAt": 1658282580000,
                        "modifiedBy": 1,
                        "modifiedAt": 1674708350000,
                        "logoLink": "https://softitlan-storage.s3.us-east-2.amazonaws.com/images/cuponealo-logo-117.png"
                    },
                    "discount": 90,
                    "description": "Disfrutalo",
                    "isIncrement": 0,
                    "priceDiscount": 9,
                    "price": 90,
                    "lifes": 1,
                    "expirationDate": "2023-08-25",
                    "status": 1,
                    "createdBy": 1,
                    "createdAt": 1682614828000,
                    "modifiedBy": 1,
                    "modifiedAt": 1682614828000
                },
                "clientVO": null,
                "qr_address": "168261482841201b",
                "lifes": 1,
                "active_discount": 90,
                "status": 0,
                "createdBy": 1,
                "createdAt": 1682614828000,
                "modifiedBy": 1,
                "modifiedAt": 1682614828000
            },
            "centerColor": [
                171,
                75,
                33
            ],
            "backgroundColor": [
                126,
                253,
                220
            ],
            "cornerColor": [
                199,
                55,
                55
            ],
            "gradient": "radial",
            "pattern": "cuadroHuecos",
            "border": "no",
            "corner": 2,
            "eye": 2,
            "titleColor": [
                0,
                0,
                0
            ],
            "titleFont": "HebertSans",
            "textColor": [
                0,
                0,
                0
            ],
            "textFont": "HebertSans",
            "createdAt": 1658282717000,
            "modifiedAt": 1662059400000,
            "code": "168261482841201b",
            "platform": "React"
        }, {responseType: 'blob'})

        const fr = new FileReader()
        fr.onload = async () => {
            const fileUri = `${FileSystem.documentDirectory}/cupon.png`
            await FileSystem.writeAsStringAsync(fileUri, fr.result.split(',')[1], {encoding: FileSystem.EncodingType.Base64});
            console.log('Save file')
            save(fileUri)
        }
        fr.readAsDataURL(response.data)
    }

    const save = (uri) => {
        shareAsync(uri)
    }

    return (
        <View style={styles.container}>
            <Button title="Donwload from API" onPress={donwloadFromAPI}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
