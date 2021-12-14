import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import close from '../../images/close_ic.png';
import photo from '../../images/photo_ic.svg';
import axios from 'axios';

// import { recordDataHandler } from '../../redux/actions/actions';

function EditRecord({ curSlide }) {

    const history = useHistory();
    const selectedRecord = useSelector(state => state.getRecordDataReducer);
    const [editImage, setEditImage] = useState(selectedRecord.getRecordData.record[curSlide].image);
    const [previewImage, setPreviewImage] = useState(null);
    const [editContent, setEditContent] = useState(selectedRecord.getRecordData.record[curSlide].content);
    const [editHashtag, setEditHashtag] = useState(selectedRecord.getRecordData.record[curSlide].hashtag);
    const inputValue = useRef(null);
    console.log(selectedRecord.getRecordData.record,'!!')
    // const trimmedRecord = selectedRecord.getRecordData.record.slice();
    
    function inputFileHandler (inputValue) {
        const image = inputValue.current.files;
        setEditImage(image[0]);
        if (image[0]) {
            setPreviewImage(window.URL.createObjectURL(image[0]));
        }
    }

    function inputImageFn (e, inputValue) {
        e.preventDefault();
        inputValue.current.click();
    }

    function contentFn (e) {
        e.preventDefault();
        setEditContent(e.target.value);
    }

    function removeHashtagFn (removeTag) {
        if (editHashtag.length === 0) return;
        let filtered = editHashtag.slice().split(', ').filter(el => el !== removeTag).join(', ');
        console.log(filtered);
        // if (filtered.length === 0) return;
        setEditHashtag(filtered);
    }
    
    function inputHashtagFn (e) {
        if (e.target.value === '') return;
        else if (editHashtag.split(', ').includes(e.target.value)) return;
        // else if (inputHashtag.length > 10) return;
        else {
            const trimmedHashtag = e.target.value.split('').filter(el => el !== '#').filter(el2 => el2 !== ' ').join('');
            setEditHashtag(editHashtag+ ', ' + trimmedHashtag);
        }
        e.target.value = '';
    }

    const formData = new FormData();
    function editComplete (e) {

        formData.append('image', editImage);
        formData.append('content', editContent);
        formData.append('hashtag', editHashtag);
        formData.append('share'); // share 어디위치에 넣을지 잠시 고민..

        // const url = process.env.REACT_APP_SERVER_URL || 
        const url = 'http://localhost:80/diary' // server랑 확인할때 환경변수 x
        axios.patch(url, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }},
            { 
                withCredential: true,
        })
            .then(res => console.log('edit successfully'))
            .catch(err => console.log(err))

        history.push('/mypage/diary');
    }

    return (
        <EditForm>
            <EditImageBox onSubmit={(e) => editComplete(e)}>
                <InputImage ref={inputValue} onChange={(e) => inputFileHandler(inputValue)}></InputImage>
                {
                    editImage ? 
                    <PreviewImage previewImage={previewImage} onClick={(e) => inputImageFn(e, inputValue)}></PreviewImage>
                    :
                    <PreviewImage onClick={(e) => inputImageFn(e, inputValue)}>
                        <PhotoLogo></PhotoLogo>
                        <UploadDesc>클릭하여 이미지를 추가하세요.</UploadDesc>
                    </PreviewImage>
                }
            </EditImageBox>
            <EidtContentBox defaultValue={editContent} onChange={(e) => contentFn(e)}></EidtContentBox>
            <EditHashtagBox>{editHashtag.split(', ').map((tag) => 
                <SingleHashtag key={tag}>
                    <span>{`#${tag}`}</span>
                    <span className="close-button" onClick={() => removeHashtagFn(tag)}></span>
                </SingleHashtag>)}
                <InputHashtag onKeyUp={(e) => e.key === "Enter" ? inputHashtagFn(e) : null}></InputHashtag>
            </EditHashtagBox>
        </EditForm>
    )
}

export default EditRecord

const EditForm = styled.form`
    /* display: flex; */
`
const EditImageBox = styled.div`
    width: 47.8rem;
    height: 32.4em;
`
const InputImage = styled.input.attrs(props => ({
    name: "image",
    type: "file",
    id : "image"
}))`
    display: none;
`
const PreviewImage = styled.div`
    width: 47.8rem;
    height: 32.4em;
    /* display: block; */
    cursor: pointer;
    background-image: url(${props => props.previewImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`
const PhotoLogo = styled.div`
    width: 11em;
    height: 10em;
    margin: 0 auto;
    top: 26%;
    position: relative;
    background-image: url(${photo});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`
const UploadDesc = styled.div`
    width: 100%;
    font-family: NotoSansKR;
    position: relative;
    font-size: 1.3em;
    font-weight: 500;
    line-height: 16;
    text-align: center;
    color: #6b6d71;
`
const EidtContentBox = styled.textarea`
    width: 47.0rem;
    height: 13rem;
    font-family: NotoSansKR;
    font-size: 1.4em;
    line-height: 2.5;
    letter-spacing: normal;
    padding-left: 0.5em;
    color: #3b3c3c;
    border: none;
    resize: none;
    background-color: #f9f9fb;

`
const EditHashtagBox = styled.ul`
    width: 47.8rem;
    height: 8rem;
    padding-top: 0.5em;
    position: relative;
    background: wheat;
    display: flex;
    flex-wrap: wrap;
`
const SingleHashtag = styled.li`
    width: auto;
    height: 3rem;
    align-items: center;
    justify-content: center;
    line-height: 2;
    color: #fff;
    padding: 0 8px;
    font-size: 1.4rem;
    border-radius: 4px;
    margin: 0 4px 4px 0.5em;
    background-color: #5694F8;
    letter-spacing: 1px;
    display: flex;
    :hover {
        background-color: #3471d5;
    }
    .close-button {
        width: 1.2rem;
        height: 1.2rem;
        margin-left: 5px;
        margin-bottom: 0px;
        background-image: url(${close});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        cursor: pointer;
    }
`
const InputHashtag = styled.input`
        width: 47.8rem;
        border: none;
        resize: none;
        padding: 0.1em 0.2em 0.1em 0.5em;
        background: wheat;
        align-items: center;
        font-size: 1.4rem;
        letter-spacing: 2px;
        color: #93969b;
`