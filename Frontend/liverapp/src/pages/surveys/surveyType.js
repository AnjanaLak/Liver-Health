import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import Json from './question';

const Mysurvey = () => {

    return (
        <Survey.Survey json={Json} />
    )
} 

export default Mysurvey;