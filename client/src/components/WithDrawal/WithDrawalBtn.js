
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
   
const WithDrawalContainer = styled.button`
    padding: .8em 2em;
    background: #3c60f0;
    color: #fff;
    border-radius: 0.3em;
`
function WithDrawal({setShowWithDrawal}) {

    function WithDrawalModalRequest(e){
        e.preventDefault();
        setShowWithDrawal(true)
    }

    return (
        <WithDrawalContainer onClick={(e) => WithDrawalModalRequest(e)}>회원 탈퇴</WithDrawalContainer>
    );
  }
  
  export default WithDrawal;