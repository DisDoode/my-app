import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Kul from './Kul';
import Cat from './Cat';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import Grid from '@mui/material/Grid';
import Jobb from './Jobb';
import WorkIcon from '@mui/icons-material/Work';
import CrueltyFreeIcon from '@mui/icons-material/CrueltyFree';
import Spill from './Spill';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PetsIcon from '@mui/icons-material/Pets';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Ordbok from './Ordbok';



import { Box } from '@mui/material';




function App() {

    return (
        <div className="App">

            <Grid container spacing={0}>
                <Grid size={1.9}>
                    <Box className ="BoxClass" >
                        <Grid container spacing={2}>
                            <Grid size={1}>
                                <CrueltyFreeIcon sx={{ color: "white", fontSize: "100px", transition: "5s", "&:hover": { width: "2000px", height: "1000px", color: "red", rotate: "360deg" } }} ></CrueltyFreeIcon>

                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid size={10.1}>
                    <Box  className ="BoxClass">
                    </Box>
                </Grid>
            </Grid>

            <BrowserRouter>

                <Grid container spacing={2}>
                    <Grid size={2}>
                        <Stack>
                            <Button sx={{ border: "1px solid white", padding: "20px 40px", borderRadius: "10px", backgroundColor: '#00004d', color: "white", transition: "0.3s", "&:hover": { padding: "25px 45px", backgroundColor: "blue", rotate: "5deg" } }} href="/" variant="text">Start <HomeIcon sx={{transition: "0,3s"}}className="iconsButton"></HomeIcon></Button>
                            <Button sx={{ border: "1px solid white", padding: "20px 40px", borderRadius: "10px", backgroundColor: '#00004d', color: "white", transition: "0.3s", "&:hover": { padding: "25px 45px", backgroundColor: "blue", rotate: "5deg" } }} href="/Kul" variant="text">Logg <ArticleIcon sx={{ color: "white", fontSize: "30px", transition: "1s", "&:hover": { width: "60px", height: "60px", rotate: "30deg" } }}></ArticleIcon></Button>
                            <Button sx={{ border: "1px solid white", padding: "20px 40px", borderRadius: "10px", backgroundColor: '#00004d', color: "white", transition: "0.3s", "&:hover": { padding: "25px 45px", backgroundColor: "blue", rotate: "5deg" } }} href="/Jobb" variant="text">Om Jobb <WorkIcon sx={{ color: "white", fontSize: "30px", transition: "1s", "&:hover": { width: "60px", height: "60px", rotate: "30deg" } }}></WorkIcon></Button>
                            <Button sx={{ border: "1px solid white", padding: "20px 40px", borderRadius: "10px", backgroundColor: '#00004d', color: "white", transition: "0.3s", "&:hover": { padding: "25px 45px", backgroundColor: "blue", rotate: "5deg" } }} href="/Spill" variant="text" >Spill <SportsEsportsIcon sx={{ color: "white", fontSize: "30px", transition: "1s", "&:hover": { width: "60px", height: "60px", rotate: "30deg" } }}></SportsEsportsIcon></Button>
                            <Button sx={{ border: "1px solid white", padding: "20px 40px", borderRadius: "10px", backgroundColor: '#00004d', color: "white", transition: "0.3s", "&:hover": { padding: "25px 45px", backgroundColor: "blue", rotate: "5deg" } }} href="/Cat" variant="text" >Cat <PetsIcon sx={{ color: "white", fontSize: "30px", transition: "1s", "&:hover": { width: "60px", height: "60px", rotate: "30deg" } }}></PetsIcon></Button>
                            <Button sx={{ border: "1px solid white", padding: "20px 40px", borderRadius: "10px", backgroundColor: '#00004d', color: "white", transition: "0.3s", "&:hover": { padding: "25px 45px", backgroundColor: "blue", rotate: "5deg" } }} href="/Ordbok" variant="text" >Ordbok <MenuBookIcon sx={{ color: "white", fontSize: "30px", transition: "1s", "&:hover": { width: "60px", height: "60px", rotate: "30deg" } }}></MenuBookIcon></Button>
                            <Box sx={{ border: "1px solid white", paddingLeft: "40px", height: "67vh", borderRadius: "10px", backgroundColor: '#00004d', color: "white", }}         ></Box>
                        </Stack>
                    </Grid>
                    <Grid size={10}>
                        <Routes>
                            <Route >
                                <Route index element={<Home />} />
                                <Route path="/Kul" element={<Kul />} />
                                <Route path="/Jobb" element={<Jobb />} />
                                <Route path="/Spill" element={<Spill />} />
                                <Route path="/Cat" element={<Cat />} />
                                <Route path="/Ordbok" element={<Ordbok />} />

                            </Route>
                        </Routes>
                    </Grid>
                </Grid>

                <Box className="BoxUnder">

                    <Grid container spacing={2}>
                        <Grid size={5}>
                            <p className="strokemeSmall" style={{ fontSize: '30px' }}>Kodet av:</p>
                         <Box className="item" >    <p className="strokemeTiny">Garm</p></Box>
                        </Grid>
                        <Grid size={2}>

                            <p className="strokemeSmall" >Kontakt</p>
                            <Box className="item"><p className="strokemeTiny">Nei takk</p></Box>
                        </Grid>

                        <Grid size={4}>

                            <p className="strokemeSmall" >Følg meg</p>
                          <Box className="item">   <a className="strokemeTiny" href="https://scratch.mit.edu/users/dis_doode/" >Scratch</a></Box>
                        </Grid>
                    </Grid>
                </Box>

            </BrowserRouter>

        </div>
    );
}

export default App;
