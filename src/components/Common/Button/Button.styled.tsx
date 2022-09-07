import styled, { css } from 'styled-components';
import {
  ButtonRadius,
  ButtonSize,
  ButtonStyledProps,
  ButtonVariant,
} from '@/components/Common/Button/Button.types';

// Button variant
const variantDefault = css`
  border: solid 1px ${({ theme }) => theme.palette.primary};
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.white};
`;
const variantWhite = css`
  border: solid 1px ${({ theme }) => theme.palette.primary};
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.primary};
`;
const variantMono = css`
  border: solid 1px #e9ecef;
  background-color: ${({ theme }) => theme.palette.white};
  color: #343a40;
`;
const variantDisabled = css`
  border: solid 1px ${({ theme }) => theme.palette.paleGray};
  background-color: ${({ theme }) => theme.palette.status.inactive};
  color: ${({ theme }) => theme.palette.lightBlack};
  cursor: default;
  pointer-events: none;
`;
const variantBlack = css`
  border: solid 1px ${({ theme }) => theme.palette.paleGray};
  background-color: ${({ theme }) => theme.palette.gray};
  color: ${({ theme }) => theme.palette.white};
`;

const buttonVariant = {
  [ButtonVariant.Default]: variantDefault,
  [ButtonVariant.White]: variantWhite,
  [ButtonVariant.Mono]: variantMono,
  [ButtonVariant.Disabled]: variantDisabled,
  [ButtonVariant.Black]: variantBlack,
};

// Button radius
const ovalRadius = css`
  border-radius: 28px;
`;
const squareRadius = css`
  border-radius: 8px;
`;

const buttonRadius = {
  [ButtonRadius.Oval]: ovalRadius,
  [ButtonRadius.Square]: squareRadius,
};

// Button size
const medium = css`
  width: 159px;
  height: 44px;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
const small = css`
  height: 30px;
  width: 100px;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
`;
const big = css`
  width: 250px;
  height: 56px;
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

const buttonSize = {
  [ButtonSize.Medium]: medium,
  [ButtonSize.Small]: small,
  [ButtonSize.Big]: big,
};

// Button component
const ButtonLayout = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: initial;
  cursor: pointer;

  width: ${({ width }) => typeof width === 'number' && `${width}px`} !important;
  height: ${({ height }) =>
    typeof height === 'number' && `${height}px`} !important;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.Montserrat};

  ${({ radius }) => radius !== undefined && buttonRadius[radius]};
  ${({ variant }) => variant !== undefined && buttonVariant[variant]};
  ${({ size }) => size !== undefined && buttonSize[size]};
`;

export { ButtonLayout, buttonVariant, buttonRadius, buttonSize };
