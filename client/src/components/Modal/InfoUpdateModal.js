import React from 'react'
import styled from "styled-components";

const UpdateModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: #000000;
    opacity: .7;
    width: 100%;
    height: 100vh;
    z-index: 1000;
`
const UpdateModalContainer = styled.div`
    position: fixed;
    top: 45%;
    left: 50%;
    z-index: 1001;
    transform: translate(-50%, -50%);
    width: 550px;
    background: #fff;
    padding: 20px 80px;
    box-sizing: border-box
`
const UpdateModalBtn = styled.div`

`

function UpdateModal({setShowUpdateModal, showUpdateModal, sucUpdate}) {

    function closeCondition(){
        if(sucUpdate){
            setShowUpdateModal(false)
        }else{
            setShowUpdateModal(false)
        }
    }
    return(
        <>
            <UpdateModalBackground></UpdateModalBackground>
            <UpdateModalContainer>
            {sucUpdate ? <p>정보 변경이 성공했습니다.</p> : <p>정보 변경이 실패하였습니다 비밀번호를 확인해주세요</p>}
            <button className="update-modal-close-btn"onClick={closeCondition}>
                    닫기
                </button>
            </UpdateModalContainer>
        </>
    )
}

export default UpdateModal