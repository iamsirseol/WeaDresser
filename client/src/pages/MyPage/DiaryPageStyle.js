import styled from "styled-components";
import usericon from '../../images/userinfo_ic.svg';
import calendar from '../../images/calendar_ic.svg';
import calendarHover from '../../images/calendar_ic_hover.svg';
import menuicon from '../../images/menu_ic_nor.svg';
import menuiconHover from '../../images/menu_ic_press.svg';

export const Container = styled.div` 
    width: 100%; 
    height: 100vh; 
    background-color: #eceaf5;
`

export const PageHeader = styled.div`
    margin: 0 auto;
    width: 100em;
    height: 10em;
    position: relative;
    top: 11%;
    display: flex;

    &:after {
        position: absolute;
        width: 100em;
        margin-top: 6em;
        content: "";
        border-bottom: 0.1em solid #717171;
    }
    
    > h1 {
        margin-left: 1rem;
        font-family: NotoSansKR;
        font-size: 3.0em;
        font-style: normal;
        letter-spacing: normal;
        color: #17191d;    
    }
`

export const UserIcon = styled.div`
    width: 6em;
    height: 6em;
    position: relative;
    margin-bottom: 20em;
    background-image: url(${usericon});
    bottom: 10%;

`

export const MyPageTabBox = styled.div`
    width: 100em;
    height: 7.9em;
    position: relative;
    top: 10%;
    margin: 0 auto;
    display: flex;
    align-items: left;

    .diary-tab {
        width: 30rem;
        height: 7.9rem;
        text-align: center;
        font-family: NotoSansKRKR;
        font-size: 2.2em;
        font-weight: 500;
        font-style: normal;
        line-height: 3.5;
        letter-spacing: normal;
        color: #2862e5;
        border: solid 1px #ddd;
        border-radius: 4px;
        background-color: #fff;
        cursor: pointer;

        &:after {
            position: absolute;
            width: 30.15rem;
            height: 7.5rem;
            left: 0;
            content: "";
            border-bottom: 0.4rem solid #2862e5;
        }
    }

    .userinfo-tab {
        width: 30rem;
        height: 7.9rem;
        text-align: center;
        font-family: NotoSansKRKR;
        margin-left: 1rem;
        font-size: 2.2em;
        font-weight: 500;
        font-style: normal;
        line-height: 3.5;
        letter-spacing: normal;
        color: #767677;
        border: solid 1px #ddd;
        border-radius: 4px;
        background-color: #f4f4f8;
        cursor: pointer;

    }
`

export const MyPageTab = styled.div`
    position: relative;
    border: solid 1px #ddd;
    display: flex;
    /* border-bottom: solid 1px #ddd; */
`

export const TabBody = styled.div`
    width: 100em;
    height: 66.5em;
    position: relative;
    top: 10%;
    background-color: #fff;
    border: solid 1px #ddd;
    margin: 0 auto;
`

export const DateDataBar = styled.div`
    width: 52em;
    height: 4em;
    position: relative;
    margin: 0 auto;
    top: 3em;
    display: flex;
    color: #fff;
    
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

    .calendar-box {
        width: 3.5em;
        height: 3.5em;
        margin: 0.2em 0 0 0.5em;
        background-image: url(${calendar});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        :hover {
            background-image: url(${calendarHover});
        }
    }
    .date-box {
        font-size: 2em;
        font-family: NotoSansKRKR;
        line-height: 2.2;
        letter-spacing: 1px;
        color: #17191d;
        margin-right: 0.5em;
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
        font-size: 2.4em;
        font-weight: bold;
        line-height: 1.9;
        letter-spacing: normal;
        color: #ff2f77;
        margin-right: 0.5em;
    }

    .temp-min {
        font-family: NotoSansKRKR;
        font-size: 2.4em;
        font-weight: bold;
        line-height: 1.9;
        letter-spacing: normal;
        color: #69aeff;
    }
`

export const WeatherIcon = styled.span`
    width: 3.2em;
    height: 3.2em;
    margin: 0.3em 0 0 1em;
    background-image: url(${props => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

export const RecordContainer = styled.div`
    width: 47.8em;
    height: 53.9em;
    position: relative;
    background-color: aliceblue;
    margin: 0 auto;
    top: 5em;
`
export const ImageBox = styled.div`
    width: 100%;
    height: 32.4em;
    position: relative;
    background-color: #dfdfe0;
    background-image: url(${props => props.diaryImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border: solid 1px #d3d3d3;

`

export const ContentBox = styled.div`
    width: 45rem;
    height: 12rem;
    padding: 0.5em 1em 0.5em 1em;
    position: relative;
    font-size: 1.4em;
    letter-spacing: normal;
    color: #3b3c3c;
    background-color: #fdfdfd;
    border: solid 1px #d3d3d3;
    border-top: none;
   // 수정버튼 눌렀을때 textarea로 변경
`

export const HashtagBox = styled.div`
    width: 45.8rem;
    height: 7.4rem;
    padding: 0.5em 1em 0.5em 1em;
    position: relative;
    background-color: #fdfdfd;
    border: solid 1px #d3d3d3;
    border-top: none;

`

export const DotMenuBox = styled.div`
    bottom: 73.5%;
    left: 75%;
    position: relative;
    padding: 0 1em 0 1em;
    width: 0.6em;
    height: 3.4em;
    background-image: url(${menuicon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    
    :hover {
        background-image: url(${menuiconHover});
    }
    `

export const DotMenu = styled.div`
    display: ${props => props.isDotMenu ? 'block' : 'none'};
    width: 9.4em;
    height: 10.1em;
    position: relative;
    border-radius: 8px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
    border: solid 1px #d9d9d9;
    background-color: #fff;
    left: 2.5em;
    animation: ${props => props.isDotMenu ? 'fadein 3s' : null};
    /* display: flex;
    flex-direction: column; */

    .edit-btn {
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
    }

    .delete-btn {
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
    }
`