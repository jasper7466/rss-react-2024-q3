import { ChangeEvent, Component, KeyboardEvent } from 'react';
import './search-bar.component.css';

type Props = {
  submitHandler: (query: string) => void;
};

type State = {
  query: string;
};
export class SearchBar extends Component<Props, State> {
  state: State = { query: '' };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  };

  handleSubmit = () => {
    this.props.submitHandler(this.state.query);
  };

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Enter search query..."
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyPress}></input>
        <button onClick={this.handleSubmit}>Search</button>
      </div>
    );
  }
}
