import { useState } from 'react';

const AddName = () => {
  const [name, setName] = useState('');

  return (
    <>
      <input type="text" value={name} onChange={(e) => setName('')} />
    </>
  );
};

export default AddName;
