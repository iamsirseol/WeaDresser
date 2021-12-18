import styled from "styled-components";
import menuicon from '../../images/menu_ic_nor.svg';
import menuiconHover from '../../images/menu_ic_press.svg';
import prevIcon from '../../images/arrow-left.png';
import nextIcon from '../../images/arrow-right.png';
import empty_ic from '../../images/empty_ic.svg';


export const TabBody = styled.div`
    width: 52%;
    height: 56em;
    position: relative;
    top: 19em;
    background-color: #fff;
    border: solid 1px #ddd;
    margin: 0 auto;
`

export const DateDataBar = styled.div`
    width: auto;
    height: 4em;
    position: relative;
    margin: 0 auto;
    top: 3em;
    display: flex;
    color: #fff;
    justify-content: center;
    
    > div {
        width: auto;
        height: 100%;
        /* flex-grow: 1; */
        display: flex;

        &:after {
            right: 0;
            content: "";
            width: 0.2em;
            height: 1.8em;
            background-color: #c4c4c4;
            margin-top: 1.2em;
        }
        &:last-child:after {
            display: none;
        }

    }

    .weather-desc {
        /* margin-left: 0.5em; */
        font-size: 2em;
        font-family: NotoSansKRKR;
        line-height: 2.2;
        letter-spacing: 0.1em;
        color: #17191d;
        margin-right: 0.5em;
    }

    .temp-desc {
        font-family: NotoSansKRKR;
        font-size: 2em;
        line-height: 2.2;
        letter-spacing: normal;
        color: #17191d;
        margin: 0 0.5em 0 0.5em;
    }

    .temp-max {
        font-family: NotoSansKRKR;
        font-size: 2.3em;
        font-weight: bold;
        line-height: 1.9;
        letter-spacing: normal;
        color: #ff2f77;
        margin-right: 0.5em;
    }

    .temp-min {
        font-family: NotoSansKRKR;
        font-size: 2.3em;
        font-weight: bold;
        line-height: 1.9;
        letter-spacing: normal;
        color: #69aeff;
    }
`

export const WeatherIcon = styled.span`
    width: 3.0em;
    height: 3.0em;
    margin: 0.4em 1em 0 1em;
    background-image: url(${props => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

export const RecordContainer = styled.div`
    width: 47.8rem;
    height: 45.8rem;
    margin: 0 auto;
    top: 7.5%;
    position: relative;
    background-color: #fdfdfd;
    border: solid 1px #d3d3d3;
    /* overflow: ${props => props.isEdit ? "visible" : "hidden"}; */
`
export const SlideContainer = styled.div`
    width: auto;
    /* height: 53.9em; */
    height: auto;
    margin: 0 auto;
    /* display: flex; */
    /* overflow: ${props => props.isEdit ? "visible" : "hidden"}; */

`
export const OutBox = styled.div`
    margin: 0 auto;
    height: 100%;
    display: flex;
`
export const InnerBox = styled.div`
    margin: 0 auto;
    height: 46em;
`
export const ImageBox = styled.div`
    width: 100%;
    height: 70%;
    border-bottom: solid 1px #d3d3d3;
    background-color: #dfdfe0;
    background-size: contain;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: center;
`
export const ContentBox = styled.div`
    width: 100%;
    height: 15%;
    /* background: cornflowerblue; */
    font-family: NotoSansKR;
    font-size: 1.4em;
    line-height: 2.5;
    letter-spacing: normal;
    margin-left: 0.5em;
    background-color: #fdfdfd;
`
export const HashtagBox = styled.ul`
    width: 47.8rem;
    padding-top: 0.5em;
    position: relative;
    background: #fdfdfd;
    display: flex;
    flex-wrap: wrap;
    border-top: solid 1px #d3d3d3;

    > span {
        width: auto;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        padding: 0 8px;
        font-size: 1.4rem;
        border-radius: 4px;
        margin: 0 4px 4px 0.5em;
        background-color: #5694F8;
        letter-spacing: 1px;
        :hover {
            background-color: #3471d5;
        }
    }
`
export const Button = styled.div`
    /* all: unset; */
    top: 25%;
    left: -1em; 
    padding: 1em 2em;
    margin: 2em 2em;
    background-size: contain;
    background-image: url(${prevIcon});
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    z-index: 99;
    position: absolute;
    cursor: pointer;
`
export const Button2 = styled.div`
    /* all: unset; */
    top: 25%;
    right: -1em;
    padding: 1em 2em;
    margin: 2em 2em;
    background-size: contain;
    background-image: url(${nextIcon});
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;    
    z-index: 99;
    position: absolute;
    cursor: pointer;
`

export const DotMenuBox = styled.div`
    display: ${props => props.isEdit ? 'none' : 'block'};
    width: 0.5em;
    height: 2.5em;
    top: 0.5em;
    right: 0em;
    position: absolute;
    padding: 0 1em 0 1em;
    background-image: url(${menuicon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 5;
    /* opacity: 0.5; */
    cursor: pointer;
    
    :hover {
        background-image: url(${menuiconHover});
    }
`

export const DotMenu = styled.div`
    display: ${props => props.isDotMenu ? 'block' : 'none'};
    width: 9.4em;
    height: 10em;
    left: 4em;
    top: -0.6em;
    position: relative;
    border-radius: 8px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
`
export const DotMenuButton1 = styled.button`
    width: 100%;
    height: 5rem;
    position: relative;
    font-family: NanumBarunGothicOTF;
    font-size: 1.8em;
    font-weight: bold;
    text-align: center;
    line-height: 3;
    letter-spacing: normal;
    color: #2862e5;
    border-bottom: solid 1px #d9d9d9;
    cursor: pointer;

    :hover {
        background-color: #f2f2f4;
    }
`
export const DotMenuButton2 = styled.button`
    width: 100%;
    height: 5rem;
    position: relative;
    font-family: NanumBarunGothicOTF;
    font-size: 1.8em;
    font-weight: bold;
    text-align: center;
    line-height: 2.8;
    letter-spacing: normal;
    color: #ed3829;
    border-bottom: solid 1px #d9d9d9;
    cursor: pointer;

    :hover {
        background-color: #f2f2f4;
    }
`
export const EmptyContainer = styled.div`
    width: 47.8em;
    /* width: 55.5%; */
    height: 53.9em;
    margin: 0 auto;
    top: 7.5%;
    position: relative;
    background-color: #fdfdfd;
    border: solid 1px #d3d3d3;
`
export const EmptyIcon = styled.div`
    width: 11em;    
    height: 10em;
    margin: 0 auto;
    margin-top: 16em;
    background-image: url(${empty_ic});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`
export const EmptyMesaage = styled.div`
    width: 100%;
    height: 3rem;
    margin-top: 1.5em;
    font-family: NotoSansKR;
    font-size: 1.3em;
    font-weight: 500;
    line-height: 2;
    text-align: center;
    color: #777a80;
`