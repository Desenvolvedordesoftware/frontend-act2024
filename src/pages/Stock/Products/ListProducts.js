import * as React from 'react';
import Box from '@mui/material/Box';
import styled from "styled-components";
import {
  Button,
} from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Modal from '@mui/material/Modal';
import DataTable from 'react-data-table-component';

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  const data = [
    {
      id: "1",
      CODIGO: "1",
      PRODUTO: "RUFFLES CEB&SALSA 57G",
      PRECOVENDA: "45",
      ESTOQUE: "255"
    },
    {
      id: "2",
      CODIGO: "2",
      PRODUTO: "BIS XTRA 45G",
      PRECOVENDA: "3.45",
      ESTOQUE: "122"
    },
    {
      id: "3",
      CODIGO: "3",
      PRODUTO: "BIS XTRA BLACK 45G",
      PRECOVENDA: "5",
      ESTOQUE: "55"
    },
    {
      id: "4",
      CODIGO: "4",
      PRODUTO: "CHOCOLATE LACTA LAKE 80G",
      PRECOVENDA: "12",
      ESTOQUE: "87"
    },
    {
      id: "5",
      CODIGO: "5",
      PRODUTO: "BARRA DE CHOCOLATE E LEITE LACTA 90G",
      PRECOVENDA: "17.56",
      ESTOQUE: "67"
    },
    {
      id: "6",
      CODIGO: "6",
      PRODUTO: "CHEETOS ASSADO SAB. REQUEIJAO 45G",
      PRECOVENDA: "12",
      ESTOQUE: "45"
    },
    {
      id: "7",
      CODIGO: "7",
      PRODUTO: "CHOCOLATE LAKA DIAMENTE NEGRO 90G",
      PRECOVENDA: "5",
      ESTOQUE: "31"
    },
    {
      id: "8",
      CODIGO: "8",
      PRODUTO: "CHOCOLATE DIAMENTE NEGRO 80G",
      PRECOVENDA: "5",
      ESTOQUE: "123"
    },
    {
      id: "10",
      CODIGO: "10",
      PRODUTO: "AMENDOIM TIPO JAPONES DORI 70G",
      PRECOVENDA: "5",
      ESTOQUE: "123"
    },
    {
      id: "11",
      CODIGO: "11",
      PRODUTO: "AMENDOIM PETTIZ NATURAL CROCANTE 50G",
      PRECOVENDA: "5",
      ESTOQUE: "110"
    },
    {
      id: "12",
      CODIGO: "12",
      PRODUTO: "AMENDOIM PETTIZ SAB. CEBOLA E SALSA 50G",
      PRECOVENDA: "5",
      ESTOQUE: "11"
    },
    {
      id: "13",
      CODIGO: "13",
      PRODUTO: "AMENDOIM PETTIZ SAB. PIMENTA VERMELHA 50G",
      PRECOVENDA: "59",
      ESTOQUE: "18"
    },
    {
      id: "14",
      CODIGO: "14",
      PRODUTO: "CHOCOLATE LACTA SHOT 90G",
      PRECOVENDA: "57",
      ESTOQUE: "34"
    },
    {
      id: "15",
      CODIGO: "15",
      PRODUTO: "KIT KAT 41,5G",
      PRECOVENDA: "65",
      ESTOQUE: "87"
    },
    {
      id: "16",
      CODIGO: "16",
      PRODUTO: "DORITOS QUEIJO NACHO 45G",
      PRECOVENDA: "51",
      ESTOQUE: "78"
    },
    {
      id: "17",
      CODIGO: "17",
      PRODUTO: "BATATAS MAX 40G",
      PRECOVENDA: "53",
      ESTOQUE: "65"
    },
    {
      id: "18",
      CODIGO: "18",
      PRODUTO: "CEBOLITOS ELMA CHIPS 60G",
      PRECOVENDA: "55",
      ESTOQUE: "55"
    },
    {
      id: "19",
      CODIGO: "19",
      PRODUTO: "RUFFLES ORIGINAL SAL 76G",
      PRECOVENDA: "25",
      ESTOQUE: "33"
    },
    {
      id: "20",
      CODIGO: "20",
      PRODUTO: "RUFFLES CHURRASCO 57G",
      PRECOVENDA: "35",
      ESTOQUE: "13"
    },
    {
      id: "21",
      CODIGO: "21",
      PRODUTO: "STAX CHEDDAR 156G",
      PRECOVENDA: "25",
      ESTOQUE: "12"
    },
    {
      id: "1",
      CODIGO: "1",
      PRODUTO: "RUFFLES CEB&SALSA 57G",
      PRECOVENDA: "45",
      ESTOQUE: "255"
    },
    {
      id: "2",
      CODIGO: "2",
      PRODUTO: "BIS XTRA 45G",
      PRECOVENDA: "3.45",
      ESTOQUE: "122"
    },
    {
      id: "3",
      CODIGO: "3",
      PRODUTO: "BIS XTRA BLACK 45G",
      PRECOVENDA: "5",
      ESTOQUE: "55"
    },
    {
      id: "4",
      CODIGO: "4",
      PRODUTO: "CHOCOLATE LACTA LAKE 80G",
      PRECOVENDA: "12",
      ESTOQUE: "87"
    },
    {
      id: "5",
      CODIGO: "5",
      PRODUTO: "BARRA DE CHOCOLATE E LEITE LACTA 90G",
      PRECOVENDA: "17.56",
      ESTOQUE: "67"
    },
    {
      id: "6",
      CODIGO: "6",
      PRODUTO: "CHEETOS ASSADO SAB. REQUEIJAO 45G",
      PRECOVENDA: "12",
      ESTOQUE: "45"
    },
    {
      id: "7",
      CODIGO: "7",
      PRODUTO: "CHOCOLATE LAKA DIAMENTE NEGRO 90G",
      PRECOVENDA: "5",
      ESTOQUE: "31"
    },
    {
      id: "8",
      CODIGO: "8",
      PRODUTO: "CHOCOLATE DIAMENTE NEGRO 80G",
      PRECOVENDA: "5",
      ESTOQUE: "123"
    },
    {
      id: "10",
      CODIGO: "10",
      PRODUTO: "AMENDOIM TIPO JAPONES DORI 70G",
      PRECOVENDA: "5",
      ESTOQUE: "123"
    },
    {
      id: "11",
      CODIGO: "11",
      PRODUTO: "AMENDOIM PETTIZ NATURAL CROCANTE 50G",
      PRECOVENDA: "5",
      ESTOQUE: "110"
    },
    {
      id: "12",
      CODIGO: "12",
      PRODUTO: "AMENDOIM PETTIZ SAB. CEBOLA E SALSA 50G",
      PRECOVENDA: "5",
      ESTOQUE: "11"
    },
    {
      id: "13",
      CODIGO: "13",
      PRODUTO: "AMENDOIM PETTIZ SAB. PIMENTA VERMELHA 50G",
      PRECOVENDA: "59",
      ESTOQUE: "18"
    },
    {
      id: "14",
      CODIGO: "14",
      PRODUTO: "CHOCOLATE LACTA SHOT 90G",
      PRECOVENDA: "57",
      ESTOQUE: "34"
    },
    {
      id: "15",
      CODIGO: "15",
      PRODUTO: "KIT KAT 41,5G",
      PRECOVENDA: "65",
      ESTOQUE: "87"
    },
    {
      id: "16",
      CODIGO: "16",
      PRODUTO: "DORITOS QUEIJO NACHO 45G",
      PRECOVENDA: "51",
      ESTOQUE: "78"
    },
    {
      id: "17",
      CODIGO: "17",
      PRODUTO: "BATATAS MAX 40G",
      PRECOVENDA: "53",
      ESTOQUE: "65"
    },
    {
      id: "18",
      CODIGO: "18",
      PRODUTO: "CEBOLITOS ELMA CHIPS 60G",
      PRECOVENDA: "55",
      ESTOQUE: "55"
    },
    {
      id: "19",
      CODIGO: "19",
      PRODUTO: "RUFFLES ORIGINAL SAL 76G",
      PRECOVENDA: "25",
      ESTOQUE: "33"
    },
    {
      id: "20",
      CODIGO: "20",
      PRODUTO: "RUFFLES CHURRASCO 57G",
      PRECOVENDA: "35",
      ESTOQUE: "13"
    },
    {
      id: "21",
      CODIGO: "21",
      PRODUTO: "STAX CHEDDAR 156G",
      PRECOVENDA: "25",
      ESTOQUE: "12"
    },
  ]

  const [records, setRecords] = React.useState(data);
  function handleFilter(event) {
    const newData = data.filter(row => {
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