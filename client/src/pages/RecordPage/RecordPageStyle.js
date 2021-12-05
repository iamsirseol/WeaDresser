import styled from 'styled-components';
import photo from '../../images/photo.png'

export const Container = styled.div` 
    width: 100%; 
    height: 100vh; 
    position: relative;
    top: 0;
    left: 0;
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
    background-color: #eceaf5;
`
export const RecordContainer = styled.div`
    width: 80%; 
    height: 80%; 
    position: absolute;
    display: flex;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    
    .content {
        width: 47%;
        display: flex;
        justify-content: space-between;

        .content-head {
            height: 3em;
            font-family: NotoSansKR;
            font-size: 20px;
            line-height: 1.2;
            color: #17191d;
            text-align: center;
        }
    }
`
export const ContentBox = styled.textarea`
    padding-left: 10px;
    padding-top: 5px;
    width: 40%;
    height: 60%;
    left: 0;
    position: absolute;
    background: beige;
    align-items: center;
    border: none;
    resize: none;
    font-size: 2em;
    letter-spacing: 2px;
`

export const HashtagBox = styled.textarea`
    width: 45%;
    height: 10%;
    position: absolute;
    top: 80%;
    left: 0;
    background: beige;
    align-items: center;
    border: none;
    resize: none;
    padding-left: 10px;
    padding-top: 5px;
    font-size: 2em;
    letter-spacing: 2px;
`

export const ImageUploadBox = styled.div`
    width: 95%;
    height: 70%;
    position: relative;
    margin-top: 0 auto;
    left: 0%;
    background: beige;
    border-radius: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;

    .photo-logo {
        width: 30%;
        height: 30%;
        position: absolute;
        background-image: url(${photo});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }
    .input-blind {
        display: none;
    }

    .img-preview {
        width: 100%;
        height: 100%;
        background-size: contain;
        display: block;
        background-color: #ddd;
        cursor: pointer;
        background-repeat: no-repeat;
        background-position: center;
    }
`
export const UploadButton = styled.div`
    width: 30%;
    height: 5em;
    top: 84%;
    /* right: 0; */
    position: absolute;
    background-color: #4970ed;
    cursor: pointer;
    text-align: center;
    border-radius: 10px;
    color: #ffff;
    margin: 0 auto;

    div {
        margin: auto;
        width: 100%;
        height: 100%;
        width: 10em;
        height: 4em;
        font-family: NotoSansKR;
        font-size: 22px;
        font-weight: 500;
        color: #fff;
        letter-spacing: 5px;
    }
`



