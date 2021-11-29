/* 랜딩페이지 첫 화면 */
import styled from 'styled-components';
import title from '../../images/title.svg'
// import title from '../../images/sun@3x.png'

export const Container = styled.div`
  width: 100%; 
  height: 100vh; 
`
export const LandingPageContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    top: 0;
    left: 0;
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
    background: linear-gradient(124deg, #5b81fa 13%, #0852a8 98%);
`;

export const MainLogo = styled.div`
    background-image: url(${title});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 0 auto;
    width: 66.7em;
    height: 7.3em;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
`
