import React from 'react';
import styled from 'styled-components';

function CancelModal({ setShowCancel, cancelFn }) {

    function clickCancle () {
        setShowCancel(false);
    }
    return (
        <BackgroundContainer>
            <DeleteModalBox>
                <p>취소된 글은 저장이 되지 않습니다. <br /> 삭제 하시겠습니까?</p>
                <div>
                    <button className="yes-button" onClick={cancelFn}>네</button>
                    <button className="no-button" onClick={() => clickCancle()} >아니오</button>
                </div>
            </DeleteModalBox>
        </BackgroundContainer>
    )
}

export default CancelModal

const BackgroundContainer = styled.div`
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 99;
`

const DeleteModalBox = styled.div`
    position: fixed;
    width: 28.5em;
    height: 16em;
    border-radius: 6px;
    box-shadow: 0 6px 4px 0 rgba(0, 0, 0, 0.1);
    border: solid 1px #cbcbcb;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;

    > p {
        margin-top: 2em;
        font-family: NotoSansKR;
        font-size: 16px;
        line-height: 1.56;
        letter-spacing: normal;
        text-align: center;
        color: #17191d;
    }
    > div {
        margin-top: 2em;
        display: flex;
        width: 100%;
        height: 5em;
        justify-content: space-evenly;

        > button {
            width: 12rem;
            height: 4rem;
            font-family: NotoSansKR;
            font-size: 16px;
            letter-spacing: normal;
            text-align: center;
            color: #fff;
        }
        .yes-button {
            border-radius: 4px;
            box-shadow: 0 6px 4px 0 rgba(0, 0, 0, 0.1);
            border: solid 1px #cbcbcb;
            background-color: #7f838e;
            :hover {
                background-color: #42495a;
            }
        }

        .no-button {
            border-radius: 4px;
            box-shadow: 0 6px 4px 0 rgba(0, 0, 0, 0.1);
            border: solid 1px #cbcbcb;
            background-color: #2862e5;
            /* active: 0.5; */

            :hover {
                background-color: #16409f;
            }
        }
    }
`