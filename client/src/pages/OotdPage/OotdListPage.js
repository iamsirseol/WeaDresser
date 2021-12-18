import {
    OotdPageContainer,
    OotdPageTitle,
    OotdListContainer,
} from "./OotdListPageStyle"
import OdtdListBox from "../../components/OotdList/OotdListBox"

function OotdListPage(){


    return (
        <OotdPageContainer>
            <OotdPageTitle>OOTD LIST</OotdPageTitle> {/* 이름 뭐로 바꿀지.. */}
            <OotdListContainer>
                <OdtdListBox />
            </OotdListContainer>
        </OotdPageContainer>
    )
}

export default OotdListPage;