import NavBar from "./components/NavBar";
import { createTheme } from '@mui/material/styles';
import { orange, red } from '@mui/material/colors';
import { ThemeProvider } from "@emotion/react";
import ItemListConteiner from "./components/ItemListConteiner"

const theme = createTheme({
  palette: {
    primary: {
      main: red[400],
    },
    secondary: {
      main: orange[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <NavBar />
      <ItemListConteiner greeting={"Producto N°1"}  />
    </div>
    </ThemeProvider>
  );
}

export default App;
