import * as React from 'react';
import { Typography, Button, ButtonBase, MuiThemeProvider, Card } from '@material-ui/core';
import './MainPage.css';
import { PlayerVO } from '../vo/UserVO';
import { mainTheme } from '../themes/mainTheme';
import { sortPlayersByPPG } from '../helpers/sortPlayersByPPG';
import { sortPlayersByTP } from '../helpers/sortPlayersByTP';
import { AnyAction } from 'redux';
import { MatchVO } from '../vo/MatchVO';

interface IMainPageProps {
  // Items
  backgroundURL: string;
  playerList: PlayerVO[];
  matchList: MatchVO[];

  // Actions
  parseJSON: () => void;
  sortListByTP: any;
  sortListByPPG: any;
  getMatchListByPPG: any;
  getMatchListByTP: any;
}

interface IMainPageState {
}

type Props = IMainPageProps;

class MainPage extends React.Component<Props, IMainPageState> {
    state = {
      sortedList: [],
    };

    public render() {
      return (
        <MuiThemeProvider theme={mainTheme}>
          <div className={'page'}>
            <img src={this.props.backgroundURL} className={'background'}/>
            <Card className={'card'} style={{backgroundColor: `${mainTheme.palette.primary}`}}>
              {this.props.playerList !== undefined && this.props.playerList !== [] && this.props.playerList.length > 0 ?
                <div>
                  {this.props.playerList.map((player: PlayerVO) => {
                    return (
                      <Typography className={'userText'} color="primary" key={player.getName()}>
                        {`Name: ${player.getName()} || TotalPoints: ${player.getTotalPoints()} 
                        || TotalGames: ${player.getTotalGames()} || PointsPerGame: ${player.getPointsPerGame()}`}
                      </Typography>
                    );
                  })}
                  <div>
                  <Button className={'sortButton'} onClick={() => this.props.sortListByPPG(this.props.playerList)} variant="contained">Sort By Points Per Game</Button>
                  <Button onClick={() => this.props.sortListByTP(this.props.playerList)} variant="contained">Sort By Total Points</Button>
                  <Button onClick={this.props.parseJSON} variant="contained">Sort by id</Button>
                  </div>
                  <Button onClick={() => this.props.getMatchListByPPG(this.props.playerList)} variant="contained">Get Matches Based Off PPG</Button>
                  <Button onClick={() => this.props.getMatchListByTP(this.props.playerList)} variant="contained">Get Matches Based Off TP</Button>
                </div>
              :
                <div>
                  <Button onClick={this.props.parseJSON} color="primary">Click Me To Show The PlayerList!</Button>
                </div>
              }
            </Card>

            {this.props.matchList !== undefined && this.props.matchList !== [] && this.props.matchList.length > 0 &&
              <div>
                <div className={'verticalSpacer'}/>
                <Card className={'card'}>
                  <Typography variant="display1" color="inherit">{'|| MATCHES ||'}</Typography>
                  {this.props.matchList.map((match: MatchVO, matchNo: number) => {
                      return (
                        <Typography className={'userText'} color="primary" key={match.getId()}>{`Match ${matchNo + 1}: ${match.getHomePlayer().getName()} VS ${match.getAwayPlayer().getName()}`}</Typography>
                      );
                  })}
                </Card>
              </div>
            }
          </div>
        </MuiThemeProvider>
      );
  }
}

export default (MainPage);