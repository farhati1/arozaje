// userState.js

import { useState } from 'react';

const useUserState = () => {
  const [pseudo, setPseudo] = useState('');

  return {
    pseudo,
    setPseudo,
  };
};

export default useUserState;
