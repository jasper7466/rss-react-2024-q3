import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import './search-bar.component.css';

type Props = {
  submitHandler: (query: string) => void;
};

export const SearchBar: FC<Props> = ({ submitHandler }) => {
  const [queryState, setQueryState] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQueryState(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    submitHandler(queryState);
  };

  return (
    <div className="search-bar">
      <input
        placeholder="Enter search query..."
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        onClick={event => {
          event.stopPropagation();
        }}></input>

      <button
        onClick={event => {
          handleSubmit();
          event.stopPropagation();
        }}>
        Search
      </button>
    </div>
  );
};
