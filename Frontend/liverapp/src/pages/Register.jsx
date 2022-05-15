import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector} from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { registerUser } from "../api/surveyAPI";
import addUserAction from "../redux/actions/userAction";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://cdn3.poz.com/100707_CH-Sp-20-022.jpg_6bfd7aaf-ec56-43bb-a7a4-4439ea5d2abe_x2.jpeg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLogged, setIsLogged] = useState(false); 
  const [isLoading, setIsLoading] = useState(false); 
 

  const handleRegisterClick = (e) => {
    e.preventDefault();
  //  login(dispatch, { username, password });
  // need to call backend to check data
    if(username !== '' || username !== null || password !== '' || password !== null
        || email !== '' || email != null){
      setIsLoading(true);
      registerUser({username : username,  password : password, email : email})
      .then(res => {
        console.log(res)
        if(res.data.username !== null || res.data.username !== ''){
          dispatch(
            addUserAction({
              username: res.data.username,
              email: res.data.email,
              password: res.data.password,
              isLogged : true
            })
          )
          setIsLogged(true);
          setIsLoading(false);
          history.push("/homepage");
        }
        else{
          setIsLogged(false);
          setIsLoading(false);
          history.push("/");
        }
      })
      .catch(err => {
        console.log(err);

      })
  
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          {/* <Input placeholder="First Name" />
          <Input placeholder="Last Name" /> */}
          <Input placeholder="Username" 
             onChange={(e) => setUsername(e.target.value)}
             required />
          <Input placeholder="Email" 
             onChange={(e) => setEmail(e.target.value)}
             required />
          <Input placeholder="password"
           onChange={(e) => setPassword(e.target.value)}
           required />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b> of <b>LiverApp</b>
          </Agreement>
         
        </Form>
          <Button onClick={(e) => handleRegisterClick(e)}>
            REGISTER
          </Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
