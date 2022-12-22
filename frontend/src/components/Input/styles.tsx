import styled, { css } from "styled-components";


export const Container = styled.div`
    text-align: left;
    color: var(--grey-0);
    font-size: 17px;
    span{
        font-size: 14px;
        color: var( --color-primary-Negative);
    }
`
interface IProps {
    isError :boolean
}

export const ContentInput = styled.div<IProps>`
    background-color: var(--grey-2);
    color: var(--grey-0);
    height: 38px;
    width: 264px;
    border-radius: 4px;
    padding: 9px;
    margin: 10px 0 ;
    display: flex;
    align-items: center;
    border: 2px solid var(--grey-2);
    ${props => props.isError && css`
    border: 2px solid var(--color-primary-Negative);
    `}
    @media (min-width:768px){
        height: 48px;
        width: 329px;
    }
    @media (max-width:280px){
        width: 238px;
        height: 35px;
    }
    
    input{
        height:20px;
        background: transparent;
        border: none;
        align-items: center;
        flex: 1;
        color: var(--grey-0);
        &::placeholder{
            color: var(--grey-1);
        }
    }
`