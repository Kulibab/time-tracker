import React, { useState } from 'react';
import './AddTrack.css';

const AddTrack = () => {
  const [track, setTrack] = useState('');

  return (
    <div className='addTrackWrap'>
      <input value={track} onChange={({ target }) => setTrack(target.value)} />
      <span className="material-icons play_icon">
      play_circle_filled
      </span>
    </div>
  )
}

export default AddTrack;
