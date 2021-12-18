import  {
    FooterContainer,
    FooterMiddle,
    FooterBottom,
} from './FooterStyle'
import { BsGithub } from 'react-icons/bs';
import { IconContext } from "react-icons";

function Footer(){

    return (
        <FooterContainer>
            <FooterMiddle>
                <ul>
                    <li><a href="https://github.com/leeyhunhwan"><IconContext.Provider value={{ color: "black", className: "global-class-name" }}><BsGithub /></IconContext.Provider> 이윤환</a></li>
                    <li><a href="https://github.com/iamsirseo"><IconContext.Provider value={{ color: "black", className: "global-class-name" }}><BsGithub /></IconContext.Provider> 설동혁</a></li>
                    <li><a href="https://github.com/minchjung"><IconContext.Provider value={{ color: "black", className: "global-class-name" }}><BsGithub /></IconContext.Provider> 정민찬</a></li>
                </ul>
            </FooterMiddle>
            <FooterBottom>
                <a href="https://github.com/codestates/WeaDresser">프로젝트 레포지토리 바로가기</a>
            </FooterBottom>
        </FooterContainer>
    )
}

export default Footer;