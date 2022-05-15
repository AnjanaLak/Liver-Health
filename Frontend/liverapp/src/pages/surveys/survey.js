import React, { useState, useCallback } from 'react';
import { predictFattyLiver } from '../../api/surveyAPI';
import Mysurvey from './surveyType';
// import PredMessage from '../../components/PredMessage'

import { Result, Button } from 'antd';
import { SmileTwoTone, FrownTwoTone } from '@ant-design/icons';

import { Link } from 'react-router-dom';

import { Send } from "@material-ui/icons";
import styled from "styled-components";


const Container = styled.div`
  width: 50rem;
  display : flex;
  align-items: center;
  justify-content: center;
  margin-top : 50px;
  margin-bottom : 100px;
  background-color : yellow;
  padding: 50px;

`;


const Survey = () => {


    const [showPage, setShowPage] = useState(true);
    const [showData, setShowData] = useState({});
    const [predictionResult, setPredictionResult] = useState(0);

    // send data to backend and receive the response
    const predictDisease = (obj) => {
        predictFattyLiver(obj)
            .then((res) => {
                console.log(res.data)
                setPredictionResult(Number(res.data.Status));
            }
            )
            .catch((err) => console.log(err));
    };


    const onCompletePage = useCallback((data) => {

        let gender = 0;

        if (data.question1 === 'Male') {
            gender = 2;
        }
        if (data.question1 === 'Female') {
            gender = 1;
        }

        console.log(`The gender is : ${gender}`);

        const obj = {
            "age": data.question0,
            "gender": gender,
            "height": data.question2,
            "weight": data.question3,
            "bmi": data.question4,
            "waist": data.question5,
            "hip": data.question6,
            "sbp": data.question7,
            "dbp": data.question8,
            "dm": data.question9,
            "hypertension": data.question10,
            "cholesterol": data.question11,
            "smoking": data.question12,
            "glucose": data.question13,
            "insulResistance": data.question14
        };

        console.log(data);

        const result = predictDisease(obj);

        console.log(result);

        setShowData(data);
        setShowPage(!showPage);


    }, [showPage, showData])


    const setFinalPage = () => {
        return (
            <>

                <Container>
                    {
                        predictionResult === 0 ?
                            <Result
                                icon={<SmileTwoTone />}
                                title="Great, We have not found any risk of Fatty Liver!"
                                extra={<Link to="/homepage"><Button type="primary">Go to Home Page</Button></Link>}
                        
                            /> :
                            <Result
                                icon={<FrownTwoTone />}
                                title="It seems you have a risk of Fatty Liver!"
                                extra={<Button type="primary">View Suggestions</Button>}
                              
                            />
                    }

                </Container>
            </>
        )
    }

    return (
        <div>
            {showPage ?
                <Mysurvey showCompletedPage={data => onCompletePage(data)} /> :
                setFinalPage()}
        </div>
    )

}

export default Survey;