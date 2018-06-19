import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Survey = () => {
  return (
    <div>
      <SurveyList />
      <div className='fixed-action-btn'>
        <Link to='/survey/new' className='btn-floating btin-large red'>
          <i className='material-icons'>add</i>
        </Link>
      </div>
    </div>
  );
};

export default Survey;
