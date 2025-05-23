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
import { Link } from "react-router-dom";


function App() {
    return (
        <div className="App">
            <Grid container spacing={0}>
                <Grid size={1.9}>
                    <Box className="BoxClass" >
                        <Grid container spacing={2}>
                            <Grid size={1}>
                                <CrueltyFreeIcon className='bunny'></CrueltyFreeIcon>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid size={10.1}>
                    <Box className="BoxClass">
                    </Box>
                </Grid>
            </Grid>
            <BrowserRouter basename="/my-app">
                <Grid container spacing={2}>
                    <Grid size={2}>
                        <Stack>
                            <Button className="menuButton" component={Link} to="/" variant="text">Start <HomeIcon className="menuIcon" /></Button>
                            <Button className="menuButton" component={Link} to="/Kul" variant="text">Logg <ArticleIcon className="menuIcon" /></Button>
                            <Button className="menuButton" component={Link} to="/Jobb" variant="text">Om Jobb <WorkIcon className="menuIcon" /></Button>
                            <Button className="menuButton" component={Link} to="/Spill" variant="text">Spill <SportsEsportsIcon className="menuIcon" /></Button>
                            <Button className="menuButton" component={Link} to="/Cat" variant="text">Cat <PetsIcon className="menuIcon" /></Button>
                            <Button className="menuButton" component={Link} to="/Ordbok" variant="text">Ordbok <MenuBookIcon className="menuIcon" /></Button>
                            <Box sx={{ border: "1px solid white", paddingLeft: "40px", height: "95vh", borderRadius: "10px", backgroundColor: '#00004d', color: "white", }}></Box>
                        </Stack>
                    </Grid>
                    <Grid size={10}>
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path="/Kul" element={<Kul />} />
                            <Route path="/Jobb" element={<Jobb />} />
                            <Route path="/Spill" element={<Spill />} />
                            <Route path="/Cat" element={<Cat />} />
                            <Route path="/Ordbok" element={<Ordbok />} />
                        </Routes>
                    </Grid>
                </Grid>
                <Box className="BoxUnder">
                    <Grid container spacing={2}>
                        <Grid size={5}>
                            <p className="strokemeSmall" style={{ fontSize: '30px' }}>Kodet av:</p>
                            <Box className="item"><p className="strokemeTiny">Garm</p></Box>
                        </Grid>
                        <Grid size={2}>
                            <p className="strokemeSmall">Kontakt</p>
                            <Box className="item"><p className="strokemeTiny">Nei takk</p></Box>
                        </Grid>
                        <Grid size={4}>
                            <p className="strokemeSmall">Følg meg</p>
                            <Box className="item"><a className="strokemeTiny" href="https://scratch.mit.edu/users/dis_doode/">dis_doode på scratch</a></Box>
                        </Grid>
                    </Grid>
                </Box>
            </BrowserRouter>
        </div>
    );
}

export default App;