import styled from "styled-components";

export const OotdImageModalBack = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
    opacity: .7;
    width: 100%;
    height: 100vh;
    z-index: 998;
`
export const OotdImageModalCont = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 1em 1em 4em 1em; // 인스타처럼 뜰까 내일 물어보기
    box-sizing: border-box;

`
export const OotdImageModalImg = styled.img`
    /* position: absolute;
    top: 50%;
    left: 50%; */
    display: block;
    margin: 0 auto;
    z-index: 999;
    background-image: url(${props => props.clickImage});
    /* width: 100%; */
    box-sizing: border-box;
`

// export const OotdImageModalCloseBtn = styled.div`
//     position: relative;
//     top: 10%; 
//     left: calc(100% - 2.3em); 
//     width: 2.3em; 
//     height: 2.3em;
//     /* cursor: pointer; */
//     >span{
//         display: inline-block;
//         width: 100%;
//         height: 100%;
//         >i{
//             display: inline-block;
//             width: 23px; 
//             height: 1px;
//             background: #000;
//             z-index: 1000;
//             margin-bottom: 10px;
//             position: absolute;
//             top: 10px;
//             left: 0;
//         }
//         >i:first-child{
//             transform: rotate(45deg);
//         }
//         >i:last-child{
//             transform: rotate(135deg)
//         }
//     }
// `