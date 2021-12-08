import { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
// import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container,
    PageHeader,
    UserIcon,
    MyPageTabBox,
    TabBody,
    DateDataBar,
    WeatherIcon,
    RecordContainer,
    ImageBox,
    ContentBox,
    HashtagBox,
    DotMenuBox,
    DotMenu,

} from './DiaryPageStyle';
import DatePicker from '../../components/Datepicker/DatePicker';
import sun from '../../images/sun.png';
import cloud from '../../images/cloud.png';
// import moon from '../../images/moon.png';
import rain from '../../images/rain.png';
import snow from '../../images/snow.png';
import gunchim1 from '../../images-mock(추후삭제)/군침이.jpeg';
import gunchim2 from '../../images-mock(추후삭제)/군침이2.jpeg';

function DiaryPage() {

    const [diaryImage, setTheDayImage] = useState(gunchim2);
    const [diaryContent, setDiaryContent] = useState('소화가 안되노')
    const [diaryHashtag, setDiaryHashtag] = useState(['군침이', '싹도노']) // 텍스트로 할지 태그박스로 할지??
    const [isDotMenu, setIsDotMenu] = useState(false);
    const [isOpenedPicker, setIsOpenedPicker] = useState(false);


    function showDotMenu (e) { // 외부 클릭해도 닫기 기능 구현?
        e.preventDefault();
        setIsDotMenu(!isDotMenu);
    }

    function noShowDotMenu (e) {
        e.preventDefault();
        setIsDotMenu(!isDotMenu);
    }
    function showDatePicker (e) {
        e.preventDefault();
        setIsOpenedPicker(!isOpenedPicker);
    }


    return (
        <Container>
            <PageHeader>
                <UserIcon></UserIcon>
                <h1>MY PAGE</h1>
            </PageHeader>
            <MyPageTabBox>
                <div className="diary-tab">유저 다이어리</div>
                <div className="userinfo-tab">개인 정보 수정</div>
            </MyPageTabBox>
            <TabBody>
                <DateDataBar>
                    <div>
                        <span className="calendar-box" onClick={() => showDate()}></span>
                        <span className="date-box">12월 08일</span>
                    </div>
                    <div>
                        <WeatherIcon icon={sun}></WeatherIcon>
                        <span className="weather-desc">맑음</span>
                    </div>
                    <div>
                        <span className="temp-desc">최고기온</span>
                        <span className="temp-max">12°C</span>
                    </div>
                    <div>
                        <span className="temp-desc">최저기온</span>
                        <span className="temp-min">12°C</span>
                    </div>
                </DateDataBar>
                <RecordContainer>
                    <ImageBox diaryImage={diaryImage}></ImageBox>
                    <ContentBox>{diaryContent}</ContentBox>
                    <HashtagBox>{diaryHashtag}</HashtagBox>
                </RecordContainer>
                <DotMenuBox onClick={(e) => showDotMenu(e)} onClickOutside={noShowDotMenu}><div className="dot-menu"></div>
                    <DotMenu isDotMenu={isDotMenu}> 
                        <div className="edit-btn">수정</div>
                        <div className="delete-btn">삭제</div>
                    </DotMenu>
                </DotMenuBox>
            </TabBody>
        </Container>
    )
}

export default DiaryPage
