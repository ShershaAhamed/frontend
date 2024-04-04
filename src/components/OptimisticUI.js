import React, { useState } from 'react';

const OptimisticUI = () => {
  const [text, setText] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    setIsSaving(true);
    setTimeout(() => {
      console.log('Saved to server:', text);
      setIsSaving(false);
      setText('');
    }, 1000);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} placeholder="Enter text" />
      <button onClick={handleSubmit} disabled={!text || isSaving}>Save</button>
      {isSaving && <p>Saving...</p>}
    </div>
  );
};

export default OptimisticUI;
