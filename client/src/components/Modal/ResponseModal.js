import styled from "styled-components";
import exclamation from '../../../images/exclamation_ic.svg';

export const AskModal = styled.div`
    width: 31em;
    height: 24em;
    position: absolute;
    top: 50%;
    margin: 0 auto;
    border-radius: 6px;
    box-shadow: 0 6px 4px 0 rgba(0, 0, 0, 0.1);
    border: solid 1px #cbcbcb;
    background-color: #fff;

    .exclamation-ic {
        width: 4.8em;
        height: 4.8em;
        margin: 0 auto;
        top: 35%;
        background-image: url(${exclamation});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .message{
        width: 21.6em;
        height: 8.3em;
        font-family: NotoSansKR;
        font-size: 1.8em;
        font-weight: normal;
        line-height: 1.56;
        letter-spacing: normal;
        text-align: center;
        color: #17191d;
    }
`

function ResponseModal() {
    return (
        <AskModal>
            <div className="exclamation-ic"></div>
            <div className="message"></div>
        </AskModal>
    )
}

export default ResponseModal
