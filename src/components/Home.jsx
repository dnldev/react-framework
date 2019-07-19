import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { withTheme } from 'styled-components';
// import PropTypes from 'prop-types';

import { Title } from '../theme/my-styled-components';

import strings from '../localization/locale';

function Home(props) {
  const { theme } = props;
  const { palette } = theme;

  return (
    <div className={css(styles.container)}>
      <Title>{`8 = ${strings.numbers.eight}`}</Title>
      {JSON.stringify(palette)}
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '',
  },
});

// Name.propTypes = {
//   name: PropTypes.string,
// };

// Name.defaultProps = {
//   name: '<Name>',
// };

export default withTheme(Home);
// export default Home;
