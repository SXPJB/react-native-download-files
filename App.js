import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, View} from 'react-native';
import * as FileSystem from 'expo-file-system';
import {shareAsync} from 'expo-sharing'
import axios from "axios";

export default function App() {

    const donwloadFromAPI = async () => {
        const url =''
        const data = {}
        const response = await axios.post(url, data, {responseType: 'blob'})

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
