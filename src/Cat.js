import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Box } from '@mui/material';


function Cat() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

      useEffect(() => {
  const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://api.thecatapi.com/v1/images/search');
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
      }, []);

console.log(data)

    return (
        <div>

  <div>
    {loading && <div>Loading</div>}
    {!loading && (
      <div>

       <Box  > <img src={data[0].url}  alt='Cat' sx={{  transition: "1s", "&:hover": {  rotate: "360deg" } }}></img> </Box>
      </div>
    )}
    </div>

        </div>
    )
         }
export default Cat;

   