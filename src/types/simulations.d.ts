interface ReadyUser {
  id: number;
  user_id: number;
  simulation_id: number;
  socket_id: string;
  name: string;
  team: number;
  order: number;
  is_ready: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: any;
}

interface ChampionT {
  id: number;
  name: string;
  name_kr: string;
  title: string;
  tags: string;
  partype: string;
  img_default: string;
  img_loading: string;
  img_splash: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: any;
}

interface BanPickT {
  id: number;
  simulation_id: number;
  champion_id: number;
  type: 0 | 1; // 0-ban 1-pick
  team: 0 | 1; // 0-red, 1-blue
  order: number; // 자리 순서
  created_at: Date;
  updated_at: Date;
  deleted_at?: any;
  champion: ChampionT;
}

interface SimulationT {
  id: number;
  user_id: number;
  name: string; // 매치명
  red: string;
  blue: string;
  is_spectate: 0 | 1; // 관전, 0:비공개, 1:공개'
  mode: 0 | 1 | 2; // 모드, 0:싱글, 1:멀티(1:1), 2:멀티(5:5)
  turn: number;
  is_start: 0 | 1; // 0:준비, 1:시작
  created_at: Date;
  updated_at: Date;
  deleted_at?: any;
  ready_users: ReadyUser[];
  ban_picks: BanPickT[];
  simulation_note: { contents: string };
}

export { SimulationT, BanPickT, ChampionT };
