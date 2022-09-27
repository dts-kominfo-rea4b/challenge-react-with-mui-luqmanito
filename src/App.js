import './App.css';
import { Card, CardContent, Grid, List } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import { useState } from 'react';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
// // Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
// const App = () => {
// Masukkan Header dan lakukan map untuk Contact ke dalam div App
// untuk membuat daftar kontak bisa menggunakan MUI list
// https://mui.com/material-ui/react-list/#folder-list

// Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
// Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm



//   return (
//     <div className="App">
//     </div>
//   );
// };

// export default App;

// export default function Button() {

// }


let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
  },
});
let App = () => {
  let [contacts, setContacts] = useState(contactsJSON);
  let addContact = (data) => {
    console.log(data)
    setContacts([...contacts, data]);
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{
        background: '#fafafa',
      }}>
        <Header />
        <Grid container spacing={4} padding={10}>
          <Grid item xs={12} md={6} position={'relative'}>
            <Box position={'sticky'} top={128}>
              <ContactForm onSubmit={addContact} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <List sx={{ width: '100%', maxWidth: 360, color: 'white' }}>
                  {contacts?.map((contact, index) => (
                    <Contact data={contact} key={index} />
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default App;
