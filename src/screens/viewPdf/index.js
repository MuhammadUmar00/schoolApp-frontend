import * as React from 'react'
import { View } from 'react-native'
import PDFReader from 'rn-pdf-reader-js'

export default function ViewPDF({ route }) {

    const item = route.params

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
                    uri: `http://192.168.0.121:7000${item.file}`,
                }}
            />
        </View>
    )
}