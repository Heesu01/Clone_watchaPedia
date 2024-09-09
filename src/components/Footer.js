import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <StarBox>
        <p>
          지금까지 <span>★ 733,849,321 개의 평가가 </span>쌓였어요.
        </p>
      </StarBox>
      <Text>
        <p>
          서비스 이용약관 | <b>개인정보 처리방침</b> | 회사 안내
        </p>
        <p>
          고객센터cs@watchapedia.co.kr, 02-515-9985 <br />
          제휴 및 대외 협력https://watcha.team/contact
        </p>
        <p>
          주식회사 왓챠대표 박태훈서울특별시 서초구 강남대로 343 신덕빌딩 3층{" "}
          <br />
          사업자 등록 번호 211-88-66013 <br />
          2024 by WATCHA, Inc. All rights reserved.
        </p>
      </Text>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 350px;
  background-color: #222;
`;
const StarBox = styled.div`
  background-color: #000;
  height: 60px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  span {
    color: red;
  }
`;

const Text = styled.div`
  padding: 30px 50px;
  color: #999;
  font-size: 13px;
  line-height: 1.3em;
  p {
    margin-bottom: 20px;
  }
`;
export default Footer;
