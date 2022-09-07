import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';

import styled from 'styled-components';

const TableLayout = styled.div``;
const CustomizedTable = styled(Table)`
  //margin-top: 48px;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: 18px;
`;
const CustomizedTableHead = styled(TableHead)`
  margin: 0 0 26px;
  border-radius: 8px;
  background-color: #f4f6fc;
  font-size: 15px;

  tr th {
    padding: 23px 0;
    text-align: center;
    color: ${({ theme }) => theme.palette.gray};
  }
`;
const CustomizedTableBody = styled(TableBody)`
  margin: 0 0 26px;

  tr:nth-of-type(2n) {
    background-color: #f9f9f9;
  }

  tr td {
    padding: 25px 0;
    text-align: center;
    color: ${({ theme }) => theme.palette.lightBlack};

    &:nth-of-type(2) {
      color: #602ff7;
    }

    &:nth-of-type(3) {
      color: ${({ theme }) => theme.palette.blueTeam.main};
    }

    // &:nth-of-type(4) {
    //   color: ${({ theme }) => theme.palette.redTeam.main};
    // }
  }
`;
const PostTableHead = styled(CustomizedTableHead)`
  tr th :nth-of-type(3) {
    text-align: left;
  }
`;
const PostTableBody = styled(CustomizedTableBody)`
  tr td:nth-of-type(3) {
    text-align: left;
  }
`;
const TableFooterLayout = styled.div`
  > * {
    margin: 32px auto;
  }
  form {
    margin: 0 auto;
    width: 600px;
    padding: 32px 0;
    border-radius: 8px;
  }
`;
const FooterButtonLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  button {
    margin: 0 auto;
  }
`;
const FooterSearchLayout = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.palette.whiteGray};
`;
const NoticeIcon = styled.span`
  margin: 0 auto;
  display: block;
  width: 60px;
  height: 36px;
  border-radius: 8px;
  background-color: ${props => props.theme.palette.primary};
  color: #fff;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 500;
  line-height: 36px;
  text-align: center;
`;

const CustomLink = styled.a`
  color: ${({ theme }) => theme.palette.primary};
`;

const NoHistory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
`;

export {
  CustomizedTable,
  CustomizedTableHead,
  CustomizedTableBody,
  PostTableHead,
  PostTableBody,
  TableLayout,
  TableFooterLayout,
  FooterButtonLayout,
  FooterSearchLayout,
  NoticeIcon,
  CustomLink,
  NoHistory,
};
