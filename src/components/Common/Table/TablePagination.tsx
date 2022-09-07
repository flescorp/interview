import React from 'react';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const PaginationLayout = styled.div`
  .pagination {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 3px;
      width: 24px;
      height: 24px;
      font-size: ${({ theme }) => theme.fontSizes.xsmall};
      color: ${({ theme }) => theme.palette.gray};
      text-align: center;
      box-sizing: border-box;

      &[disabled] {
        cursor: revert;
        transform: revert;

        &:hover {
          background-color: transparent;
        }
      }

      &:hover {
        width: 24px;
        height: 24px;
        border-radius: 12px;
        background-color: ${({ theme }) => theme.colors.grayee};
        font-size: ${({ theme }) => theme.fontSizes.xsmall};
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        color: ${({ theme }) => theme.palette.lightBlack};
        cursor: revert;
        transform: revert;
      }

      &.active {
        width: 24px;
        height: 24px;
        border-radius: 12px;
        background-color: ${({ theme }) => theme.palette.paleGray};
        font-size: ${({ theme }) => theme.fontSizes.xsmall};
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        color: ${({ theme }) => theme.palette.lightBlack};
        cursor: revert;
        transform: revert;
      }
    }
  }
`;

interface TablePaginationProps {
  page: number;
  perPage: number;
  count: number;
  query: any;
  redirectPath: string;
}

function TablePagination({
  page,
  perPage,
  count,
  query = {},
  redirectPath,
}: TablePaginationProps) {
  const router = useRouter();

  const handlePaginate = (pageNumber: number) => {
    const newQuery = {
      ...query,
      page: pageNumber,
    };
    router.push({
      href: redirectPath,
      query: { ...newQuery },
    });
  };

  return (
    <PaginationLayout>
      <Pagination
        itemClass="page-item"
        linkClass="page-link"
        prevPageText="<"
        nextPageText=">"
        firstPageText="<<"
        lastPageText=">>"
        activePage={page}
        itemsCountPerPage={perPage}
        totalItemsCount={count}
        onChange={handlePaginate}
        pageRangeDisplayed={10}
      />
    </PaginationLayout>
  );
}

export default TablePagination;
