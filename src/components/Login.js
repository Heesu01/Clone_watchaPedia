import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import kakao from "../assets/icon_kakao.png";
import google from "../assets/icon_google.png";
import twitter from "../assets/icon_twitter.png";
import line from "../assets/icon_line.png";

const Login = ({ isOpen, closeModal }) => {
  const handleClose = (e) => {
    e.stopPropagation();
    closeModal();
  };
  if (!isOpen) return null;

  return (
    <Overlay onClick={handleClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Img src={logo} alt="로고" />
        <Title>로그인</Title>
        <InputBox>
          <Id placeholder="이메일"></Id>
          <Pw placeholder="비밀번호"></Pw>
          <Btn>로그인</Btn>
        </InputBox>
        <Text>
          <span>비밀번호를 잊어버리셨나요?</span>
        </Text>
        <Text>
          계정이 없으신가요? <span>회원가입</span>
        </Text>
        <Line>
          <hr />
          <p>OR</p>
          <hr />
        </Line>
        <SNS>
          <img src={kakao} alt="카카오" />
          <img src={google} alt="구글" />
          <img src={twitter} alt="트위터" />
          <img src={kakao} alt="애플" />
          <img src={line} alt="라인" />
        </SNS>
        <GrayBox>
          Tip..왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같 은 계정을
          사용해요.
        </GrayBox>
      </Content>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 8px;
  padding: 20px 0px;
  width: 34%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Img = styled.img`
  width: 56%;
  height: auto;
  margin-top: 10px;
`;

const Title = styled.h1`
  padding: 30px;
  font-size: 23px;
  font-weight: bold;
`;

const InputBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Id = styled.input`
  background-color: #f3f3f3;
  padding: 13px 10px;
  border-radius: 5px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;
const Pw = styled.input`
  background-color: #f3f3f3;
  padding: 13px 10px;
  border-radius: 5px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const Btn = styled.button`
  background-color: red;
  padding: 11px 0px;
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
  margin-top: 10px;
`;

const Text = styled.p`
  padding-top: 25px;
  color: gray;
  font-size: 15px;

  span {
    color: red;
    font-size: 13px;
  }
`;

const Line = styled.div`
  width: 90%;
  display: flex;
  margin-top: 30px;
  hr {
    width: 50%;
    background-color: #f8f8f8;
  }
  p {
    margin: 0 15px;
    color: #777;
  }
`;

const SNS = styled.div`
  display: flex;
  margin: 30px;
  gap: 10px;
  img {
    width: 90%;
  }
`;

const GrayBox = styled.div`
  background-color: #f8f8f8;
  width: 90%;
  height: 70px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  text-align: center;
  line-height: 1.5em;
  color: gray;
  font-size: 14px;
  padding: 10px;
`;

export default Login;
