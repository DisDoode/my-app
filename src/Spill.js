import { Button, Box, Typography } from "@mui/material";
import { useState } from "react";



function Spill() {

    const [price, setPrice] = useState(10)

    const [people, setPeople] = useState(0)

    const [people2, setPeople2] = useState(0)

    const [price2, setPrice2] = useState(75)

    const [people3, setPeople3] = useState(0)

    const [price3, setPrice3] = useState(500)

    const [bedreblo, setBedreblo] = useState(0)

    const [price4, setPrice4] = useState(25)



    const click2 = () => {



        if (amount - price < 0) {
        } else {
            if (people > 0) {
                let temp = price + Math.round(price / 2)
                setPrice(temp)
                setAmount(amount - price)
                console.log(temp)
            }
            else {
                setAmount(amount - price)
            }

            setPeople(people + 1)
            click(1)
        }




    }



    const click3 = () => {

        if (amount - price2 < 0) {
        } else {
            if (people2 > 0) {
                let temp = price2 + Math.round(price2 / 2)
                setPrice2(temp)
                setAmount(amount - price2)
                console.log(temp)
            }
            else {
                setAmount(amount - price2)
            }

            setPeople2(people2 + 1)
            click(10)
        }
    }


    const click4 = () => {

        if (amount - price3 < 0) {
        } else {
            if (people3 > 0) {
                let temp = price3 + Math.round(price3 / 2)
                setPrice3(temp)
                setAmount(amount - price3)
                console.log(temp)
            }
            else {
                setAmount(amount - price3)
            }

            setPeople3(people3 + 1)
            click(50)
        }
    }


    const click5 = () => {
        if (amount - price4 < 0) {
        } else {
            if (bedreblo > 0) {
                let temp = price4 + Math.round(price4 / 2)
                setPrice4(temp)
                setAmount(amount - price4)
                console.log(temp)
            }
            else {
                setAmount(amount - price4)
            }

            setBedreblo(bedreblo + 1)
        }
    }


    const [amount, setAmount] = useState(0)

    const click = (value) => {
        const intervalId = setInterval(() => {
            setAmount(prevAmount => prevAmount + value);
        }, 1000);

        return () => clearInterval(intervalId);
    }




    return (
        <div>

            <Box sx={{ mt: "2rem" }}>
                <Typography> Pris: {price}kr</Typography>
                <Button variant="contained" onClick={() => click2()}>Under betalte arbeidere (+1kr Per sekund)</Button>
                <Typography>{people}</Typography>
            </Box>



            <Box sx={{ mt: "5rem" }} >
                <Typography> Pris:{price2}kr</Typography>
                <Button variant="contained" onClick={() => click3()}>Normale arbeidere (+10kr Per sekund)</Button>
                <Typography>  {people2}</Typography>
            </Box>

            <Box sx={{ mt: "5rem" }} >
                <Typography> Pris:{price3}kr</Typography>
                <Button variant="contained" onClick={() => click4()}>Overbetalte arbeidere(+50kr Per sekund)</Button>
                <Typography>  {people3}</Typography>
            </Box>

            <Box sx={{ mt: "5rem" }} >
                <Typography> Pris:{price4}kr</Typography>
                <Button variant="contained" onClick={() => click5()}>Bedre blo(+1 per klikk)</Button>
                <Typography>  {bedreblo}</Typography>
            </Box>





            <Box sx={{ mt: "10rem" }}>

                <Button variant="contained" onClick={() => setAmount(amount + 1 + bedreblo)}>doner blod for penger</Button>
                <Typography>   {amount}kr</Typography>

            </Box>


        </div>
    )
}

export default Spill;