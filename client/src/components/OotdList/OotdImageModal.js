import {
    OotdImageModalBack,
    OotdImageModalCont,
    OotdImageModalImg,

} from './OotdImageModalStyle'

function OotdImageModal({modalImage, setModalImage}){
    
    function closeModal(){
        setModalImage('')
    }

    return(
        <>
        <OotdImageModalBack onClick={closeModal}>
        </OotdImageModalBack>
        <OotdImageModalCont>
            <OotdImageModalImg src={modalImage} />
        </OotdImageModalCont>
        </>
    )
}

export default OotdImageModal