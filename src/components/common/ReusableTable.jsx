// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

// const ReusableTable = ({  columns, rows }) => {
//   return (
//     <TableContainer component={Paper} sx={{ margin: '20px 0', boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.1)' }}>
      
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             {columns.map((column) => (
//               <TableCell key={column} align="center"><Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{column}</Typography></TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row, index) => (
//             <TableRow key={index}>
//               {row.map((cell, idx) => (
//                 <TableCell key={idx} align="center">{cell}</TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default ReusableTable;


import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const ReusableTable = ({ columns, rows }) => {
  return (
    <TableContainer component={Paper} sx={{ margin: '20px 0', boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.1)' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell 
                key={column} 
                align="center"
                sx={{ 
                  fontWeight: 'bold',
                  borderRight: '1px solid rgba(224, 224, 224, 1)', // 添加竖线
                  '&:last-child': {
                    borderRight: 'none' // 最后一列不添加竖线
                  }
                }}
              >
                <Typography variant="subtitle1">{column}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {row.map((cell, idx) => (
                <TableCell 
                  key={idx} 
                  align="center"
                  sx={{
                    borderRight: '1px solid rgba(224, 224, 224, 1)', // 添加竖线
                    '&:last-child': {
                      borderRight: 'none' // 最后一格不添加竖线
                    }
                  }}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReusableTable;
