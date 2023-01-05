import './App.css';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  createTheme,
  IconButton,
  ThemeProvider,
  Typography
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from "@mui/icons-material/Telegram";
import {Twitter} from "@mui/icons-material";
import InfoIcon from '@mui/icons-material/Info';
import {Helmet} from "react-helmet";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    
      <Helmet>
        <meta charSet={"utf-8"}/>
        <title>NekøRect</title>
        <link rel={"icon"} type={"image/png"} href={"https://blog.nekorect.eu.org/images/logo_round.png"}></link>
      </Helmet>
    
      <Container maxWidth={"lg"}>
        <Box className={"App"}>
        
          <Card className={"Main"}>
            <CardMedia
              sx={{height: 250}}
              image="../static/images/info_bg.png"
            />
          
            <CardContent>
              <div className={"NameDisplay"}>
                <Typography variant={"h3"}>
                  NekoRectifier
                </Typography>
                <Typography color="text.secondary">
                  a.k.a. NekoRect
                </Typography>
              </div>
            
              {/*  add a split line*/}
              <hr></hr>
              <Typography>
                A 21 yo. Undergraduate who is passionate about coding and open sourcing.
              </Typography>
          
            </CardContent>
          
            <div className={"ShortActions"}>
              <Button href={"https://blog.nekorect.eu.org/"}>Blog</Button>
              <Button href={"https://tool.nekorect.eu.org/"}>Toolbox</Button>
            </div>
          
            <CardActions sx={{justifyContent: 'flex-end'}}>
              <IconButton color={"inherit"} href={"https://nekorect.eu.org/about"}><InfoIcon/></IconButton>
              <IconButton color={'inherit'} href={"https://github.com/NekoRectifier"}><GitHubIcon/></IconButton>
              <IconButton color={'inherit'} href={"https://t.me/NekoRectifier"}><TelegramIcon/></IconButton>
              <IconButton color={"inherit"} href={"https://twitter.com/NekoKjswg5Q"}><Twitter/></IconButton>
            </CardActions>
        
          </Card>
        </Box>
      </Container>
  
    </ThemeProvider>
  );
}

export default App;
