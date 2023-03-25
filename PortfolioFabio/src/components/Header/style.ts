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

  .buttonContact {
    padding: .4rem 1rem;

    display: none;

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

    div {
      h3 {
        font-size: 1.3rem;
      }
    }

    ul {
      display: flex;
      gap: 1rem;
    }
    
    .buttonContact {
      padding: .7rem 2rem;

      display: block;
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

export const Burger = styled.aside`
  display: flex; 

  .buttonBurger {
    font-size: 1.7rem;
  
    cursor: pointer;

    background-color: transparent;

    color: var(--black);

    @media (min-width: 769px) {
        display: none;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`