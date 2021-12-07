import React from 'react'
import { Container,
    DiaryContainer,
    RecordContainer,
    CalendarContainer,
    RecordHeader,
    ImageBox,
    ContentBox
 } from './DiaryPageStyle';

function DiaryPage() {
    return (
        <Container>
            <DiaryContainer>
                <RecordContainer>
                    <RecordHeader>날씨데이터 들어갈 곳</RecordHeader>
                    <ImageBox>이미지</ImageBox>
                    <ContentBox>컨텐츠 내용</ContentBox>
                </RecordContainer>
                <CalendarContainer></CalendarContainer>
            </DiaryContainer>
        </Container>
    )
}

export default DiaryPage
