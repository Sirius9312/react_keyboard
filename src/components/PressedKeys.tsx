import React from 'react';

type State = {
  key: string,
};

export class PressedKeys extends React.Component<{}, State> {
  state: State = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  }

  render() {
    return (
      <div className="box">
        {
          this.state.key ? (
            <p className="App__message">
              The last pressed key is [
              {this.state.key}
              ]
            </p>
          ) : (
            <p className="App__message">
              Nothing was pressed yet
            </p>
          )
        }
      </div>
    );
  }
}