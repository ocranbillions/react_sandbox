import React from "react";
import ReactDOM from "react-dom";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });
  
  const MyDoc = () => (
    <Document>
      <Page style={styles.movieTitle}>
        <Text>Some text here</Text>
      </Page>
    </Document>
  )
  
  const App = () => (
    <div>
      <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download')}
      </PDFDownloadLink>
    </div>
  )

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
// ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);