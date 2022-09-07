import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import TitleMask from '@/components/Common/Layout/TitleMask';
import TableTemplate from '@/components/Common/Table/TableTemplate';
import TableRow from '@/components/Common/Table/TableRow';
import TableCount from '@/components/Common/Table/TableCount';
import TableSearch from '@/components/Common/Table/TableSearch';
import TablePagination from '@/components/Common/Table/TablePagination';
import {
  FooterButtonLayout,
  FooterSearchLayout,
  NoHistory,
} from '@/components/Common/Table/Table.styled';
import Button, {
  ButtonRadius,
  ButtonSize,
  ButtonVariant,
} from '@/components/Common/Button';
import { SimulationsListT } from '@/types/simulationsList';
import { fetchSimulations } from '@/api/simulations';

function Simulation() {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState<string>('name');
  const [query, setQuery] = useState<string>('');
  const [buttonClick, SetButtonClick] = useState<boolean>(true);
  const [searchIndex, setSearchIndex] = useState({
    current_page: Number(router.query?.page) || 1,
    from: 0,
    per_page: 10,
    total: 0,
  });

  const { data, isLoading } = useQuery(
    ['simulations', searchIndex.current_page],
    () =>
      fetchSimulations({
        value: selectedValue,
        query,
        pageNumber: searchIndex.current_page,
      }),
    {
      enabled: buttonClick,
      onSuccess: ({ simulation }) => {
        setSearchIndex(prev => ({
          ...prev,
          from: simulation.from,
          current_page: simulation.current_page,
          per_page: simulation.per_page,
          total: simulation.total,
        }));
        SetButtonClick(false);
      },
    }
  );

  const simulation = data?.simulation || [];

  useEffect(() => {
    setSearchIndex(prev => ({
      ...prev,
      current_page: Number(router.query?.page) || 1,
    }));
    SetButtonClick(true);
  }, [router.query]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push('/', {
      query: {
        page: 1,
      },
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
  };
  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedValue(value);
  };

  const tableList = (rows: Array<SimulationsListT>) => {
    return rows?.map(({ id, name, blue, red, user, created_at }) => (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{blue}</td>
        <td>{red}</td>
        <td>{user?.name || '비회원'}</td>
        <td>{new Date(created_at).toLocaleString()}</td>
      </tr>
    ));
  };

  return (
    <TitleMask title="밴픽 시뮬레이션">
      <div>
        {simulation.length === 0 && (
          <NoHistory>조회된 내역이 없습니다.</NoHistory>
        )}
        {!isLoading && (
          <TableTemplate
            colgroup={COLGROUP}
            Column={<TableRow columns={SIMULATION_COLUMNS} />}
            Body={tableList(simulation.data)}
            Footer={
              <>
                <FooterButtonLayout>
                  <TableCount
                    totalCount={searchIndex.total}
                    presentCount={simulation.data.length}
                  />
                  <Button
                    type="button"
                    width={250}
                    height={56}
                    size={ButtonSize.Big}
                    radius={ButtonRadius.Oval}
                    variant={ButtonVariant.Default}
                    label="생성하기"
                    onClick={() => {
                      router.push(`/simulations/create`);
                    }}
                  />
                </FooterButtonLayout>
                <FooterSearchLayout>
                  <TableSearch
                    options={SELECT_OPTIONS}
                    selectedValue={selectedValue}
                    selectChange={selectChange}
                    handleSubmit={handleSearch}
                    inputValue={query}
                    handleInputChange={handleInputChange}
                  />
                </FooterSearchLayout>
                <TablePagination
                  page={searchIndex.current_page}
                  perPage={searchIndex.per_page}
                  count={searchIndex.total}
                  query={query}
                  redirectPath="/simulations"
                />
              </>
            }
          />
        )}
      </div>
    </TitleMask>
  );
}

export default Simulation;

const COLGROUP = [
  { id: 1, col: '5%' },
  { id: 2, col: '10%' },
  { id: 3, col: '10%' },
  { id: 4, col: '10%' },
  { id: 5, col: '10%' },
  { id: 6, col: '15%' },
];

const SIMULATION_COLUMNS = [
  'NO',
  '매치명',
  '블루팀',
  '레드팀',
  '작성자',
  '생성일시',
];

const SELECT_OPTIONS = [
  {
    value: 'name',
    text: '매치 명',
  },
  {
    value: 'blue',
    text: '블루팀 명',
  },
  {
    value: 'red',
    text: '레드팀 명',
  },
  {
    value: 'username',
    text: '작성자',
  },
];
