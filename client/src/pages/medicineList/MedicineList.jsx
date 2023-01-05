import React from 'react'
import "./medicineList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react'

const MedicineList = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'category', headerName: 'Category', width: 120 },
    { field: 'is_acidic', headerName: 'Is Acidic', width: 90 },
    { field: 'infant_safe', headerName: 'Infant Safe', width: 90 },
    { 
      field: 'action',
      headerName: 'Action',
      width: 150 ,
      renderCell: (params) => {
        return (
          <>
            <NavLink to={"/medicine/"+params.row.id}>
              <button className="medicineListEdit">Detail</button>
            </NavLink>                       
              <DeleteOutlineIcon className="medicineListDelete" />
          </>
        )
      }
    },
  ];

  const [medicines, setMedicines] = useState([])

    useEffect(() => {
        fetch('/medicines')
        .then(res => res.json())
        .then((medicines => setMedicines(medicines)))
    }, [])

  return (
    <div className='medicineList'>
      <h3 className="medicineTitle">Medicines</h3>
      <DataGrid
      rows={medicines}
      columns={columns}
      pageSize={8}
      rowsPerPageOptions={[8]}
      checkboxSelection
      disableSelectionOnClick
      />
    </div>
  )
}

export default MedicineList