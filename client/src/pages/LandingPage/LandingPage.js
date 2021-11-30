import React from 'react'
import { 
    Container, 
    LandingPageContainer, 
    MainLogo, WeatherIconBox, 
    WeahterBarBox, 
    Scroll,
    OutfitBox 
} from './LandingPageStyle';
// import sun from '../../images/sun.png';
// import cloud from '../../images/cloud.png';
// import moon from '../../images/moon.png';
// import rain from '../../images/rain.png';
// import snow from '../../images/snow.png';

function LandingPage () {
    return (
        <Container>
            <LandingPageContainer>
                <MainLogo></MainLogo>
                <WeatherIconBox>
                    <li className="icon1"></li>
                    <li className="icon2"></li>
                    <li className="icon3"></li>
                    <li className="icon4"></li>
                    <li className="icon5"></li>
                </WeatherIconBox>
                <WeahterBarBox>
                    <div>
                        <span className="icon"></span> 
                        <span className="desc">비</span>
                    </div>
                    <div>
                        <span className="temp1">최고기온</span>
                        <span className="temp2">11</span>
                    </div>
                    <div>
                        <span className="temp1">최저기온</span>
                        <span className="temp3">2</span>
                    </div>
                </WeahterBarBox>
                <Scroll />
                <OutfitBox />
            </LandingPageContainer>
        </Container>
    )
}

export default LandingPage;