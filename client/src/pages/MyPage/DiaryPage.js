import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { TabBody,
    DateDataBar,
    WeatherIcon,
    RecordContainer,
    ImageBox,
    ContentBox,
    HashtagBox,
    DotMenuBox,
    DotMenu,
    SlideContainer,
    Button as PrecButton,
    Button2 as NextButton,
    OutBox,
    InnerBox,
    DotMenuButton1,
    DotMenuButton2,
    EmptyContainer,
    EmptyIcon,
    EmptyMesaage,
} from './DiaryPageStyle';
import DeleteDiaryModal from '../../components/Modal/DeleteDiaryModal';
import { recordDataHandler } from '../../redux/actions/actions';
import EditRecord from '../../components/EditRecord/EditRecord';
import DatePicker from '../../components/DatePicker/DatePicker';
import sun from '../../images/sun.png';
import cloud from '../../images/cloud.png';
// import moon from '../../images/moon.png';
import rain from '../../images/rain.png';
import snow from '../../images/snow.png';
// import LoadingIndicator from './components/Loading/LoadingIndicator'



function DiaryPage() {

    const dispatch = useDispatch();
    const [fetchedDiary, setFetchedDiary] = useState([]);
    const [weatherIcon, setWeatherIcon] = useState(null); 
    const [weatherDesc, setWeatherDesc] = useState('');
    const [curSlide, setCurSlide] = useState(0);
    const [isDotMenu, setIsDotMenu] = useState(false);
    const [isLeftEndPage, setIsLeftEndPage] = useState(false);
    const [isRightEndPage, setIsRightEndPage] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [curDate, setCurDate] = useState(new Date());
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const imgSlideRef = useRef(null);
    // const selectedRecordData = useSelector(state => state.getRecordDataReducer);
    // console.log(selectedRecordData.getRecordData);
    // const dateData = useSelector(state => state.getDateDataReducer); // props로 전달해서상태 없데이트
    // console.log(`${curDate.getFullYear()}-${curDate.getMonth() + 1}-${curDate.getDate()}`);


    useEffect(() => { // 더미 데이터 확인용
        dispatch(recordDataHandler(fetchedDiary));
    }, []);
    
    useEffect(() => {
        
        async function fetchFn () {
            
            // const url = process.env.REACT_APP_SERVER_URL || 
            const today = `${curDate.getFullYear()}-${curDate.getMonth() + 1}-${curDate.getDate()}`;
            console.log('today!@#', today);
            const url = `http://localhost:80/mypage/diary?date=${today}`;
            const fetchData = await axios.get(url, { withCredentials: true})
                .catch(err => console.log(err));;
            
            setFetchedDiary(fetchData.data); // dispatch로 전달해주자
            console.log(fetchData.data)
            dispatch(recordDataHandler(fetchData)); // EditRecord로 상태 전달하기 위함
            if (fetchData.data) {
                if (fetchData.data.weather === 'Clouds') {
                    setWeatherIcon(cloud);
                    setWeatherDesc('흐림');
                }
                if (fetchData.data.weather === 'Snow') {
                    setWeatherIcon(snow);
                    setWeatherDesc('눈');
                }
                if (fetchData.data.weather === 'Rain' || fetchData.data.weather === 'Thunderstrom') {
                    setWeatherIcon(rain);
                    setWeatherDesc('비');
                } else {
                    setWeatherIcon(sun);
                    setWeatherDesc('맑음');
                }
            }
        }
        fetchFn ();
        
    }, [curDate]);

    const TOTAL_SLIDES = fetchedDiary.length - 1;
    function nextButton () {
        if (curSlide >= TOTAL_SLIDES) {
            return;
        } else {
            setCurSlide(curSlide + 1);
        }
    }
    function prevButton () {
        if (curSlide === 0) {
            return;
        } else {
            setCurSlide(curSlide - 1);
        }
    }

    useEffect(() => {
        imgSlideRef.current.style.transition = "all 0.5s ease-in-out";
        imgSlideRef.current.style.transform = `translateX(-${curSlide}00%)`; 
    }, [curSlide]);

    
    function showDotMenu (e) { // 외부 클릭해도 닫기 기능 구현?
        e.preventDefault();
        setIsDotMenu(!isDotMenu);
    }
    
    function editRecordButton (e) {
        e.preventDefault();
        setIsEdit(!isEdit);
        setIsDotMenu(false);
        setIsLeftEndPage(true);
        setIsRightEndPage(true);
    }
    
    useEffect(() => {
        if (curSlide === 0) {
            setIsLeftEndPage(true);
        } else {
            setIsLeftEndPage(false);
        }

        if (curSlide === TOTAL_SLIDES) {
            setIsRightEndPage(true);
        } else {
            setIsRightEndPage(false);
        }

    }, [curSlide, isLeftEndPage, isRightEndPage, fetchedDiary]);

    function isDeleteModal () {
        console.log('ccc')
        setShowDeleteModal(true);
    }

    function deleteRecordButton (e) {
        let copiedFetchedData = fetchedDiary.slice();
        copiedFetchedData.splice(curSlide, 1);
        setFetchedDiary([...copiedFetchedData]);
        if (curSlide > 0 && curSlide === TOTAL_SLIDES) {
            setCurSlide(curSlide - 1);
        }
        if (fetchedDiary.length === 0 || curSlide === 0) {
            setIsLeftEndPage(true);
            setIsRightEndPage(true);
        }
        if (curSlide > 0 && curSlide === TOTAL_SLIDES - 1) {
            setIsRightEndPage(true);
        }
        setShowDeleteModal(false);
        let diaryId = fetchedDiary[curSlide].id
        // console.log(diaryId, 'idididididdi')
        let url = `http://localhost:80/mypage/diary?diaryId=${diaryId}` // 날씨데이터도 넘겨줘야 하는가?
        axios.delete(url, { withCredentials: true })
            .then(res => {console.log('delete successfully');})
            .catch(err => {console.log(err);})
    }

    return (
        <TabBody>
            <DateDataBar>
                <div>
                    <DatePicker curDate={curDate} setCurDate={setCurDate} />
                </div>
                <div>
                    <WeatherIcon icon={weatherIcon}></WeatherIcon>
                    <span className="weather-desc">{weatherDesc}</span>
                </div>
                <div>
                    <span className="temp-desc">최고기온</span>
                    {fetchedDiary.length !== 0 ? <span className="temp-max">{(parseInt((fetchedDiary[0].tempMax - 273.15) * 10)) / 10}°C</span> : null}
                </div>
                <div>
                    <span className="temp-desc">최저기온</span>
                    {fetchedDiary.length !== 0 ? <span className="temp-min">{(parseInt((fetchedDiary[0].tempMin - 273.15) * 10)) / 10}°C</span> : null}
                </div>
            </DateDataBar>
                <RecordContainer isEdit={isEdit}>
                    {
                        isEdit ? <EditRecord formId={"record"} curSlide={curSlide} setIsEdit={setIsEdit} fetchedDiary={fetchedDiary} />
                        :
                        <SlideContainer >
                            <OutBox ref={imgSlideRef}>
                        { fetchedDiary.length !== 0 ? 
                            fetchedDiary.map((el) => 
                                <InnerBox key={el.id}>
                                    <ImageBox img={el.image} ></ImageBox>
                                    <ContentBox>{el.content}</ContentBox>
                                    <HashtagBox>{el.hashtag.map((tag) => 
                                        <span key={tag}>{`#${tag}`}</span>)}
                                    </HashtagBox>
                                </InnerBox>
                            )
                        : null }
                            </OutBox>
                        </SlideContainer>
                    }
                    { isLeftEndPage || isEdit ? null : <PrecButton onClick={prevButton}></PrecButton> }
                    { isRightEndPage || isEdit ? null : <NextButton onClick={nextButton}></NextButton> }
                        <DotMenuBox isEdit={isEdit} onClick={(e) => showDotMenu(e)}>
                            <DotMenu isDotMenu={isDotMenu}>
                                <DotMenuButton1 type="button" onClick={(e) => editRecordButton(e)}>수정</DotMenuButton1>
                                <DotMenuButton2 onClick={(e) => setShowDeleteModal(e)}>삭제</DotMenuButton2>
                            </DotMenu>
                        </DotMenuBox>
                </RecordContainer>
                {/* <EmptyContainer>
                    <EmptyIcon></EmptyIcon>
                    <EmptyMesaage>작성한 글이 없습니다.<br/>글을 작성하시려면 위 아이콘을 클릭 하세요.</EmptyMesaage>
                </EmptyContainer> */}
            {showDeleteModal ? <DeleteDiaryModal deleteRecordButton={deleteRecordButton} setShowDeleteModal={setShowDeleteModal} /> : null}
        </TabBody>
    )
}

export default DiaryPage
