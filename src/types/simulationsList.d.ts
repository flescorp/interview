interface SimulationsObjectT {
  simulation: Array<SimulationsDataT>;
}
interface SimulationsDataT {
  current_page: number;
  from: number;
  per_page: number;
  total: number;
  data: Array<SimulationsListT>;
}
interface SimulationsListT {
  blue: string;
  created_at: Date;
  deleted_at?: any;
  id: number;
  is_spectate: 0 | 1; // 관전, 0:비공개, 1:공개'
  is_start: 0 | 1; // 0:준비, 1:시작
  mode: 0 | 1 | 2; // 모드, 0:싱글, 1:멀티(1:1), 2:멀티(5:5)
  name: string; // 매치명
  red: string;
  turn: number;
  updated_at: Date;
  user: { id: number; name: string };
  user_id: number;
}

export { SimulationsObjectT, SimulationsDataT, SimulationsListT };
