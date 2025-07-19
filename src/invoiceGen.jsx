import React from 'react'
import RndWrapper from './components/Rnd-wrapper/Rnd-wrapper';
import CustomInput from './components/CustomInput'

const InvoiceGen = () => {
  return (
    <div>
      <div>invoiceGen</div>
      <RndWrapper children={<CustomInput />}/>
    </div>
  )
}

export default InvoiceGen;
