import React, {useContext} from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import Json from './question';

const Mysurvey = (prop) => {

    // const {state:{surveys:{data}}} = useContext(Context);
    // console.log(data)

    return (
        <Survey.Survey 
        showCompletedPage={false}
        onComplete = {data => prop.showCompletedPage(data.valuesHash)}
        json={Json} />
    )
} 

export default Mysurvey;