import React,{ Fragment } from 'react';
import spinner from './Spinner.gif';

const Spinner = () => {
  return (
    <div>
    <Fragment>
    < img
    src={spinner}
    style={{ width: '150px', margin: 'auto', display:'block'}}
    alt='Loading...'
    /> 
</Fragment>  
</div>
  )
}

export default Spinner;
