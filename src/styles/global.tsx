import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import {normalize} from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}
  html,
  body {
    font-family: "Spoqa Han Sans Neo", sans-serif;
    background-color: #fff;

  }

  img {
    display: block;
  }

  a {
    color: #999;
    text-decoration: none;
    display: block;
  }

  em {
    font-style: italic;
  }

  table tr td,
  table tr th {
    vertical-align: middle;
  }

  button {
    background: inherit;
    padding: 0;
    cursor: pointer;
  }

  input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    cursor: pointer;
  }

  button,
  input,
  textarea,
  select {
    border: none;
    outline: none;
  }

  input {
    &[type="text"]::placeholder,
    &[type="email"]::placeholder,
    &[type="password"]::placeholder {
      color: rgb(0 0 0 / 10%);
    }

    &[type="text"]:disabled,
    &[type="email"]:disabled,
    &[type="password"]:disabled {
      opacity: 0.5;
    }
  }




`;
