import styled from "styled-components";
import { Link } from "react-router-dom";

export const LowerPageContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`
export const LowerPageBox = styled.div`
    width: 80%;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between
`
export const UserWore = styled.div`
    width: 48%;
    background: #ddd;
`
export const UserWoreImage = styled.div`
    background-image: url(${props => props.woreUrl});
    background-color: #ddd;
    width: 90%;
    height: 30em;
`
export const UserWoreText = styled.p`

`
export const BestDresser = styled.div`
    background: #ddd;
    width: 48%;
`
export const BestDresserImage = styled.div`
    background-image: url(${props => props.bestUrl});
    background-color: #ddd;
    width: 90%;
    height: 30em;
`
export const BestDresserText = styled.p`

`
export const OotdListBtn = styled(Link)`

`
export const RecordBtn = styled(Link)`
    
`