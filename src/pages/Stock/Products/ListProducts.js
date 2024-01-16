import * as React from 'react';
import Box from '@mui/material/Box';
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  Button,
} from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Modal from '@mui/material/Modal';
import DataTable from 'react-data-table-component';
import { url } from '../../../function/FunctionR';

const style = {
  position: 'absolute',
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 1,
  overflow: 'hidden'
};

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    background: #343f46;
    align-items: center;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(5.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    
`;


const ListProducts = () => {
  const usersStorage = JSON.parse(localStorage.getItem("users_db"));
  const CodCompany = usersStorage.map((user) => user.CodCompany);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [box, setBox] = React.useState([]);
  const [records, setRecords] = React.useState(box);

  const getBox = async () => {
    

    try {
        const res = await axios.get(url + "/stock/productslist/" + CodCompany);
       
        if (res.status === 200) {
          setBox(res.data.stmt);
        } else {
          setBox([])
          return toast.warn("Não foi encotrado movimentações!");
        }
    } catch (error) {
        toast.error(error);
    }
  }

  const columns = [
    {
      name: 'Descrição',
      selector: row => row.PRODUTO,
      sortable: true
    },
    {
      name: 'Valor R$',
      selector: row => row.PRECOVENDA,
      sortable: true
    },
    {
      name: 'Estoque',
      selector: row => row.ESTOQUE,
      sortable: true
    }
  ];
  React.useEffect(() => {
    getBox();
    return;
}, []);

  function handleFilter(event) {
    const newData = box.filter(row => {
      return row.PRODUTO.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }

  return (
    <div>
      <Button
        style={{ margin: "5px", width: "300px" }}
        component="label"
        variant="contained"
        startIcon={<AssignmentIndIcon />}
        onClick={handleOpen}
      >
        Produtos
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Div className='text-end' >
            <input 
            style={{marginLeft:"5px", width: "300px", height:"30px", border:"1px solid #343f46" }} 
            type='text'
            placeholder="Digite descrição do produto" 
            onChange={handleFilter} />
          <Button
            style={{ margin: "5px", width: "150px" }}
            component="label"
            variant="contained"
            startIcon={<AssignmentIndIcon />}
            onClick={handleClose}
          >
            Fechar
          </Button>
          </Div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", gap: "5px" }} >

            <DataTable
              columns={columns}
              data={records}
              selectableRows
              fixedHeader
              pagination
            >
            </DataTable>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ListProducts;