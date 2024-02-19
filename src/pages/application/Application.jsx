// import * as React from 'react';
import style from "./application.module.scss";
import Box from '@mui/material/Box';
import { DataGrid, } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID Заявки', width: 110, sortable: false },
  {
    field: 'firstName',
    headerName: 'Подавач',
    width: 150,
    editable: true,
  },
  {
    field: 'iV',
    headerName: 'ID Ветерана',
    width: 150,
    editable: true,
    sortable: false,
  },
  {
    field: 'dateSubmission',
    headerName: 'Дата подання',
    type: 'number',
    width: 140,
    editable: true,
  },
  {
    field: 'region',
    headerName: 'Область',
    description: 'This column has a value getter and is not sortable.',
    width: 170,
  }
];

const rows = [
  { id: 11, dateSubmission: '01.12.2023', firstName: 'Ветеран', iV: 147, region: 'Львівська' },
  { id: 12, dateSubmission: '02.12.2023', firstName: 'Ветеран', iV: 144, region: 'Харківська' },
  { id: 13, dateSubmission: '03.12.2023', firstName: 'Дружина', iV: 131, region: 'Закарпатська' },
  { id: 14, dateSubmission: '04.12.2023', firstName: 'Ветеран', iV: 119, region: 'Львівська' },
  { id: 15, dateSubmission: '05.12.2023', firstName: 'Дружина', iV: 134, region: 'Харківська' },
  { id: 16, dateSubmission: '06.12.2023', firstName: 'Ветеран', iV: 150, region: 'Львівська' },
  { id: 17, dateSubmission: '07.12.2023', firstName: 'Дружина', iV: 144, region: 'Закарпатська' },
  { id: 18, dateSubmission: '02.12.2023', firstName: 'Ветеран', iV: 136, region: 'Львівська' },
  { id: 19, dateSubmission: '08.12.2023', firstName: 'Дружина', iV: 125, region: 'Харківська' },
];

export default function Application() {
  return (
    <div className={style.application}>
      <div className={style.header}>
       <h3>Заяви на Проєкт</h3>
       </div>
    <Box sx={{ height: 400, width: '100%', display: 'flex', justifyContent: 'center', }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </div>
  );
}


