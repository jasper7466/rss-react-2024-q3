import { Component } from 'react';

type Props = Record<string, never>;

type State = {
  isError: boolean;
};

export class ErrorThrower extends Component<Props, State> {
  state: State = {
    isError: false,
  };

  handleButtonClick = () => {
    this.setState({ isError: true });
  };

  render() {
    if (this.state.isError) {
      throw new Error('Error thrower: demo error');
    }
    return <button onClick={this.handleButtonClick}>Throw error</button>;
  }
}
