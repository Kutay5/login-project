import { Container, Grid, Hidden } from "@mui/material";
import LoginForm from "./components/LoginForm";
import { LoginManagerProvider } from "./context/LoginManager";

const HomePage = async () => {
    const loginRequest = await fetch('https://mocki.io/v1/427c2078-af6b-4d73-99a5-bd46134a30cd').then((response) => response.json())

    const title = loginRequest.data.title;



    return <>
        <Container sx={{
            height: "100vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <LoginManagerProvider>
                <Grid container sx={{
                    height: '80vh'
                }}>
                    <Grid item xs={12} md={6} sx={{
                        padding: '68px 12px 68px 68px'
                    }}>
                        <LoginForm title={title} />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={12} md={6} sx={{
                            background: '#E5E5E569'
                        }}>

                        </Grid>
                    </Hidden>
                </Grid>
            </LoginManagerProvider>

        </Container>
    </>

}

export default HomePage;