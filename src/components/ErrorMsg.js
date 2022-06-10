import React from 'react';

const ErrorMsg = () => {

  const refreshbtn = () => {
    window.location.reload();
  }

  document.title = "Find Weather - Try Again";

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto my-3">
          <div className="h-100 p-5 text-white bg-dark rounded-3 mx-auto border border-primary">
            <p className='ml-auto mr-4 mt-2 mb-0 fs-3'>Invalid/Wrong input, please try again</p>
            <button className="btn btn-outline-primary btn-lg my-2" type="button" onClick={refreshbtn}>Try Again</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorMsg;