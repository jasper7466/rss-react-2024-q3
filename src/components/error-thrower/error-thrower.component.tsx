import { FC, useState } from 'react';

export const ErrorThrower: FC = () => {
  const [isErrorState, setIsErrorState] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsErrorState(true);
  };

  return isErrorState ? (
    (() => {
      throw new Error('Error thrower: demo error');
    })()
  ) : (
    <button onClick={handleButtonClick}>Throw error</button>
  );
};
