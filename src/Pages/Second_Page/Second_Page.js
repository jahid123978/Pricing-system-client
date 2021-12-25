import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Information from '../Information/Information';

const Second_Page = () => {
    const [information, setInformation] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:2000/information`)
        .then(res => res.json())
        .then(data => {
            const lastData = data.slice(4, 8);
            setInformation(lastData);
        })
    }, [])
    return (
        <div>
            <Grid container spacing={2}>
            <Grid item xs={7}>
            <div style={{marginTop: '50px', marginLeft: '1px'}}>
              <h1 style={{fontSize: '20px', marginLeft: '80px'}}>I WENT TO BUILD</h1>
            {
                information.map(info => <Information
                info = {info}
                ></Information> )
            }
           </div> 
            </Grid>
            <hr />
            <Grid item xs={4}>
            <div>
            <h1>This is the first page</h1>
           </div>
            </Grid>
            </Grid>
          
        </div>
    );
};

export default Second_Page;