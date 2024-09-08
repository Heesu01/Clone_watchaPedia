import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <img src={logo} />
        </Logo>
        <Menu>
          <p>영화</p>
          <p>시리즈</p>
          <p>책</p>
          <p>웹툰</p>
        </Menu>
      </Left>
      <Right>
        <SearchBox>
          <CiSearch />
          <Search placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."></Search>
        </SearchBox>
        <Login>로그인</Login>
        <Signup>회원가입</Signup>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 10px 80px;
  border-bottom: 1px solid #ddd;
`;

const Left = styled.div`
  display: flex;
  width: 50%;
`;
const Logo = styled.div`
  width: 150px;
  margin-right: 30px;
  img {
    width: 100%;
  }
`;
const Menu = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 30px;
  color: gray;
  font-size: 15px;
`;
const Right = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  gap: 10px;
`;
const SearchBox = styled.div`
  width: 300px;
  padding: 10px;
  border-radius: 3px;
  background-color: #eee;
  display: flex;
  align-items: center;
`;
const Search = styled.input`
  margin-left: 10px;
  background-color: #eee;
  width: 240px;
  &:focus {
    outline: none;
  }
`;

const Login = styled.button`
  padding: 5px 10px;
  background-color: #fff;
  color: gray;
`;

const Signup = styled.button`
  padding: 2px 10px;
  border: solid 1px #ddd;
  border-radius: 5px;
  background-color: #fff;
`;

export default Header;
