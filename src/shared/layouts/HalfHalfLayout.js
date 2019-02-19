import React from 'react';

const HalfHalfLayout = (({children}) => {

  const brandPictureUrl = "https://i.stack.imgur.com/RnXFq.jpg";
  return (
    <div className="row w-100" >
      {/* Default left portion with brand */}
      < div className="col-6" >
        <img className="img-fluid vh-100" src={brandPictureUrl} alt="brand" />
      </div>

      {/* Passed child component */}
      < div className="col-6" >
        {children}
      </div >
    </div >
  )
});

export default HalfHalfLayout;