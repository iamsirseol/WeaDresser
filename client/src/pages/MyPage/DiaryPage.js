import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
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
    // EmptyContainer,
    // EmptyIcon,
    // EmptyMesaage,
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
    
    useEffect(() => {
        
        function fetchFn () {
            
            // const url = process.env.REACT_APP_SERVER_URL || 
            const today = `${curDate.getFullYear()}-${curDate.getMonth() + 1}-${curDate.getDate()}`;
            const url = `${process.env.REACT_APP_SERVER_URL}/mypage/diary?date=${today}`;
            axios.get(url, { withCredentials: true })
                .then(data => {
                    console.log(data.data, '????????????')
                    setFetchedDiary(fetchedDiary.concat(data.data)); // dispatch??? ???????????????
                    dispatch(recordDataHandler(data)); // EditRecord??? ?????? ???????????? ??????
                    if (data.data[0].weather === 'Clouds') {
                        setWeatherIcon(cloud);
                        setWeatherDesc('??????');
                    }
                    if (data.data[0].weather === 'Snow') {
                        setWeatherIcon(snow);
                        setWeatherDesc('???');
                    }
                    if (data.data[0].weather === 'Rain' || data.data[0].weather === 'Thunderstrom') {
                        setWeatherIcon(rain);
                        setWeatherDesc('???');
                    } 
                    if (data.data[0].weather === 'Clear') {
                        setWeatherIcon(sun);
                        setWeatherDesc('??????');
                    }
                })
                .catch(err => console.log(err));;
            
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

    
    function showDotMenu (e) { // ?????? ???????????? ?????? ?????? ???????
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

    function deleteRecordButton (e) {
        let copiedFetchedData = fetchedDiary.slice();
        copiedFetchedData.splice(curSlide, 1);
        setFetchedDiary([...copiedFetchedData]);
        if (curSlide > 0 && curSlide === TOTAL_SLIDES) {
            setCurSlide(curSlide - 1);
        }
        if (fetchedDiary.length === 0 || curSlide === 0 || fetchedDiary[0] === undefined) {
            setIsLeftEndPage(true);
            setIsRightEndPage(true);
        }
        if (curSlide > 0 && curSlide === TOTAL_SLIDES - 1) {
            setIsRightEndPage(true);
        }

        setShowDeleteModal(false);
        let diaryId = fetchedDiary[curSlide].id
        let url = `${process.env.REACT_APP_SERVER_URL}/mypage/diary?diaryId=${diaryId}` // ?????????????????? ???????????? ??????????
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
                    <span className="temp-desc">????????????</span>
                    {fetchedDiary.length !== 0 ? <span className="temp-max">{(parseInt((fetchedDiary[0].tempMax - 273.15) * 10)) / 10}??C</span> : null}
                </div>
                <div>
                    <span className="temp-desc">????????????</span>
                    {fetchedDiary.length !== 0 ? <span className="temp-min">{(parseInt((fetchedDiary[0].tempMin - 273.15) * 10)) / 10}??C</span> : null}
                </div>
            </DateDataBar>
                <RecordContainer isEdit={isEdit}>
                    {
                        isEdit ? <EditRecord formId={"record"} curSlide={curSlide} setIsEdit={setIsEdit} setCurSlide={setCurSlide} fetchedDiary={fetchedDiary} />
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
                    { fetchedDiary[0] !== undefined ?
                        <DotMenuBox isEdit={isEdit} onClick={(e) => showDotMenu(e)}>
                            <DotMenu isDotMenu={isDotMenu}>
                                <DotMenuButton1 type="button" onClick={(e) => editRecordButton(e)}>??????</DotMenuButton1>
                                <DotMenuButton2 onClick={(e) => setShowDeleteModal(e)}>??????</DotMenuButton2>
                            </DotMenu>
                        </DotMenuBox>
                        : 
                        null
                        // <EmptyContainer>
                        //     <EmptyIcon></EmptyIcon>
                        //     <EmptyMesaage>????????? ?????? ????????????.<br/>?????? ?????????????????? ??? ???????????? ?????? ?????????.</EmptyMesaage>
                        // </EmptyContainer>
                    }
                </RecordContainer>
            {showDeleteModal ? <DeleteDiaryModal deleteRecordButton={deleteRecordButton} setShowDeleteModal={setShowDeleteModal} /> : null}
        </TabBody>
    )
}

export default DiaryPage
