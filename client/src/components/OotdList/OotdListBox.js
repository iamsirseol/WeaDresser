import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler } from '../../redux/actions/actions'
import axios from 'axios'; // 필요 없을거 같긴 한데 로그아웃에서 쓸 수도
import {
    OotdListBoxContainer,
    OotdListBoxImage,
    OotdListBoxBack,
    OotdListBoxOver,
    OotdListBoxItem,
} from "./OotdListBoxStyle"
import { useEffect, useRef } from 'react';

function OotdListBox(){

    let arr = [100,110,200,300,400,150,260,270,280,190,190,111,312,313,214,315,216,117,218,319,420,121,222,323,424,225,326,427,328,229,230,340,500,600,300,405,800,300] // 나중에 지워
    const ootdListGrid = (param) => {
        let images = document.querySelectorAll(".ootdImage");
        let colWidth = images[0].offsetWidth
        let imgStack = param
        // let colWidth = 340;
        for(let i = 0; i < images.length; i++) {
            let minIndex = imgStack.indexOf(Math.min.apply(0, imgStack));
            let x = colWidth * minIndex;
            let y = imgStack[minIndex];
            imgStack[minIndex] += (images[i].children[0].scrollHeight +20);
            images[i].style.transform = `translateX(${x}px) translateY(${y}px)`;
            if(i === images.length - 1) {
                document.querySelector(".ootdList").style.height = `${Math.max.apply(0, imgStack)}px`;
            }
        }
    }

    window.onload = () => {
        if(window.matchMedia("(max-width: 400px)").matches){
            ootdListGrid([0,0])
        }else if(window.matchMedia("(max-width: 800px)").matches){
            ootdListGrid([0,0,0])
        }else if(window.matchMedia("(max-width: 1200px)").matches){
            ootdListGrid([0,0,0,0])
        }else{
            ootdListGrid([0,0,0,0,0])
        }
    }
    window.addEventListener('resize', function(){
        if(window.matchMedia("(max-width: 400px)").matches){
            ootdListGrid([0,0])
        }else if(window.matchMedia("(max-width: 800px)").matches){
            ootdListGrid([0,0,0])
        }else if(window.matchMedia("(max-width: 1200px)").matches){
            ootdListGrid([0,0,0,0])
        }else{
            ootdListGrid([0,0,0,0,0])
        }
    })
    return (
        <OotdListBoxContainer className="ootdList">
            {
                arr.map((val, idx) => {
                    return <OotdListBoxBack className="ootdImage" key={idx} ><OotdListBoxOver><OotdListBoxImage src={`http://placeimg.com/640/${val}/any`} key={idx} /><OotdListBoxItem></OotdListBoxItem></OotdListBoxOver></OotdListBoxBack>
                })
            }
        </OotdListBoxContainer>
    )
}

export default OotdListBox