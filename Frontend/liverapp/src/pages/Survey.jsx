import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Survey from "../pages/surveys/survey";

import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";


const SurveyContainer = styled.div`
  width: 50rem;
  display : flex;
  align-items: center;
  justify-content: center;
  margin : auto;

`;

const SurveyPage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
     <SurveyContainer>
     <Survey/>
     </SurveyContainer>
      <Footer/>
    </div>
  );
};

export default SurveyPage;
