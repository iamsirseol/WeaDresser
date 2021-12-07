import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router';
// import { FileUploader } from "react-drag-drop-files";
import axios from 'axios';
import { Container, 
    RecordContainer, 
    ImageUploadBox, 
    ContentBox, 
    UploadButton,
    HashtagBox,
    ShareBox,
} from './RecordPageStyle';

function RecordPage() {

    // const dispatch = useDispatch();
    const inputValue = useRef(null);
    const [uploadImage, setUploadImage] = useState(null);
    const [inputContent, setInputContent] = useState('');
    const [inputHashtag, setInputHashtag] = useState(["#구찌갱", "#국밥문신충"]);
    const [previewImage, setPreviewImage] = useState(null);
    const [sharePost, setSharePost] = useState(true);
    const weatherData = useSelector(state => state.getWeatherDataReducer);

    function inputFileHandler (inputValue, setUploadImage) {
        const image = inputValue.current.files;
        setUploadImage(image[0]);
        if (image[0]) {
            setPreviewImage(window.URL.createObjectURL(image[0]));
        } 
        // window.URL.revokeObjectURL(previewImage); // 해당작업을 주석하여도 url이 변경되는 현상이 일어나지 않음
    }

    function inputBtn(e, inputValue) {
        e.preventDefault();
        inputValue.current.click();
    }

    
    function contentFn (e) { // 내용 입력함수
        e.preventDefault();
        setInputContent(e.target.value);
    }

    function hashtagFn (e) { // 해시태그 입력함수
        if (e.target.value === '') return;
        else if (inputHashtag.includes(e.target.value)) return;
        else setInputHashtag([...inputHashtag, `#${e.target.value.split(' ').join('')}`]);
        e.target.value = '';
    }

    function removeHashtag (removeIdx) { // 해시태그 삭제함수
        const newInputHashtag = inputHashtag.filter((a, idx) => {
            return idx !== removeIdx;
        });
        setInputHashtag(newInputHashtag);
    }

    function isShareCheck () {
        setSharePost(!sharePost);
        console.log('받지?', sharePost);
    }

    function submitFn (e) { // 작성완료 버튼
        e.preventDefault();
        const formData = new FormData();
        // user 정보도 담아서 줘야하지 않을까 window.sesstionStorage.getItem() 
        // 아니면 server에서 쿠키에 담긴 데이터? // 위 처럼 보내지 않고 server에서 쿠키사용
        formData.append('weatherData', weatherData);
        formData.append('image', uploadImage);
        formData.append('content', inputContent);
        formData.append('hashtag', inputHashtag);
        formData.append('share', sharePost);

        // const url = process.env.REACT_APP_SERVER_URL || 
        const url = 'http://localhost:80/diary' // server랑 확인할때 환경변수 x
        axios.post(url, formData, { 
            headers: {
                'content-type': 'multipart/form-data'
            }},
            { withCredential: true 
        })
            .then(res => {}) // axios.post면 res를 보내 줄 필요가 없는지?
            .catch(err => {console.log(err)});
            // history -> diary페이지 -> 다시 get요청 (가장 최신 글)
    }

    // useEffect(() => {
        
    // }, [inputContent, inputHashtag])

    return (
        <Container>
            <RecordContainer>
                 <div className="content-left">
                    <div className="content-head">글 작성</div>
                    <ContentBox value={inputContent} onChange={(e) => contentFn(e)} placeholder="글을 작성해주세요."></ContentBox>
                    <HashtagBox value={inputHashtag} >
                        <ul>
                            {inputHashtag.map((hashtag, idx) => (
                                <li className='hashtag' key={idx}>
                                    <span>{hashtag}</span>
                                    <span className="close-button" onClick={() => removeHashtag(idx)}></span>
                                </li>
                            ))}
                        </ul>
                        {
                            inputHashtag.length > 0 ? 
                            <input className="input-tag" onKeyUp={(e) => e.key === "Enter" ? hashtagFn(e) : null}></input>
                            : <input className="input-tag" onKeyUp={(e) => e.key === "Enter" ? hashtagFn(e) : null} placeholder="해시태그를 입력해주세요. (예 : 버버리트렌치코트)"></input>
                        }
                    </HashtagBox>
                    <ShareBox>
                        {
                            sharePost ? 
                            <div className="share-check-true" onClick={isShareCheck}></div>
                            :
                            <div className="share-check-false" onClick={isShareCheck}></div>
                        }
                        <div className="share-desc">OOTD 공유? (멘트 뭘로할지?)</div>
                    </ShareBox>
                </div>
                <div className="content-right">
                    <div className="content-head">이미지 업로드</div>
                    <ImageUploadBox uploadImage={uploadImage}>
                        <input 
                            name="image" 
                            className="input-blind" 
                            ref={inputValue} 
                            type="file"
                            onChange={(e) => inputFileHandler(inputValue, setUploadImage)} 
                        />
                        {
                            uploadImage ? 
                            <div 
                                className="img-preview" onClick={(e) => inputBtn(e, inputValue)} 
                                style={{ backgroundImage: `url('${previewImage}')`}}
                            >
                            </div>
                            :
                            <div className="img-preview" onClick={(e) => inputBtn(e, inputValue)}>
                                <div className="photo-logo"></div>
                                <div className="upload-desc">클릭하여 이미지를 추가하세요.</div>
                            </div>
                        }
                    </ImageUploadBox>
                    <UploadButton onClick={submitFn}>작성완료</UploadButton>
                </div>
            </RecordContainer>
        </Container>
    )
}

export default RecordPage
