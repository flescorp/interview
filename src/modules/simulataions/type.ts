const enum Status {
  Ready,
  InProgress,
  Swap,
  Complete,
  ShutDown
}

const enum BanPick {
  'Ban',
  'Pick',
}

const enum TeamType {
  'Blue',
  'Red',
}

const enum Mode {
  'Single',
  'Multi1',
  'Multi5'
}

export { Status, BanPick, TeamType, Mode };
