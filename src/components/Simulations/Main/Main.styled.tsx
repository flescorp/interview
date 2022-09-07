import styled from 'styled-components';

const MatchName = styled.h1`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainBody = styled.div`
  margin-top: 20px;
  padding: 0 0 36px;
  border-radius: 12px;
  background-image: linear-gradient(129deg, #000c41 1%, #0e2b44 99%);
  opacity: 0.8;
  overflow: hidden;

  > button {
    margin: 0 auto;
    background: #602ff7;
  }
`;

const ChampionSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  padding: 0 40px;
  background-color: #602ff7;

  form input {
    font-size: 12px;
  }
`;

const ChampionPick = styled.div`
  display: grid;
  justify-items: center;
  justify-content: space-between;
  grid-template-columns: 96px calc(100% - 215px) 96px;
  box-sizing: border-box;
  width: 100%;
  height: 580px;
  padding: 40px 40px 0;
  
  > div {
    width: 100%;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 18px;

  button {
    margin: 0 5px;
  }
`;

export {
  MatchName,
  MainHeader,
  MainBody,
  ChampionSearch,
  ChampionPick,
  ButtonBox,
};
