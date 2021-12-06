import styled from 'styled-components';
import photo from '../../images/photo_ic.svg';
import close from '../../images/close_ic.png';
import check from '../../images/check_ic_sel.svg';

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
    width: 100em; 
    min-height: 51em; 
    position: absolute;
    display: flex;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    justify-content: space-between;
    
    .content-left {
        width: 52em;
        min-height: 51em;
        border-radius: 4px;
        border: solid 1px #ddd;
        background-color: #fff;
        text-align: center;
    }
    .content-right {
        width: 47em;
        height: 40em;
        border-radius: 4px;
        border: solid 1px #ddd;
        background-color: #fff;
        text-align: center;
    }
    .content-head {
        height: 8%;
        font-family: NotoSansKR;
        font-size: 20px;
        line-height: 1.2;
        color: #17191d;
        text-align: center;
        padding-top: 5%;
        font-weight: bold;
    }
`

export const ContentBox = styled.textarea`
    /* padding-left: 1.5em;
    padding-top: 1em; */
    padding: 1em 1.5em 0em 1em;
    width: 42rem;
    height: 25rem;
    /* position: absolute; */
    background-color: #f9f9fb;
    /* align-items: center; */
    border: none;
    resize: none;
    font-size: 1.4em;
    letter-spacing: 2px;
    color: #93969b;

`

export const HashtagBox = styled.div`
    margin: 1em auto;
    width: 43rem;
    min-height: 10rem;
    padding: 0.5em 1em 0.5em 1em;
    background-color: #f9f9fb;
    align-items: center;
    font-size: 1.4em;
    letter-spacing: 2px;
    color: #93969b;
 
    ul {
        display: flex;
        flex-wrap: wrap;

        .hashtag {
            width: auto;
            height: 2.8rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            padding: 0 8px;
            font-size: 1.4rem;
            list-style: none;
            border-radius: 4px;
            margin: 0 4px 4px 0;
            background-color: #5694F8;
            
            .close-button {
                width: 1.2rem;
                height: 1.2rem;
                margin-left: 5px;
                margin-bottom: 1px;
                background-image: url(${close});
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
                cursor: pointer;
            }
        }
    }
    .input-tag {
        width: 42rem;
        border: none;
        resize: none;
        padding: 0.1em 0.2em 0.1em 0.5em;
        background-color: #f9f9fb;
        align-items: center;
        font-size: 1.4rem;
        letter-spacing: 2px;
        color: #93969b;
    }
`
export const ShareBox = styled.div`
    width: 46rem;
    min-height: 3rem;
    margin: 0 auto;
    position: relative;
    /* background-color: yellow; */
    display: flex;
    .share-check-true {
        width: 2.7rem;
        height: 2.7rem;
        background-color: #4970ed;
        background-image: url(${check});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        border: solid 1px #4970ed;
    }
    .share-check-false {
        width: 2.7rem;
        height: 2.7rem;
        background-color: #d0d0d0;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        border: solid 1px #f9f9fb;
        /* border-color: #4970ed; */
    }
    .share-desc {
        width: auto;
        margin: 0.3rem 0 0 1.5rem;
        height: 2.3rem;
        font-family: NotoSansKR;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        letter-spacing: normal;
        color: #000;

    }
`

export const ImageUploadBox = styled.div`
    width: 41em;
    height: 30.5em;
    position: absolute;
    margin: 1em 2.8em;
    background-color: #f9f9fb;
    border: ${props => props.uploadImage ? null : "solid 2px #b1b8d5"};
    border-style: ${props => props.uploadImage ? null : "dashed"};
    cursor: pointer;

    .photo-logo {
        width: 11em;
        height: 10em;
        margin: 0 auto;
        padding-top: 13em;
        background-image: url(${photo});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }
    .input-blind {
        display: none;
    }
    .upload-desc {
        width: 100%;
        height: 1em;
        font-family: NotoSansKR;
        font-size: 1.3em;
        font-weight: 500;
        line-height: 0;
        text-align: center;
        color: #6b6d71;
    }
    .img-preview {
        width: 41em;
        height: 30.5em;
        background-size: contain;
        display: block;
        background-color: #f9f9fb;
        cursor: pointer;
        background-repeat: no-repeat;
        background-position: center;
    }
    
`
export const UploadButton = styled.div`
    margin: 1em auto;
    padding-top: 1.1em;
    width: 18.8em;
    height: 2.5em;
    top: 85%;
    position: relative;
    cursor: pointer;
    text-align: center;
    border-radius: 10px;
    font-family: NotoSansKR;
    font-size: 2.5em;
    color: #fff;
    font-weight: 500;
    letter-spacing: 5px;
    background-color: #4970ed;
`