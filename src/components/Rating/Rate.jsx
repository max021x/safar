import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';

async function insertvalue(pid , uservalue) {
  const res = await fetch('/api/review', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: pid, value: uservalue }),
  });

  const data = await res.json();
  console.log(data);
  return data;
}



export default function baseRating(pid){
  const [value, setValue] = React.useState(2);

  const handleSubmit = async () => {
    await insertvalue(pid , value);
  };

  return(
    
  <>
    <Box sx={
      { '& > legend': { mt: 2 }  ,
        bgcolor:'#ffff' ,
        color:'#000' ,
        position :'absolute',
        marginTop:'400px', 
        }}>
      <Rating
        sx={{
          fontSize:'30px'
        }}
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        defaultValue={2}
        />
        {console.log(value)}

        <Box
        sx={{
          position:'absolute'
        }}
        >
          <Button
          onClick={handleSubmit}
          sx={{
            color:'#000',
            background:'#fff',
            fontFamily:'Vazirmatn',
            '&:hover':{
              backgroundColor:'orange',
              color:'#fff'
            },

          }
        }
          >
            شرکت در نظر سنجی
          </Button>
        </Box>
    </Box>
  </>

  )
}

