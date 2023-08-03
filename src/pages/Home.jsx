import './Home.css';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, IconButton, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from "@mui/icons-material/Telegram";
import { Twitter } from "@mui/icons-material";
import InfoIcon from '@mui/icons-material/Info';
import { Helmet } from "react-helmet";

function Home() {
  return (
    <Container maxWidth={"lg"}>
      {/* "lg" is 25px padding*/}

      <Helmet>
        <title>NekøRect</title>
      </Helmet>

      <Box className={"App"}>

        <Card sx={{ maxHeight: '90vh' }}>
          <CardMedia
            sx={{ height: 300 }}
            image="../static/images/info_bg.webp"
          />

          <CardContent>
            <Typography variant={"h3"}>
              NekoRectifier
            </Typography>
            <Typography color="text.secondary">
              a.k.a. NekøRect
            </Typography>

            <hr></hr>
            <Typography>
              A {Get_Curr_Age()} yo. Undergraduate who is passionate about coding and open sourcing.
            </Typography>
          </CardContent>

          <div className={"ShortActions"}>
            <Button href={"https://blog.nekorect.eu.org/"}>Blog</Button>
            <Button href={"https://tool.nekorect.eu.org/"}>Toolbox</Button>
          </div>

          <CardActions sx={{ justifyContent: 'flex-end', flexWrap: 'wrap' }}>
            <IconButton color={"inherit"} href={"/about"}><InfoIcon /></IconButton>
            <IconButton color={'inherit'} href={"https://github.com/NekoRectifier"}><GitHubIcon /></IconButton>
            <IconButton color={'inherit'} href={"https://t.me/NekoRectifier"}><TelegramIcon /></IconButton>
            <IconButton color={"inherit"} href={"https://twitter.com/NekoKjswg5Q"}><Twitter /></IconButton>
          </CardActions>

        </Card>
      </Box>
    </Container>

  );
}

function Get_Curr_Age() {
  const date = new Date();
  return (date.getFullYear() - 2002);
}

export default Home;
