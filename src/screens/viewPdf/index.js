import * as React from 'react'
import { View } from 'react-native'
import PDFReader from 'rn-pdf-reader-js'

export default class App extends React.Component {
    render() {
        return (
            <View style={{ height: "100%", width: '100%', marginTop: '10%' }}>
                <PDFReader
                    customStyle={{
                        readerContainerZoomContainer: {
                            borderRadius: 30,
                            backgroundColor: 'white',
                        }
                    }}
                    source={{
                        uri: 'http://192.168.0.113:7000/education.com/backend/api/v1/uploads/q8rpm-how-it-works.pdf.pdf',
                    }}
                />
            </View>
        )
    }
}