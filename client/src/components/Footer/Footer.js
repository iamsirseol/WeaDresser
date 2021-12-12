import { Link, useHistory } from 'react-router-dom';
import  {
    FooterContainer,
    FooterLeft,
    FooterMiddle,
    FooterRight,
    FooterBottom,
} from './FooterStyle'
function Footer(){

    return (
        <FooterContainer>
            <FooterLeft>프로젝트 소개</FooterLeft>
            <FooterMiddle>깃허브 주소</FooterMiddle>
            <FooterRight>팀원 깃허브</FooterRight>
            <FooterBottom>copyright나 w3c validator 검사 통과 링크</FooterBottom>
        </FooterContainer>
    )
}

export default Footer;