import { BanPick, TeamType } from '@/modules/simulataions/type';

const BAN_PICK_TURN = [
  {
    order: 0,
    type: BanPick.Ban,
    team: TeamType.Blue,
  },
  {
    order: 0,
    type: BanPick.Ban,
    team: TeamType.Red,
  },
  {
    order: 1,
    type: BanPick.Ban,
    team: TeamType.Blue,
  },
  {
    order: 1,
    type: BanPick.Ban,
    team: TeamType.Red,
  },
  {
    order: 2,
    type: BanPick.Ban,
    team: TeamType.Blue,
  },
  {
    order: 2,
    type: BanPick.Ban,
    team: TeamType.Red,
  },

  {
    order: 0,
    type: BanPick.Pick,
    team: TeamType.Blue,
  },
  {
    order: 0,
    type: BanPick.Pick,
    team: TeamType.Red,
  },
  {
    order: 1,
    type: BanPick.Pick,
    team: TeamType.Red,
  },
  {
    order: 1,
    type: BanPick.Pick,
    team: TeamType.Blue,
  },
  {
    order: 2,
    type: BanPick.Pick,
    team: TeamType.Blue,
  },
  {
    order: 2,
    type: BanPick.Pick,
    team: TeamType.Red,
  },

  {
    order: 3,
    type: BanPick.Ban,
    team: TeamType.Red,
  },
  {
    order: 3,
    type: BanPick.Ban,
    team: TeamType.Blue,
  },
  {
    order: 4,
    type: BanPick.Ban,
    team: TeamType.Red,
  },
  {
    order: 4,
    type: BanPick.Ban,
    team: TeamType.Blue,
  },

  {
    order: 3,
    type: BanPick.Pick,
    team: TeamType.Red,
  },
  {
    order: 3,
    type: BanPick.Pick,
    team: TeamType.Blue,
  },
  {
    order: 4,
    type: BanPick.Pick,
    team: TeamType.Blue,
  },
  {
    order: 4,
    type: BanPick.Pick,
    team: TeamType.Red,
  }
];
const MAX_TURN = BAN_PICK_TURN.length;

export { BAN_PICK_TURN, MAX_TURN };
