import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import axios from "axios";
import {
    LowerPageContainer,
    LowerPageBox,
    UserWore,
    UserWoreImage,
    UserWoreText,
    BestDresser,
    BestDresserImage,
    BestDresserText,
    OotdListBtn,
    NoDataImage
} from "./LandingPageLowerStyle"
import OotdLikeCont from "../../components/OotdList/OotdLikeCont";
import {OotdListBoxItem} from  "../../components/OotdList/OotdListBoxStyle"
import { IconContext } from "react-icons";
import {AiOutlineArrowRight} from "react-icons/ai";
import { navTop } from '../../redux/actions/actions';

function LandingPageLower(){
    const dispatch = useDispatch();
    const lowerTop = useRef(null);
    const [woreImage, setWereImage] = useState('');
    const [bestImage, setBestImage] = useState('');
    const [userName, setUserName] = useState('');
    const [createAt, setCreateAt] = useState('');
    const [likeWhetherLeft, setLikeWhetherLeft] = useState('');
    const [likeCountsLeft, setLikeCountsLeft] = useState('');
    const [diariesIdLeft, setDiariesIdLeft] = useState('');
    const [likeWhetherRight, setLikeWhetherRight] = useState('');
    const [likeCountsRight, setLikeCountsRight] = useState('');
    const [diariesIdRight, setDiariesIdRight] = useState('');
    const [isData, setIsData] = useState(true);
    const curTemp = useSelector(state => state.getWeatherDataReducer.main);
    const { isLogin } = useSelector(state => state.isLoginReducer);

    function userWoreImageRequest(){
        let tempMax = (parseInt((curTemp.temp_max - 273.15) * 10)) / 10
        let tempMin = (parseInt((curTemp.temp_min - 273.15) * 10)) / 10
        let url = isLogin ? `${process.env.REACT_APP_SERVER_URL}/user` : `${process.env.REACT_APP_SERVER_URL}`
        axios.get(`${url}?tempMax=${tempMax}&tempMin=${tempMin}`, {withCredentials: true})
        .then( res => {
            console.log(res.data[0])
            setIsData(true);
            setWereImage(res.data[0].diariesImage);
            setBestImage(res.data[1].diariesImage)
            setUserName(res.data[0].userName)
            setCreateAt(`${res.data[0].createdAt.split('T')[0].split('-')[0]}??? ${res.data[0].createdAt.split('T')[0].split('-')[1]} ??? ${res.data[0].createdAt.split('T')[0].split('-')[2]}???`)
            setLikeWhetherLeft(res.data[0].likeWhether);
            setLikeCountsLeft(res.data[0].likeCounts);
            setDiariesIdLeft(res.data[0].id);
            setLikeWhetherRight(res.data[1].likeWhether);
            setLikeCountsRight(res.data[1].likeCounts);
            setDiariesIdRight(res.data[1].id);
        }).catch( err => {
            setIsData(false);
        })
    }

    useEffect(() => {
        dispatch(navTop(lowerTop.current.offsetTop));
    }, [])

    useEffect(() => {
        if(curTemp){
            userWoreImageRequest();
        }
    }, [curTemp, isLogin])

    return(
        <LowerPageContainer ref={lowerTop}>
            <LowerPageBox>
                <UserWore>
                {isData ? 
                <>
                    <UserWoreImage woreUrl={woreImage}>
                        <OotdListBoxItem className="ootd-list-box-item"></OotdListBoxItem>
                    </UserWoreImage>
                    <UserWoreText>?????? ????????? {createAt} {userName}??????<br />????????? ???????????????</UserWoreText>
                    <OotdLikeCont likeCounts={likeCountsLeft} likeWhether={likeWhetherLeft ? likeWhetherLeft : false} diariesId={diariesIdLeft} likeClass={"user-wore-like"}/>
                </>
                    : <NoDataImage>?????? ????????? ?????? ????????? ?????? ?????? ??????????????? ??????????????</NoDataImage>
                }
                </UserWore>
                <BestDresser>
                {isData ?
                <>
                    <BestDresserImage bestUrl={bestImage}>
                        <OotdListBoxItem className="ootd-list-box-item"></OotdListBoxItem>
                    </BestDresserImage>
                    <BestDresserText>?????? ?????? ?????? ????????? ?????? ??????</BestDresserText>
                    <OotdLikeCont likeCounts={likeCountsRight} likeWhether={likeWhetherRight ? likeWhetherRight : false} diariesId={diariesIdRight} likeClass={"best-ootd-like"}/>
                </>
                    : <NoDataImage>?????? ????????? ?????? ????????? ?????? ?????? ??????????????? ??????????????</NoDataImage>
                }
                </BestDresser>
            </LowerPageBox>
            <OotdListBtn to="/ootd-list">?????? ????????? ?????? ??????????<IconContext.Provider value={{ size: "1.3em", className: "ootdlist-btn-arr"}}><AiOutlineArrowRight /></IconContext.Provider></OotdListBtn>
        </LowerPageContainer>

    )
}

export default LandingPageLower;