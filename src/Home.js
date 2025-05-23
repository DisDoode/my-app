import hacking_building from "./Images/hacking_building.jpg"
import { Grid } from "@mui/material";

function Home() {

    return (
        <div>
        
              <h1 className="strokeme"  >
                    Fana Sparebank
                </h1>
                 <Grid container spacing={2}>

                <Grid size={5}>
       <img src={hacking_building} alt="Fana Sparebank"   width="100%"   ></img>
                </Grid>
                <Grid size={7}>
                    
                    <p>Jeg jobbet hos fana sparebank, på hovedkvarteret i Nestun.
                         Jeg jobbet fra kl 09:00 til 15:00 som var kortere en de fleste andre ansatte.
                         Jeg kunne ikke egentlig hjelpe til med det de holdt på med så jeg fikk i oppgave å lage dette nettstedet.
                         Jeg fikk mye hjelp med å lage nettstedet, og jeg lærte masse nytt.</p>
                         <p>Personelig så synes jeg at denne jobben så bra ut, og ja jeg mener at dette er et sted jeg kunne ha tenkt å jobbe. </p>
                </Grid>
                </Grid>


        </div>

    )
}

export default Home;