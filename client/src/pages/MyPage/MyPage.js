import { useState } from 'react';
import styled from 'styled-components';
import DiaryPage from './DiaryPage';
import UserInfo from './UserInfo'
import usericon from '../../images/userinfo_ic.svg';

function MyPage() {

    const [tabIndex, setTabIndex] = useState(0);
    const tabArr = [<DiaryPage />, <UserInfo />]

    function changeTab (idx) {
        setTabIndex(idx)
    }

    return (
        <Container>
            <PageHeader>
                <UserIcon></UserIcon>
                <Header>MY PAGE</Header>
            </PageHeader>
            <MyPageTabBox>
                <DiaryTab onClick={() => changeTab(0)} tabIndex={tabIndex}>유저 다이어리</DiaryTab>
                <UserinfoTab onClick={() => changeTab(1)} tabIndex={tabIndex}>개인 정보 수정</UserinfoTab>
            </MyPageTabBox>
            {tabArr[tabIndex]}
        </Container>
    )
}

export default MyPage


const Container = styled.div` 
    width: 100%; 
    height: 100vh;
    position: relative;
    background-color: #eceaf5;
`

const PageHeader = styled.div`
    /* margin: 0 auto; */
    width: 52%;
    height: 10em;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    top: 14em;
    display: flex;

    &:after {
        position: absolute;
        width: 100%;
        margin-top: 6em;
        content: "";
        border-bottom: 0.1em solid #717171;
    }
`

const UserIcon = styled.div`
    width: 6em;
    height: 6em;
    position: relative;
    margin-bottom: 20em;
    background-image: url(${usericon});
    bottom: 10%;
`
const Header = styled.h1`
    margin-left: 1rem;
    font-family: NotoSansKR;
    font-size: 3.0em;
    font-style: normal;
    letter-spacing: normal;
    color: #17191d;  
`

const MyPageTabBox = styled.div`
    width: 52%;
    height: 8em;
    position: relative;
    top: 23em;
    margin: 0 auto;
    display: flex;
    align-items: left;
    
`
const DiaryTab = styled.div`
    width: 30.5%;
    height: 7.7rem;
    text-align: center;
    box-sizing: border-box;
    font-family: NotoSansKRKR;
    font-size: 2.2em;
    font-weight: 500;
    font-style: normal;
    line-height: 3.5;
    letter-spacing: normal;
    color: ${props => props.tabIndex === 0 ? "#2862e5" : "#767677"};
    border: solid 1px #ddd;
    border-radius: 4px;
    background-color: ${props => props.tabIndex === 0 ? "#fff" : "#f4f4f8"};
    cursor: pointer;
    border-bottom: ${props => props.tabIndex === 0 ? "0.7rem solid #2862e5" : "none"};
    :hover {
        background-color: #fff;
        color: #2862e5;
        border-bottom: 0.7rem solid #2862e5;
    }
    /* &:after {
        position: absolute;
        width: 30.1%;
        height: 7rem;
        left: 0;
        content: "";
        border-bottom: 0.4rem solid #2862e5;
    } */
`
const UserinfoTab = styled.div`
    width: 30.5%;
    height: 7.7rem;
    text-align: center;
    margin-left: 1rem;
    box-sizing: border-box;
    font-family: NotoSansKRKR;
    font-size: 2.2em;
    font-weight: 500;
    font-style: normal;
    line-height: 3.5;
    letter-spacing: normal;
    color: ${props => props.tabIndex === 0 ? "#767677" : "#2862e5"};
    border: solid 1px #ddd;
    border-radius: 4px;
    background-color: ${props => props.tabIndex === 0 ? "#f4f4f8" : "#fff"};
    cursor: pointer;
    border-bottom: ${props => props.tabIndex === 0 ? "none" : "0.7rem solid #2862e5"};
    :hover {
        background-color: #fff;
        color: #2862e5;
        border-bottom: 0.7rem solid #2862e5;
    }
`

const TabBody = styled.div`
    width: 100em;
    height: 66.5em;
    position: relative;
    top: 10%;
    background-color: #fff;
    border: solid 1px #ddd;
    margin: 0 auto;
`
