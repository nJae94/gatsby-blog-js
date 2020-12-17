import React from 'react'
import styled from 'styled-components';
import js from '../../styles/img/javascript.png';

export default function MainContent({title, post}) {

    console.log(post);

    return (
        <Wrapper>
            <ThumbnailImg src={js} alt="ThumbnailImg"/>
            {title}
        </Wrapper>
    )
};

const Wrapper = styled.div`
    width:100%;
    height: 200px;
    border:1px solid black;
    margin-bottom: 1rem;
    padding: 10px 10px;
    display:flex;
`;

const ThumbnailImg = styled.img`
    width:30%;
    margin-right:1rem;
`;
