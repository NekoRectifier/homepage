// import logo from './logo.svg';
import './App.css';
import {Card, CardActions, CardContent, IconButton, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from "@mui/icons-material/Telegram";

function App() {
  return (
    <div className="App">
      <Card className={"Main"}>
        <CardContent>
          <div className={"NameDisplay"}>
            <Typography variant={"h3"}>
              NekoRectifier
            </Typography>
            <Typography variant={"body1"}>
              a.k.a. NekoRect
            </Typography>
          </div>
          
          {/*  add a split line*/}
        
        </CardContent>
        
        <CardActions sx={{justifyContent: 'flex-end'}}>
          <IconButton><GitHubIcon></GitHubIcon></IconButton>
          <IconButton><TelegramIcon></TelegramIcon></IconButton>
        </CardActions>
      
      
      </Card>
    </div>
  );
}

export default App;
