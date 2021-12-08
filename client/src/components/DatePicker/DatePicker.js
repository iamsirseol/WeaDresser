import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker';

function DatePicker() {

    const [curDate, setCurDate] = useState(new Date());
    const [isOpenedPicker, setIsOpenedPicker] = useState(false);
    
    return (
        <DatePicker 
            selected={curDate}
            onChange={(date) => setCurDate(date)} 
            open={isOpenedPicker}
        />
    )
}

export default DatePicker
