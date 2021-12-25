import { Grid } from '@mui/material';
import React,{useState, useEffect} from 'react';
import Information from '../Information/Information';
import './First_Page.css';

const First_page = () => {
   const [information, setInformation] = useState([])
     useEffect(() => {
         fetch('http://localhost:2000/information')
         .then(res => res.json())
         .then(data =>{
            const citrus = data.slice(1, 5);
            
                setInformation(citrus);
            
         })
     }, [])
    return (
        <div>
            <Grid container spacing={2}>
            <Grid item xs={7}>
            <div style={{marginTop: '50px', marginLeft: '1px'}}>
              <h1 style={{fontSize: '25px', marginLeft: '80px'}}>I WENT MY SITE TO BE BUILT ON (CHOOSE FRAMEWORK)</h1>
            {
                information.map(info => <Information
                key={info._id}
                info = {info}
                ></Information> )
            }
           </div>
           </Grid>
          {/* <Grid item xs={1}>
          <hr />
          </Grid> */}
          <hr />
        <Grid item xs={4}>
        <div>
            <h1>Estimate Price</h1>
            <p>Sorry for that I have faced some network problem </p>
            <p>That's why I can't complete this showing task otherwise I can do it </p>
           </div>
        </Grid>
            </Grid>   
        </div>
    );
};

export default First_page;