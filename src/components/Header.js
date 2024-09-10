import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { useNavigate, Link } from "react-router-dom";
import LoginModal from "./Login";

const Header = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Container>
      <Left>
        <Logo onClick={() => navigate("/")}>
          <img src={logo} alt="로고" />
        </Logo>
        <Menu>
          <p>
            <Link to="/">영화</Link>
          </p>
          <p>
            <Link to="/">시리즈</Link>
          </p>
          <p>
            <Link to="/">책</Link>
          </p>
          <p>
            <Link to="/">웹툰</Link>
          </p>
        </Menu>
      </Left>
      <Right>
        <SearchBox>
          <CiSearch />
          <Search placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."></Search>
        </SearchBox>
        <Login onClick={openModal}>로그인</Login>
        <LoginModal isOpen={isModalOpen} closeModal={closeModal} />
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
  padding: 10px 5vw;
  border-bottom: 1px solid #ddd;
`;

const Left = styled.div`
  display: flex;
  width: 50%;
`;
const Logo = styled.div`
  width: 150px;
  margin-right: 30px;
  cursor: pointer;
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

  p {
    cursor: pointer;
  }
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
