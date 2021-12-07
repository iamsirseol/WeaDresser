import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";
import {
    UserInfoBackground,
    UserInfoContainer,
    UserInfoHeader,
    UserInfoUpdate,
    UserInfoForm,
    UserInfoNickname,
    UserInfoPwd,
    UserInfoEditPwd,
    UserInfoChkPassword,
    UserInfoSubmitBtn,
    UserInfoSnsLogined,
    UserInfoBox,
    UserInfoLabel,
} from "./UserInfoStyle"
import CheckMsg from "../../components/utils/checkMsg"
import {conditionPassword} from "../../utils/validator"
import CheckSignMsg from '../../components/utils/checkMsg';
import InfoUpdateModal from '../../components/Modal/InfoUpdateModal'



function UserInfo(){
    const [curUserPw, setCurUserPw] = useState('');
    const [updatePw, setUpdatePw] = useState('')
    const [checkUpdatePw, setCheckUpdatePw] = useState(''); 
    const [curUserNickname, setCurUserNickname] = useState('');
    const [fixUserName, setFixUserName] = useState('')
    const [sucUpdate, setSucUpdate] = useState(true);
    const [showUpdateModal, setShowUpdateModal] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const [validPw, setValidPw] = useState(false); // 유효성(문자, 숫자, 특수문자 각 하나씩)
    const [samePw, setSamePw] = useState(false); // 비번 확인용

    const userData =  useSelector(state => state.isLoginReducer.accessToken)

    useEffect(() => {
        console.log("useEffect get request")
        /*const curUser = window.sessionStorage.getItem('email');*/
        // 로딩 넣으면 좋을듯
        // console.log(userData)
        axios.get(`${process.env.REACT_APP_SERVER_URL}/mypage/users`, { withCredentials : true })
        .then(res => {
                console.log('--------------------------')
                console.log(res)
                console.log('--------------------------')
                // const username = res.data.data.username;
                // setCurUserNickname(username)
                // setFixUserName(username)
                setCurUserNickname(res.data.data.userName)
            })
            .catch(err => {
                // console.log('fail')// 에러창을 추후에 만들면 좋을듯 싶음
            })

    }, [])

    useEffect(() => {
        if(!conditionPassword(updatePw)){
            setValidPw(false);
        }else{
            setValidPw(true);
        }
        if(updatePw !== checkUpdatePw){
            setSamePw(false);
        }else{
            setSamePw(true);
        }
    }, [validPw, updatePw, checkUpdatePw, samePw])

    useEffect(() => { // disabled 조건문인데 확인 잘하자 이걸로 함수 실행하자 근데 이게 최선인가
        if(curUserPw){
            if(fixUserName){
                setButtonDisabled(false)
            }else if(validPw && samePw){
                setButtonDisabled(false)
            }else if(fixUserName && validPw && samePw){
                setButtonDisabled(false)
            }else{
                setButtonDisabled(true)
            }
        }else{
            setButtonDisabled(true)
        }
    }, [curUserPw, fixUserName, validPw, samePw])
    function userPwInfo(e){
        setCurUserPw(e.target.value)
    }
    function chagePwInfo(e){
        setUpdatePw(e.target.value)
    }
    function checkChagePwInfo(e){
        setCheckUpdatePw(e.target.value)
    }
    function changeNickName(e){
        setFixUserName(e.target.value)
    }
    useEffect(() => {
        
    },[fixUserName, curUserPw, updatePw, checkUpdatePw])

    function updateInfoRequest(e){ // -------------업데이트 요청----------------
        e.preventDefault()
        axios.patch(`${process.env.REACT_APP_SERVER_URL}/mypage/users`, {withCredentials : true})
            .then(res => {
                console.log('유저 정보 업데이트 성공')
                setSucUpdate(true)
                setShowUpdateModal(true)
            })
            .catch(err => {
                console.log('fail')// 에러창을 추후에 만들면 좋을듯 싶음
                setSucUpdate(false)
                setShowUpdateModal(true)
            })
    }

    return(
        <UserInfoBackground>
            <UserInfoContainer>
                <UserInfoHeader>
                    <h2>{curUserNickname}님</h2>
                    <div>회원탈퇴</div>
                </UserInfoHeader>
                <UserInfoUpdate>
                    <UserInfoForm onSubmit={(e) => updateInfoRequest(e)}>
                        <UserInfoBox>
                            <UserInfoLabel htmlFor="nickName">변경 할 닉네임</UserInfoLabel>
                            <UserInfoNickname onChange={(e) => changeNickName(e)}/>
                        </UserInfoBox>
                        <UserInfoBox>
                            <UserInfoLabel htmlFor="curPassword">현재 비밀번호 입력</UserInfoLabel >
                            <UserInfoPwd autocomplete="current-password" onChange={(e) => userPwInfo(e)}/>
                        </UserInfoBox>
                        <UserInfoBox>
                            <UserInfoLabel htmlFor="changePassword">새 비밀번호 입력</UserInfoLabel>
                            {/* 필수 아님 */}
                            <UserInfoEditPwd autocomplete="new-password" onChange={(e) => chagePwInfo(e)}/>
                        </UserInfoBox>
                        {!validPw ? <CheckSignMsg message={'숫자, 영문, 특수문자 각 1자리 이상의 8~16 자리'} /> : null}
                        <UserInfoBox>
                            <UserInfoLabel htmlFor="checkPassword">새 비밀번호</UserInfoLabel>
                            <UserInfoChkPassword onChange={(e) => checkChagePwInfo(e)}/>
                        </UserInfoBox>
                        {!samePw ? <CheckSignMsg message={'비밀번호가 일치하지 않습니다.'} /> : null}
                        <UserInfoSubmitBtn disabled={buttonDisabled}>
                            변경하기
                        </UserInfoSubmitBtn>
                    </UserInfoForm>
                </UserInfoUpdate>
                <UserInfoSnsLogined></UserInfoSnsLogined>
                {showUpdateModal ? <InfoUpdateModal setShowUpdateModal={setShowUpdateModal} showUpdateModal={showUpdateModal} sucUpdate={sucUpdate} /> : null}
            </UserInfoContainer>
        </UserInfoBackground>
    )

}

export default UserInfo;