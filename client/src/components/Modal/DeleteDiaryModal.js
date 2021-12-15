import styled from "styled-components";

function DeleteDiaryModal({ setShowDeleteModal, deleteRecordButton }) {

    function cancelDelete (e) {
        e.preventDefault();
        setShowDeleteModal(false);
    }
    
    return (
        <BackgroundContainer>
            <DeleteModalBox>
                <p>삭제된 글은 복구가 불가능합니다. <br /> 삭제 하시겠습니까?</p>
                <div>
                    <button className="yes-button" onClick={(e) => deleteRecordButton(e)}>네</button>
                    <button className="no-button" onClick={(e) => cancelDelete(e)}>아니오</button>
                </div>
            </DeleteModalBox>
        </BackgroundContainer>
    )
}

export default DeleteDiaryModal

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
        }
        .no-button {
            border-radius: 4px;
            box-shadow: 0 6px 4px 0 rgba(0, 0, 0, 0.1);
            border: solid 1px #cbcbcb;
            background-color: #2862e5;
        }
    }
`
