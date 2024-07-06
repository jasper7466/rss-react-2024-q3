import { ChangeEvent, Component, KeyboardEvent } from 'react';
import './search-bar.component.css';

type Props = {
  submitHandler: (query: string) => void;
};

type State = {
  query: string;
};
export class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { query: '' };
  }

  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ query: event.target.value });
  }

  handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    if (!this.state.query.length) {
      return;
    }

    this.props.submitHandler(this.state.query);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Enter search query..."
          onChange={this.handleInputChange.bind(this)}
          onKeyDown={this.handleKeyPress.bind(this)}></input>
        <button onClick={this.handleSubmit.bind(this)} disabled={!this.state.query.length}>
          Search
        </button>
      </div>
    );
  }
}
