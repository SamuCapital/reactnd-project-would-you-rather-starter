import React from 'react';
import { connect } from 'react-redux';

import Question from '../Question';

const Home = ({ questions }) => {
  return (
    <div>
      {questions.map((question) => (
        <Question props={question} />
      ))}
    </div>
  );
};

export default connect()(Home);
