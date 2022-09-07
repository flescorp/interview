const calcRem = (size: number) => `${size / 16}rem`;
const fontSizes = {
  xxsmall: calcRem(10),
  xsmall: calcRem(12),
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  xxxxl: calcRem(32),
  titleSize: calcRem(50),
};
const fontWeights = {
  regular: '400',
  bold: '700',
  extrabold: '800',
  black: '900',
};
const fonts = {
  SpoqaHanSansNeo: 'Spoqa Han Sans Neo, sans-serif',
  NotoSansKr: 'Spoqa Han Sans Neo, sans-serif', // TODO:
  Montserrat: 'Montserrat, sans-serif',
};
const colors = {
  primary: '#602ff7',
  purple: '#a136fb',
  purple05: '#051235',
  purple5e: '#5e5ce6',
  purple58: '#5808fb',
  purple99: '#9929ea',
  mint: '#63e6e2',
  blue: '#0a84ff',
  blue00: '#000c41',
  bluee4: '#e4edfb',
  bluef4: '#f4f6fc',
  blue0e: '#0e2b44',
  redpink: '#ff2d55',
  red: '#ff453a',
  reddb: '#db3e3e',
  redff: '#ff3b30',
  redffe: '#ffeaea',
  yellow: '#ffd60a',
  black: '#000000',
  black21: '#212529',
  black48: '#48484a',
  black34: '#343a40',
  gray86: '#868e96',
  graye5: '#e5e7e9',
  grayf9: '#f9f9f9',
  lightBlue: '#007aff',
  white: '#ffffff',
};
const palette = {
  white: colors.white,
  primary: colors.primary,
  comments: colors.lightBlue,
  black: colors.black21,
  lightBlack: colors.black34,
  darkGray: colors.black48,
  gray: colors.gray86,
  lightGray: '#8E8E93',
  blueGray:'#ADB5BD',
  paleGray: colors.graye5,
  whiteGray: colors.grayf9,
  status: {
    warning: colors.reddb,
    info: colors.lightBlue,
    inactive: '#e5e7e9',
  },
  table: {
    headerBgColor: colors.bluef4,
    row: colors.grayf9,
    lose: colors.redffe,
    win: colors.bluee4,
  },
  redTeam: {
    main: colors.red,
    champ: colors.redpink,
  },
  blueTeam: {
    main: colors.blue,
    champ: colors.lightBlue,
  },
};

const deviceSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '450px',
  tablet: '768px',
  tabletL: '1024px',
  desktop: '1260px',
};
const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};
const paddings = {
  xsmall: calcRem(4),
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};
const margins = {
  xsmall: calcRem(4),
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};
const interval = {
  base: calcRem(50),
  lg: calcRem(100),
  xl: calcRem(150),
  xxl: calcRem(200),
};
const verticalInterval = {
  base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const theme = {
  fontSizes,
  fontWeights,
  fonts,
  colors,
  palette,
  deviceSizes,
  device,
  paddings,
  margins,
  interval,
  verticalInterval,
};

export default theme;
