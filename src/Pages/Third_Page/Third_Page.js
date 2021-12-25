import { Button, Grid, LinearProgress, linearProgressClasses } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import './Third_Page.css';
import { ProgressBar } from 'react-bootstrap';

const Third_Page = () => {
    const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
    return (
        <div>
            <Grid container spacing={2}>
            <Grid item xs={7}>
            <div style={{marginTop: '50px', marginLeft: '1px'}}>
          <div style={{marginBottom: '50px'}}>
          <h2 style={{marginLeft: '80px'}}>DO YOU HAVE UX DESIGN READY?</h2>
           <div style={{marginLeft: '180px'}}>
           <Button variant="outlined">Yes</Button>
           <Button style={{marginLeft: '20px'}} variant="outlined">No</Button>
           </div>
          </div>
           <div style={{marginLeft: '80px'}}>
               <div style={{marginBottom: '50px'}}>
               <h2>HOW MANY WEBPAGES DO YOU WANT FOR YOUR PUBLIC WEBSITE</h2>
               <p>2 Pages</p>
               <ProgressBar style={{width: '50%'}} now={20} />
               </div>
        <div>
            <h2>ANY PAYMENT GATEWAY INTEGRATION</h2>
            <div style={{marginLeft: '80px'}}>
           <Button variant="outlined">Stripe</Button>
           <Button variant="outlined">Paypal</Button>
           <Button variant="outlined">Both</Button>
           <Button variant="outlined">None</Button>
           </div>
        </div>
           </div>
        </div>  
            </Grid>
            <hr />
            <Grid item xs={4}>
            <div>
        <div className="est">
        <h2>Est. Cost</h2>
         <h2>$3,000 - $3,500</h2>
         <p>This cost will include 2 rounds of corrections at UI design stage and once the design is
             finalized, we will proceed to development project will be divided into 2-3 milestone payments
         </p>
        </div>
         <Button style={{marginTop: '200px'}} variant="contained">START YOUR PROJECT NOW</Button>
        </div>
            </Grid>
            </Grid>
     </div>
    );
};

export default Third_Page;