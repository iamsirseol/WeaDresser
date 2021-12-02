import React from 'react'
import { RecordContainer, ImageUploadBox, ContentBox, TagBox } from './RecordPageStyle';

function RecordPage() {
    return (
        <RecordContainer>
            <ImageUploadBox>
                <div className="photo"></div>
            </ImageUploadBox>
            <ContentBox></ContentBox>
            <TagBox></TagBox>
        </RecordContainer>
    )
}

export default RecordPage
