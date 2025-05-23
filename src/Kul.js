import my_hacking_place from "./Images/my_hacking_place.jpg"
import me_is_hacking from "./Images/me_is_hacking.jpg"
import { Grid, Stack} from "@mui/material";
function Kul() {
    return (
        <div>

            <h1>Arbeidsuke</h1>
            <Grid container spacing={0}>

                <Grid size={6}>
                    <Stack>
                    <img src={my_hacking_place} alt="Where i was doing all of the coding" width="100%"></img>
                    <p></p>
                    <img src={me_is_hacking} alt="Some code" width="100%"></img>
                    </Stack>
                </Grid>

                <Grid size={6}>
                    <h2>Mandag</h2>
                    <p>I dag så ble introdusert til it avdelingen som er de jeg skulle være med.
                        Jeg fikk vite at de holdt på å lage fana sparebank appen på nytt, slik at den ser bedre ut.
                        Jeg fikk en egen pult med pc, og jeg ble vist litt hvordan man kodet.
                        Dette nettstedet er hva jeg har fått i oppgave å lage siden jeg ikke kan hjelpe med det de holder på med.
                        Jeg lærte masse om hvordan java funker, og litt basic hvordan man bruker react.
                    </p>
                    <h2>Tirsdag</h2>
                    <p>
                        I dag så var det noen problemer med PCen min og visual code ville ikke åpne.
                        Visual kode er det programme jeg har kodet alt i.
                        Vi brukte nesten halve dagen på å få det til å funke.
                        Jeg lærte at hvordan jeg kan bruke visual studios hjemme og hvilke tools som jeg også burde bruke.
                    </p>
                    <h2>Onsdag</h2>
                    <p>I dag så fikk jeg masse hjelp med å lage nettstedet slik at det så bra ut.
                        Jeg lærte mange nye funskjoner innen programering.
                        Det var i dag jeg lagde det clicker spillet som er her på nettstedet.
                        Urelatert til det jeg gjorde så var det en rotte i kjelleren.

                    </p>
                    <h2>Torsdag</h2>
                    <p>I dagg så lærte jeg masse om hvordan man importer ting fra nettsider og in på ditt eget nettsted.
                        Jeg lagde både ordbok og "CAT" sidene i dag.
                        I tilleg så addet jeg noen ting til spillet.
                    </p>

                    <h2>Fredag</h2>
                    <p>
                        I dag så var han fyren jeg skulle være med vekke så jeg var med noen andre, men de gikk kl 12.
                        Jeg fikk mye hjelp før hun måtte gå, og når hun var gått så kodet jeg litt fro meg selv og fikset opp i ting.
                        Jeg mener at dette er en jobb jeg kunne tenke meg å ha i framtiden.
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default Kul;