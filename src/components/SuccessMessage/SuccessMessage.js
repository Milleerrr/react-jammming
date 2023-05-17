import React, { useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';

import "./SuccessMessage.css";
import 'react-toastify/dist/ReactToastify.css';

const SuccessMessage = ({ isSaved }) => {
  useEffect(() => {
    if (isSaved) {
      toast.success("Success! Playlist has been added 😁");
    }
  }, [isSaved]);

  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default SuccessMessage;
