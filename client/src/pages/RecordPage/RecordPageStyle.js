import styled from 'styled-components';
import photo from '../../images/photo.png'

export const RecordContainer = styled.div`
    width: 100%; 
    height: 100vh; 
    position: relative;
    top: 0;
    left: 0;
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
    background: linear-gradient(124deg, #5b81fa 13%, #0852a8 98%);
`

export const ImageUploadBox = styled.div`
    width: 30em;
    height: 60em;
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    background: beige;
    border-radius: 15px;
    display: flex;
    align-items: center;

    .photo {
        margin: 0 auto;
        width: 15em;
        height: 15em;
        background-image: url(${photo});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }
`

export const ContentBox = styled.textarea`
    width: 50em;
    height: 40em;
    position: absolute;
    top: 60%;
    left: 65%;
    transform: translate(-50%, -75%);
    background: beige;
    display: flex;
    align-items: center;
    border: none;
    resize: none;
`

export const TagBox = styled.textarea`
    width: 50em;
    height: 10em;
    position: absolute;
    top: 90%;
    left: 65%;
    transform: translate(-50%, -75%);
    background: beige;
    display: flex;
    align-items: center;
    border: none;
    resize: none;
`