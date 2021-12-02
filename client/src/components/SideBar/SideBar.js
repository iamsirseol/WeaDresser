import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isLoginHandler, isShowLoginModalHandler, isShowSignUpModalHandler } from '../../redux/actions/actions'
import styled from 'styled-components';
   
const SideBarContainer = styled.aside`
    width: 3em;
    height: 3em;
    background: #000;
    position: fixed;
    top: 9em;
    left: 0.5em;
    z-index: 99999999;
    border-radius: 50%;
    >span{
        display: block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        overflow: hidden;
        width: 50%;
        height: 50%;
        position: absolute;
        >i{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: #fff;
            transition: all .3s;
        }
        >i:nth-child(2){
            top: calc(50% - 1px)
        }
        >i:nth-child(3){
            top: calc(100% - 2px);
        }
    }
    >div{
        position: absolute;
        top: 100%;
        left: 7.5px;
        height: 0;
        overflow: hidden;
        opacity: inherit.8;
        >ul{
            >li{
                background: #000;
                border-bottom: 1px solid #fff;
                white-space: nowrap;
                padding: 5px;
                >.side-bar-link{
                    font-size: 1.8em;
                    color: #fff;
                    &:hover{
                        color: #ffe100
                    }
                }
            }
            >li:last-child{
                border: none;
            }
        }
    }
`

function SideBar() {

    // useState

    const sideBarSpread = () => {
        let sideBarBtn = document.querySelector('.side-bar-btn')
        let sideBarMenu = document.querySelector('.side-bar-menu');
        let spread = true;

        if(spread === true){
            console.log(spread)
            spread = false;
            sideBarBtn.children[0].style.transform="rotate(-405deg)";
            sideBarBtn.children[0].style.top="50%";
            sideBarBtn.children[1].style.left="100%";
            sideBarBtn.children[2].style.transform="rotate(-495deg)";
            sideBarBtn.children[2].style.top="11.5px"
            sideBarMenu.style.transition = "all .3s";
            sideBarMenu.style.height = "150px";
        }
        else if(spread === false){
            console.log(spread)
            spread = true;
            sideBarBtn.children[0].style.transform="rotate(0)";
            sideBarBtn.children[0].style.top="0px";
            sideBarBtn.children[1].style.left="0px";
            sideBarBtn.children[2].style.transform="rotate(0)";
            sideBarBtn.children[2].style.top="23px"
            sideBarMenu.style.transition = "all .3s";
            sideBarMenu.style.height = "0px";
        }
    }

    return (
        <>
            <SideBarContainer>
                <span className="side-bar-btn" onClick = {() => sideBarSpread()}>
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
                <div className="side-bar-menu">
                    <ul>
                        <li><Link className="side-bar-link" to="/">MyPage</Link></li>
                        <li><Link className="side-bar-link" to="/">관음증</Link></li>
                        <li><Link className="side-bar-link" to="/">Diary</Link></li>
                    </ul>
                </div>
            </SideBarContainer>
        </>
    );
  }
  
  export default SideBar;