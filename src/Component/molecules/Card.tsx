import React from "react";
import TextComponent from "../atoms/Text";
import styled from "styled-components";
import RoundIcon from "../atoms/RoundIcon";
import RankImg from "../atoms/RankImg";
import NumberIncrementRenderer from "../atoms/NumberIncrease";
import usePrevious from "../../CustomHooks/usePreviousEffect";

interface CardStyledInterface {
    type: string | undefined;
}

const CardStyled = styled.div <CardStyledInterface>`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    padding:10px;
    background-color:${(props) => (props.type == "odd") ? "#F9FAFE" : "#ffff"};
    border-bottom:1px  grey;
    // &:hover{
    //     background-color:#f76b1c;
    //     color: #ffffff;
    //    cursor: pointer;
    // };
`
const ProfileContainer = styled.div`
    display:flex;
    font-size:30px;
    font-weight:bold;
    min-width:200px;
    max-width:200px;
`

function CardComponent(props: CardComponentInterface) {
    const previousNumber = usePrevious(props.score);
    return (
        <CardStyled data-key={props.userID} key={props.userID} type={props.type}>
            <ProfileContainer>
                <RankImg rank={props.rank} />
                <RoundIcon src={props.imageLink} rank={props.rank} />
                <TextComponent text={props.text} />
            </ProfileContainer>
            <NumberIncrementRenderer start={previousNumber} end={props.score} timer={100} />
        </CardStyled>
    )
}

export default CardComponent;

interface CardComponentInterface {
    text: string,
    rank: number,
    imageLink: string,
    key?: number | string,
    type?: string,
    score: number,
    id?: string | number,
    userID: string,
}