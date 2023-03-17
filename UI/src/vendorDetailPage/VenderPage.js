import React, { useState } from 'react'
import Header from './Header'
import VendorSideBar from './VendorSideBar';

function VenderPage() {
  const [toggle, setToggle] = useState(false);
  const toggleButton = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div>
      <Header toggle={toggle} />
      <VendorSideBar onToggle={toggleButton} toggle={toggle} />
    </div>
  )
}

export default VenderPage