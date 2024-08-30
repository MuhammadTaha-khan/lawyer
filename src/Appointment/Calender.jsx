//  src/Calender.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setDate } from '../features/appointmentSlice';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import dayjs from 'dayjs';

// const Calender = () => {
//   const [selectedDate, setSelectedDate] = useState(dayjs());
//   const dispatch = useDispatch();

//   const handleDateChange = (newValue) => {
//     setSelectedDate(newValue);
//     dispatch(setDate(newValue));
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <div className="container fluid-lg" style={{ border: '2px solid ', borderRadius: '10px' }}>
//         <div className="col-md-">
//           <StaticDatePicker
//             value={selectedDate}
//             onChange={handleDateChange}
//           />
//         </div>
//       </div>
//     </LocalizationProvider>
//   );
// }

// export default Calender;




// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setDate } from '../features/appointmentSlice';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import dayjs from 'dayjs';

// const Calendar = () => {
//   const [selectedDate, setSelectedDate] = useState(dayjs());
//   const dispatch = useDispatch();

//   const handleDateChange = (newValue) => {
//     setSelectedDate(newValue);
//     dispatch(setDate(newValue));
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <div className="container fluid-lg" style={{ border: '2px solid ', borderRadius: '10px' }}>
//         <div className="col-md-">
//           <StaticDatePicker
//             value={selectedDate}
//             onChange={handleDateChange}
//             displayStaticWrapperAs="desktop"
//             components={{
//               ActionBar: () => null,  // This will remove the Action Bar with "Cancel" and "OK" buttons
//             }}
//           />
//         </div>
//       </div>
//     </LocalizationProvider>
//   );
// }

// export default Calendar;



import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDate } from '../features/appointmentSlice';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const dispatch = useDispatch();

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
    dispatch(setDate(newValue));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="container fluid-lg" style={{ border: '2px solid', borderRadius: '10px' }}>
        <div className="col-md-">
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={selectedDate}
            onChange={handleDateChange}
            components={{
              ActionBar: () => null, // This removes the "Cancel" and "OK" buttons
            }}
          />
        </div>
      </div>
    </LocalizationProvider>
  );
}

export default Calendar;
