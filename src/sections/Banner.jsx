import React from 'react'
import styled from 'styled-components'

function Banner() {
    return (
        <Section>
            <Container id='up'>
                <BannerComponent>
                    <span data-scroll data-scroll-direction='horizontal' data-scroll-speed='8' data-scroll-target='#up'>
                        Vietnamese so a lot of 
                    </span>
                </BannerComponent>
                <BannerComponent>
                    <span data-scroll data-scroll-direction='horizontal' data-scroll-speed='-6' data-scroll-target='#up'>the clothes are inspired </span>
                </BannerComponent>
                <BannerComponent>
                    <span data-scroll data-scroll-direction='horizontal' data-scroll-speed='-6' data-scroll-target='#up'> by Vietnamese culture.</span>
                </BannerComponent>
                <BannerComponent>
                    <span data-scroll data-scroll-direction='horizontal' data-scroll-speed='6' data-scroll-target='#up'>
                        Keep it simple
                    </span>
                </BannerComponent>
>
                <BannerComponent>
                    <span data-scroll data-scroll-direction='horizontal' data-scroll-speed='6' data-scroll-target='#up'>but significant </span>
                </BannerComponent>
            </Container>

        </Section>
    )
}

export default Banner

const Section = styled.section`
    min-height: 100vh;
    width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
        @media  (max-width: 48em) {
            width: 90vw;
       
    }

`
const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items:center;
            @media  (max-width: 64em) {
            justify-content: center;
       
    }
`
const BannerComponent = styled.h1`
    font-size: ${props => props.theme.fontxxxl};
    font-family : 'kaushan Script';
    color: ${props => props.theme.text};
    white-space: nowrap;
    text-transform: uppercase;
    line-height: 1;
            @media  (max-width: 70em) {
            font-size: ${props => props.theme.fontxxxl};
       
    }
            @media  (max-width: 64em) {
            margin: 1rem 0

    }
            @media  (max-width: 48em) {
            font-size: ${props => props.theme.fontlg}
                 margin: 0.5rem 0


    }
            @media  (max-width: 30em) {
                font-size: ${props => props.theme.fontmd}


    }
    span {
        display: block;
        background-color: ${props => props.theme.body};
        padding: 1rem 2rem;
    }
`