import { Box, Card, CardContent, Container, Typography } from "@mui/material";

function About() {
  return (
    <Container maxWidth={"lg"}>
      <Box className={"App"}>
        <Card sx={{ maxHeight: '90vh' }}>
          <CardContent>

            <Typography variant={"h3"}>
              About
            </Typography>

            <Typography color={"text.secondary"}>
              Hi, this is NekoRectifier.
            </Typography>

            <br />
            <Typography variant={"h5"}>
              Background
            </Typography>

            <Typography color={"text.secondary"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </Typography>

            <br />
            <Typography variant={"h5"}>
              Outlook
            </Typography>

            <Typography color={"text.secondary"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </Typography>

          </CardContent>
        </Card>
      </Box>
    </Container>
  )
}

export default About;