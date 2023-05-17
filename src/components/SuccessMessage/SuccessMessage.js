import React, { useState, useCallback } from "react";
import { toast } from 'react-toastify';

import "./SuccessPage.css";
import 'react-toastify/dist/ReactToastify.css';

const SuccessMessage = (props) => {
  let notify;

  const ifPlayListSaved = () => {
    if (props.onSave) {
      notify = () => toast("Success! Playlist have been saved to your Spotify Account. Enjoy the tunes!");
    }
  };

  return (
    <div isSaved={ifPlayListSaved}>
      <ToastContainer />
    </div>
  );
}

export default SuccessMessage;
