import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Container, 
    RecordContainer, 
    ImageUploadBox, 
    ContentBox, 
    UploadButton,
    HashtagBox
} from './RecordPageStyle';

function RecordPage() {

    const dispatch = useDispatch();
    const inputValue = useRef(null);
    const [uploadImage, setUploadImage] = useState(null);
    const [inputContent, setInputContent] = useState('');
    const [inputHashtag, setInputHashtag] = useState('');

    function inputFileHandler (inputValue, setUploadImage) {
        const image = inputValue.current.files;
        setUploadImage(image[0]);
        console.log('rererere', inputValue)
    }

    function inputBtn(e, inputValue) {
        e.preventDefault();
        inputValue.current.click();
    }

    function contentFn (e) {
        setInputContent(e.target.value);
        console.log(e.target.value);
    }

    function hashtagFn (e) {
        setInputHashtag(e.target.value);
    }

    return (
        <Container>
            <RecordContainer>
                 <div className="content">
                    <div className="content-head">글 작성</div>
                    <ContentBox value={inputContent} onChange={(e) => contentFn(e)} placeholder="글 작성 되는곳 .."></ContentBox>
                    <HashtagBox value={inputHashtag} onChange={(e) => hashtagFn(e)} placeholder="해시태그.."></HashtagBox>
                </div>
                <div className="content">
                    <div className="content-head">이미지 업로드</div>
                    <ImageUploadBox>
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
                                className="img-preview" 
                                onClick={(e) => inputBtn(e, inputValue)} 
                                style={{ backgroundImage: `url('${URL.createObjectURL(uploadImage)}')`}}
                            >
                            </div> 
                            :
                            <div 
                                className="img-preview" 
                                onClick={(e) => inputBtn(e, inputValue)}
                            >
                                <div className="photo-logo"></div>
                            </div>
                        }
                    </ImageUploadBox>
                    <UploadButton><div>작성완료</div></UploadButton>
                </div>
            </RecordContainer>
        </Container>
    )
}

export default RecordPage
