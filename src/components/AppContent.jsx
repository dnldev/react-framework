import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Switch, Route } from 'react-router-dom';

import { Button } from '../theme/my-styled-components';
import strings from '../localization/locale';

import Navigation from './Navigation';
import Home from './Home';

class AppContent extends Component {
  state = { currentLanguage: 'en' };

  changeLanguage = () => {
    const { currentLanguage } = this.state;
    const newLanguage = currentLanguage === 'en' ? 'de' : 'en';
    strings.setLanguage(newLanguage);
    this.setState({ currentLanguage: newLanguage });
  };

  render() {
    return (
      <div className={css(styles.container)}>
        <Button onClick={this.changeLanguage}>Change Language</Button>
        <Navigation>
          <Switch>
            <Route exact path="/Home" component={Home} />
          </Switch>
        </Navigation>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    display: 'flex',
    flexDirection: 'column',
  },
});

export default AppContent;
