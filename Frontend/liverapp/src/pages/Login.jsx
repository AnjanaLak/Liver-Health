import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector} from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { searchUser } from "../api/surveyAPI";
import addUserAction from "../redux/actions/userAction";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.thestatesman.com/wp-content/uploads/2018/12/Liver.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const LinkPara = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {

  const dispatch = useDispatch();
  const history = useHistory();


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false); 
  const [isLoading, setIsLoading] = useState(false); 
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
  //  login(dispatch, { username, password });
  // need to call backend to check data
    if(username !== '' || username !== null || password !== '' || password !== null){
      setIsLoading(true);
      searchUser({username : username,  password : password})
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
  //searchUser
  // then assign state
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN FOR LIVERAPP</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
         {isLogged ? <span><h4 style={{color : 'red'}}>Login Failed</h4></span> : <span></span>}
          {/* <Button onClick={handleClick} disabled={isFetching}> */}
          {/* <Link to="/homepage"> */}
          <Button onClick={(e) => handleClick(e)}>
            LOGIN
          </Button>
          {/* </Link> */}
          
          {/* {error && <Error>Something went wrong...</Error>} */}
          {/* <Link to="/login"> */}
          <Link to="/">
          <LinkPara>DO NOT YOU REMEMBER THE PASSWORD?</LinkPara>
          </Link>      
          <Link to="/register">
          <LinkPara>CREATE A NEW ACCOUNT</LinkPara>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
