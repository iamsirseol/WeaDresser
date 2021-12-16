import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchOffsetHandler } from '../../redux/actions/actions'
import axios from 'axios'; // 필요 없을거 같긴 한데 로그아웃에서 쓸 수도
import {
    OotdListSearchContainer,
    OotdListSearchInput,
    OotdListSearchIcon,
} from "./OotdListSearchStyle"
import { IconContext } from "react-icons";
import {FaSearch} from "react-icons/fa";
import { useEffect } from 'react';


function OotdListSearch({setIsSearch, setSearchHash, searchHash, getOotdListSearch, reSearch,setSearchListArray, setReSearch}){
    const dispatch = useDispatch();
    const setSearchOffset = (handle) => {dispatch(setSearchOffsetHandler(handle))};
    const searchOffset = useSelector(state => state.searchOffsetReducer.searchOffset);

    function pressSearch() {
        if (window.event.keyCode === 13 && searchHash.length > 0) {
            setSearchOffset(0)
            console.log(searchOffset)
            setReSearch(true);
            setSearchListArray([]);
            getOotdListSearch(false);
            setIsSearch(true);
        }
    }
    function clickSearch() {
        if (searchHash.length > 0) {
            setSearchOffset(0)
            console.log(searchOffset)
            setReSearch(true)
            setSearchListArray([])
            getOotdListSearch(false);
            setIsSearch(true);
        }
    }
    function changeHash(e){
        setSearchHash(e.target.value)
    }
    
    return (
        <OotdListSearchContainer>
            <OotdListSearchInput onChange={(e) => changeHash(e)} onKeyUp={() => pressSearch()}>{/* onKeyUp="" */}
            </OotdListSearchInput>
            <OotdListSearchIcon onClick={() => clickSearch()}><IconContext.Provider value={{ color: "#6588db", size: "1.6em"}}><FaSearch/></IconContext.Provider></OotdListSearchIcon>
        </OotdListSearchContainer>
    )
}

export default OotdListSearch;