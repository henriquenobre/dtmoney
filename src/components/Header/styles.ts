import styled from 'styled-components'

export const Container = styled.header`
    background: var(--blue);
`

export const  Content = styled.div`
    max-width: 1128px;
    margin: 0 auto;

    padding: 0 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem 10rem;

    button{ 
        font-size: 1rem;
        color: #fff;
        background: var(--blue-ligth);
        border-radius: 0%.25rem;
        border: 0;
        padding: 0 2rem;
        height: 3rem;

        transition: 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`
