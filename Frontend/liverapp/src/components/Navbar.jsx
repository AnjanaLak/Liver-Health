import { Badge } from "@material-ui/core";
import { FlashOnRounded, Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import addUserAction from "../redux/actions/userAction";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const LogoutBtn = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 6px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #4CAF50;
    color: white;
  }
`;
const Navbar = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const logoutClick = (e) => {
    e.preventDefault();
    dispatch(
      addUserAction({
        username: '',
        email: '',
        password: '',
        isLogged: false
      })
    )
    history.push("/");

  }


  const quantity = useSelector(state => state.cart.quantity)
  const { username, isLogged } = useSelector((state) => state.userReducer);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LIVERAPP</Logo>
        </Center>
        {!isLogged ? <Right>
          <Link to="/register">
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </Link>
        </Right> :
          <Right>
            <>
              <MenuItem style={{ fontSize: '16px', fontWeight: 'bold', color: '#464646' }}>Welcome, {username.toString()}!!</MenuItem>
            </>
            <Link to="/">
              <MenuItem><LogoutBtn onClick={(e) => logoutClick(e)}>LOGOUT</LogoutBtn></MenuItem>
            </Link>
          </Right>}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
