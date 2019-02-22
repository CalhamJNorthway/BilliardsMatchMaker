import * as React from 'react';
import { Typography, Button } from '@material-ui/core';
import './MainPage.css';

interface IMainPageProps {
  parseJSON: () => void;
}

interface IMainPageState {
}

type Props = IMainPageProps;

class MainPage extends React.Component<Props, IMainPageState> {
    state = {
      name: '',
    };

    handleChangeName = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    }

    public render() {
      return (
        <div className={'page'}>
           <Typography>{`You're a dirty slut`}</Typography>
           <Button onClick={this.props.parseJSON}>{'Parse JSON'}</Button>
        </div>
      );
  }
}

export default (MainPage);