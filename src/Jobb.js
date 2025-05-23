import { Paper, Grid } from "@mui/material";
function Jobb() {

    return (

    
            <Grid container spacing={2}>

                <Grid size={7}>

                    <h1>Fana Sparebank</h1>
                    <p>Jeg jobbet for Fana Sparebank.
                        IT utvikling innen fana sparebank jobber med nettstedet til fana sparebank, og en del systemer som gjør det lettere for ansatte å gjøre sine arbeidsoppgaver.
                    </p>
                    <h1>Hvilke utdanning må man ha?</h1>
                    <p>Den utdanningen man må ha for å jobbe på denne arbeidsplassen kommer litt an på hva man skal jobbe med, men hvis man skal jobbe med det jeg gjorde så må man ha informasjonsteknologi, eller noe innen koding.</p>
                    <h1>Lønn</h1>
                    <p>Lønnen er varierene etter hva man jobber med, mens snittet på utvikler lønnen i Norge var ca 800 000 kr i året.</p>
                </Grid>

                <Grid size={5}>
                    <Paper className="paperLogg" elevation={10}  >
                        <h1 >Yrke</h1>
                        <p >De yrkesgruppene som finnes her er blant annet:</p>
<ul>
                        <li> Administrerende direktør</li>
                        <li>Direktører</li>
                        <li>Advokater og juridiske rådgivere</li>
                        <li>  Chief Compliance Officer</li>
                        <li>   Chief Risk Officer</li>
                        <li>   Finansdirektør</li>
                        <li>   Økonomer og økonomikonsulenter</li>
                        <li>   Økonomisjef</li>
                        <li>   Kundekonsulenter</li>
                        <li>  Eiendomsmeglere og advokater</li>
                        <li>  Daglig leder for eiendomsavdelingen</li>
                        <li>  Innholdsutviklere for digitale kanaler</li>
                        <li>    Markedssjefer</li>
                        <li>   Direktør for organisasjonsutvikling</li>
                        <li>       Direktør for innovasjon og teknologi</li>
                        <li>        IT-spesialister</li>
                        <li>Eiendomsmeglere</li>
                        <li>Testere</li>
</ul>
                    </Paper>
                </Grid>
            </Grid>
    )
}
export default Jobb;