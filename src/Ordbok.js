import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';



function Ordbok() {

 const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  const [search, setSearch]= useState(["Cat"])
const handleChange=(e)=> {
setSearch(e.target.value)
}
const [dosearch, setDosearch]=useState([])

      useEffect(() => {
  const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/'+dosearch);
        setData(response[0].meanings[0].definitions);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();

      }, [dosearch]);



    return (
        <div>

      <TextField id="filled-basic" label="Searh field" variant="filled" onChange={handleChange} />

<Button variant="contained" onClick={()=>setDosearch(search)}>Search</Button>

  <ul>
            {data.map((item) => (
                <li key={item.id}>{item.definition}</li>
            ))}
        </ul>

        </div>

            )
}

export default Ordbok;