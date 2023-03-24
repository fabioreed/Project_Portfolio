import { Link } from "react-router-dom"
import styled from "styled-components"

export const HeaderContainer = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;

    div {
      h3 {
        font-weight: bold;
      }

      span {
        color: var(--primary-color);
        font-weight: bold;
      } 
  }

  ul {
    display: none;
  }

  button {
    padding: .4rem 1rem;

    background-color: var(--black);

    color: var(--white);
    font-size: .8rem;

    transition: .3s ease;

    :hover {
      background-color: var(--yellow);
      color: var(--black);
    }
  }

  @media (min-width: 769px) {
    padding: 1.7rem 8rem;

    ul {
      display: flex;
      gap: 1rem;
    }

    button {
      padding: .7rem 2rem;
    }
}
`

export const LinkTag = styled(Link)`
    font-size: .9rem;
    color: var(--gray);
    font-weight: 500;

    list-style: none;
    text-decoration: none;

    transition: .2s;

    :hover {
      font-weight: 600;
      color: var(--primary-color);
      
      transform: scaleX(-10px, -10px);
    }
`