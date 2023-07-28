import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css'
import {format} from 'date-fns';

const DateRangePicker = ({setFormattedStartDate,setFormattedEnddate}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setFormattedStartDate(format(date,'dd/MM/yyyy'));
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setFormattedEnddate(format(date,'dd/MM/yyyy'));
  };

  return (
    <div className='Datereserv'>
      <div className='startreserv'>
        <label>วันที่จอง: </label>
        <DatePicker
        className='startdate'
        selected={startDate}
        onChange={handleStartDateChange}
        dateFormat={"dd/MM/yyyy"}
        minDate={new Date()}
        placeholderText='Choose Date'/>
      <div>
        <label>ถึงวันที่: </label>
        <DatePicker
        className='enddate'
        selected={endDate}
        onChange={handleEndDateChange}
        dateFormat={"dd/MM/yyyy"}
        minDate={new Date(startDate)}
        placeholderText='Choose Date' />
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;