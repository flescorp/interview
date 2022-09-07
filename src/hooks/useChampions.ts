import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchChampions } from '@/api/champion';

export const enum ChampionPosition {
  'All',
  'Top',
  'Jug',
  'Mid',
  'ADC',
  'Sup',
}

export interface ChampionsDataFilter {
  search: string;
  position: ChampionPosition;
}

function useChampions(initialFilters: ChampionsDataFilter) {
  const { data, isLoading } = useQuery('champions', fetchChampions);
  const [searchChampions, setSearchChampions] = useState<Array<object>>([]);
  const [filters, setFilters] = useState(initialFilters);
  const champions = data?.champions;

  useEffect(() => {
    if (isLoading) return;

    let newChampions = champions;
    const regex = new RegExp(filters.search, 'i');
    newChampions = newChampions.filter(({ name_kr }: any) => {
      return name_kr.match(regex);
    });
    setSearchChampions(newChampions);
  }, [champions, filters]);

  return [searchChampions, setFilters, champions];
}

useChampions.defaultProps = {
  search: '',
  position: ChampionPosition.All,
};

export default useChampions;
export { POSITION_MENUS };

const POSITION_MENUS = [
  {
    id: ChampionPosition.All,
    text: '전체',
  },
  {
    id: ChampionPosition.Top,
    text: '탑',
  },
  {
    id: ChampionPosition.Jug,
    text: '정글',
  },
  {
    id: ChampionPosition.Mid,
    text: '미드',
  },
  {
    id: ChampionPosition.ADC,
    text: '원딜',
  },
  {
    id: ChampionPosition.Sup,
    text: '서폿',
  },
];
