import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
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
    SlideContainer,
    Button,
    Button2,
    BOX
} from './DiaryPageStyle';
import DatePicker from '../../components/DatePicker/DatePicker';
import sun from '../../images/sun.png';
import cloud from '../../images/cloud.png';
import moon from '../../images/moon.png';
import rain from '../../images/rain.png';
import snow from '../../images/snow.png';
import 뽀시 from '../../images-mock(추후삭제)/뽀시.jpeg';
import 군침이 from '../../images-mock(추후삭제)/군침이.jpeg';
import 군침이2 from '../../images-mock(추후삭제)/군침이2.jpeg';

function DiaryPage() {

    const [fetchedDiary, setFetchedDiary] = useState([
    {
        id: 1,
        image: 뽀시,
        content: '군침이 싹도노',
        hashtag: 'hello, world'
    },
    {
        id: 2,
        image: 군침이,
        content: '아~ 피곤하다',
        hashtag: 'good, job'
    },
    {
        id: 3,
        image: 군침이2,
        content: '오늘날씨 비옴',
        hashtag: '깡'
    }
]);
    const [weatherIcon, setWeatherIcon] = useState(moon);
    const [weatherDesc, setWeatherDesc] = useState('맑음'); // weatherDate (51번째 줄) 전체를 그냥 상태로 저장할지?
    const [curSlide, setCurSlide] = useState(0);
    const [isDotMenu, setIsDotMenu] = useState(false);
    const imgSlideRef = useRef(null);
    const contentSlideRef = useRef(null);
    const hashtagSlideRef = useRef(null);

    // const [isEdit, setIsEdit] = useState(false);
    // const dateData = useSelector(state => state.getDateDataReducer);


    // const url = process.env.REACT_APP_SERVER_URL || 
    const url = 'http://localhost:80/mypage/diary' // develop환경때는 환경변수 x

    useEffect(() => {

        async function fetchFn () {
            const body = {} // selectedData가 가야할듯 // 현재 날짜 기준을 바디로 보내서 서버에서 해당 날짜 조회된 데이터를 받아옴
            const fetchData = await axios.get(url, body, { withCredentials: true, });
            // fetchData 자체를 상태로 관리 // 상태 나눠서 관리하지 말고 하나의 상태로 관리!!!
            setFetchedDiary(fetchData);
            if (fetchData.weatherData.weather) {
                if (fetchData.weatherData.weather[0].main === 'Clouds') {
                    setWeatherIcon(cloud);
                    setWeatherDesc('흐림');
                }
                if (fetchData.weatherData.weather[0].main === 'Snow') {
                    setWeatherIcon(snow);
                    setWeatherDesc('눈');
                }
                if (fetchData.weatherData.weather[0].main === 'Rain' || fetchData.weatherData.weather[0].main === 'Thunderstrom') {
                    setWeatherIcon(rain);
                    setWeatherDesc('비');
                } else {
                    setWeatherIcon(sun);
                    setWeatherDesc('맑음');
                }
            }
        }
        fetchFn ();
        
    }, []);

    const TOTAL_SLIDES = fetchedDiary.length - 1;
    function nextButton () {
        if (curSlide >= TOTAL_SLIDES) {
            // setCurSlide(0);
            return;
        } else {
            setCurSlide(curSlide + 1);
        }
    }
    function prevButton () {
        if (curSlide === 0) {
            // setCurSlide(TOTAL_SLIDES);
            return;
        } else {
            setCurSlide(curSlide - 1);
        }
    }

    // function leftClick () {
    //     let slideIdx = curSlide + 1;
    //     if (slideIdx === TOTAL_SLIDES + 1) { // 2
    //         // return;
    //         slideIdx = 0;
    //         setCurSlide(0)
    //     } else {
    //         setCurSlide(slideIdx);
    //     }
    //     console.log(slideIdx, 'left')
    //     imgSlideRef.current.style.transition = "all 0.5s ease-in-out";
    //     imgSlideRef.current.style.transform = `translateX(-${slideIdx * 47.8}em)`;
    //     console.log(imgSlideRef.current.style.transform, '!@#@!#')
    // }
    // function rightClick () {
    //     let curPosition = imgSlideRef.current.style.transform.split
    //     let slideIdx = curSlide - 1; // 2
    //     if (slideIdx === TOTAL_SLIDES + 1) { // TOTAL_SLIDES 값은 2
    //         slideIdx = 0;
    //         setCurSlide(0)
    //     }
    //     console.log(slideIdx, 'right')
    //     setCurSlide(slideIdx);
    //     imgSlideRef.current.style.transition = "all 0.5s ease-in-out";
    //     imgSlideRef.current.style.transform = `translateX(-${slideIdx * 47.8}em)`;
    //     console.log(imgSlideRef.current.style.transform, '^&$#')

    // }

    useEffect(() => {
        imgSlideRef.current.style.transition = "all 0.5s ease-in-out";
        imgSlideRef.current.style.transform = `translateX(-${curSlide}00%)`; 
    }, [curSlide]);

    function showDotMenu (e) { // 외부 클릭해도 닫기 기능 구현?
        e.preventDefault();
        setIsDotMenu(!isDotMenu);
    }

    function deleteRecord (e) { // index를 가져온다면 삭제?
        // console.log('work?')
        // console.log(scrollState);
        // let copiedDiaryImage = diaryImage.slice();
        // copiedDiaryImage = copiedDiaryImage.splice(scrollState, 1);
        // setDiaryHashtag([...copiedDiaryImage]);

        // let copiedDiaryContent = diaryContent.slice();
        // copiedDiaryContent = copiedDiaryContent.splice(scrollState, 1);
        // setDiaryContent([...copiedDiaryContent]);

        // let copiedDiaryHashtag = diaryHashtag.slice();
        // copiedDiaryHashtag = copiedDiaryHashtag.splice(scrollState, 1);
        // setDiaryHashtag([...copiedDiaryHashtag]);

        // let body = { diaryImage, diaryContent, diaryHashtag } // 날씨데이터도 넘겨줘야 하는가?
        // axios.delete(url , body, {
        //     withCredentials: true,
        // })
        //     .then(res => {
        //         console.log('delete successfully');
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
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
                        <DatePicker />
                    </div>
                    <div>
                        <WeatherIcon icon={weatherIcon}></WeatherIcon>
                        <span className="weather-desc">{weatherDesc}</span>
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
                    <SlideContainer ref={imgSlideRef}>
                    {
                        fetchedDiary.map((el) => 
                            <BOX key={el.id}>
                                <ImageBox img={el.image} ></ImageBox>
                                <ContentBox>{el.content}</ContentBox>
                                <HashtagBox>{el.hashtag.split(', ').map((tag, idx) => 
                                    <span key={idx * 10}>{`#${tag}`}</span>)}
                                </HashtagBox>
                            </BOX>
                        )
                    }
                    </SlideContainer>
                    <Button onClick={prevButton}>prev</Button>
                    <Button2 onClick={nextButton}>next</Button2>
                </RecordContainer>
                <DotMenuBox onClick={(e) => showDotMenu(e)}><div className="dot-menu"></div>
                    <DotMenu isDotMenu={isDotMenu}> 
                        <div className="edit-btn">수정</div>
                        <div className="delete-btn" onClick={(e) => deleteRecord(e)}>삭제</div>
                    </DotMenu>
                </DotMenuBox>
            </TabBody>
        </Container>
    )
}

export default DiaryPage
