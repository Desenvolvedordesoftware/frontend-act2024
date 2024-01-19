import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, Button } from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Table = styled.table`
  width: 100%;
  height: 95%;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  font-size: 12px;
  backdrop-filter: blur(5.5px);
`;

export const Thead = styled.thead`
`;

export const Tbody = styled.tbody`
  position: fixed;
  margin-top: 5px;
  margin-bottom: 5px;
  box-sizing: 'border-box';
  width: 100%;
  height: 100%;
  max-height: 950px;
  min-height: 350px;
  background-color: #fff;
  outline: auto;
  overflow: overlay;
  z-index: 5;
`;

export const Tr = styled.tr`
  display: flex;
  justify-content: space-between;
  border: 1px solid #343f46;
`;

export const Th = styled.th`
  text-align: start;
  padding: 5px;
  padding-bottom: 5px;
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  text-align: start;
  padding: 0 1px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const DataFilter = styled.input`
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  width: 200px;
  font-size: 12px;
`;

const InputArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  margin-left: 10px;
  gap: 20px;
  padding: 0px;
  justify-content: space-between;
`;

const style = {
  position: 'absolute',
  boxSizing: 'border-box',
  width: '100%',
  height: '100vh',
  bgcolor: '#343f46',
  border: '2px solid #000',
  p: 1,
  overflow: 'overlay'
};
const Title = styled.div`
`;

const ListBox = ({ box, getBox, setData, data,
  totalDinheiro,
  totalPix,
  totalCredito,
  totalDebito,
  totalAprazo,
  totalChAp,
  totalEntradas,
  totalSaidas, }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  let TotalVendas = parseFloat(totalDinheiro) +
  parseFloat(totalPix) +
  parseFloat(totalCredito) +
  parseFloat(totalDebito) +
  parseFloat(totalAprazo) +
  parseFloat(totalChAp);

  let Saidas = parseFloat(totalSaidas);

  let Saldo = totalEntradas - Saidas;
  return (
    <div>
      <Button
        style={{ margin: "5px", width: "300px" }}
        component="label"
        variant="contained"
        startIcon={<AssignmentIndIcon />}
        onClick={handleOpen}
      >
        Caixa
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Title>
            <div>
              <InputArea>
                <Typography style={{ color: "#fff" }}>
                  Selecionar uma data
                </Typography>
                <Button
                  style={{ margin: "5px", width: "100px", fontSize:"12px" }}
                  component="label"
                  variant="contained"
                  onClick={handleClose}
                >
                  Fechar
                </Button>
              </InputArea>
              <Div style={{backgroundColor:"transparent", padding:"4px"}} >
                <DataFilter
                  type="date"
                  value={data}
                  onChange={(e) => [setData(e.target.value)]}
                />
                <Button
                  style={{ margin: "5px", width: "100px", fontSize:"12px" }}
                  component="label"
                  variant="contained"
                  onClick={getBox}
                >
                  Filtrar
                </Button>
              </Div>
              <div>
                <Grid container item direction="row" spacing={1}>
                  <Grid item xs={12} sm={8} md={4}>
                    <Div style={{ padding: "8px",backgroundColor: "#fff" }}>
                      <Typography style={{ color: "#02b3d4", fontSize:"12px"  }} >
                          Dinheiro
                      </Typography>
                      <Typography style={{ color: "#000", fontSize:"12px"  }}>
                      {Intl.NumberFormat('pt-br',
                      {
                          style: 'currency',
                          currency: 'BRL'
                      }).format(
                        totalDinheiro
                      )}
                      </Typography>
                      <Typography style={{ color: "#02b3d4", fontSize:"12px"  }} >
                          Pix
                      </Typography>
                      <Typography style={{ color: "#000", fontSize:"12px"  }}>
                      {Intl.NumberFormat('pt-br',
                      {
                          style: 'currency',
                          currency: 'BRL'
                      }).format(
                        totalPix
                      )}
                      </Typography>
                      <Typography style={{ color: "#02b3d4", fontSize:"12px"  }} >
                          Aprazo
                      </Typography>
                      <Typography style={{ color: "#000", fontSize:"12px"  }}>
                      {Intl.NumberFormat('pt-br',
                      {
                          style: 'currency',
                          currency: 'BRL'
                      }).format(
                        totalAprazo
                      )}
                      </Typography>
                    </Div>
                  </Grid>
                  <Grid item xs={12} sm={8} md={4}>
                    <Div style={{ padding: "8px" ,backgroundColor: "#fff" }}>
                      <Typography style={{ color: "#02b3d4", fontSize:"12px"  }} >
                          C.Debito
                      </Typography>
                      <Typography style={{ color: "#000", fontSize:"12px"  }}>
                      {Intl.NumberFormat('pt-br',
                      {
                          style: 'currency',
                          currency: 'BRL'
                      }).format(
                        totalDebito
                      )}
                      </Typography>
                      <Typography style={{ color: "#02b3d4", fontSize:"12px"  }} >
                          C.Credito
                      </Typography>
                      <Typography style={{ color: "#000", fontSize:"12px"  }}>
                      {Intl.NumberFormat('pt-br',
                      {
                          style: 'currency',
                          currency: 'BRL'
                      }).format(
                        totalCredito
                      )}
                      </Typography>
                      <Typography style={{ color: "#02b3d4", fontSize:"12px"  }} >
                          Ch.Ap
                      </Typography>
                      <Typography style={{ color: "#000", fontSize:"12px"  }}>
                      {Intl.NumberFormat('pt-br',
                      {
                          style: 'currency',
                          currency: 'BRL'
                      }).format(
                        totalChAp
                      )}
                      </Typography>
                    </Div>
                  </Grid>
                  <Grid item xs={12} sm={8} md={4}>
                    <Div style={{ padding: "8px" ,backgroundColor: "#fff" }}>
                      <Typography style={{ color: "#02b3d4", fontSize:"12px"  }} >
                          Total vendas
                      </Typography>
                      <Typography style={{ color: "#000", fontSize:"12px"  }}>
                      {Intl.NumberFormat('pt-br',
                      {
                          style: 'currency',
                          currency: 'BRL'
                      }).format(
                        TotalVendas
                      )}
                      </Typography>
                    </Div>
                  </Grid>
                  <Grid item xs={12} sm={8} md={4}>
                    <Div style={{ padding: "8px" ,backgroundColor: "#fff" }}>
                      <Typography style={{ color: "#02b3d4", fontSize:"12px"  }} >
                          Entradas
                      </Typography>
                      <Typography style={{ color: "#000", fontSize:"12px"  }}>
                      {Intl.NumberFormat('pt-br',
                      {
                          style: 'currency',
                          currency: 'BRL'
                      }).format(
                        totalEntradas
                      )}
                      </Typography>
                      <Typography style={{ color: "#02b3d4", fontSize:"12px"  }} >
                          Saidas
                      </Typography>
                      <Typography style={{ color: "red", fontSize:"12px"  }}>
                      {Intl.NumberFormat('pt-br',
                      {
                          style: 'currency',
                          currency: 'BRL'
                      }).format(
                        totalSaidas
                      )}
                      </Typography>
                      <Typography style={{ color: "#02b3d4", fontSize:"12px"  }} >
                          Saldo
                      </Typography>
                      <Typography style={{ color: "#000", fontSize:"12px"  }}>
                      {Intl.NumberFormat('pt-br',
                      {
                          style: 'currency',
                          currency: 'BRL'
                      }).format(
                        Saldo
                      )}
                      </Typography>
                    </Div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Title>
          </Typography>
          <div>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
              <Table>
                <Thead>
                  <Tr
                  >
                    <Th>HISTORICO</Th>
                    <Th Width="70px" >ValorR$</Th>
                  </Tr>
                </Thead>
                <Tbody >
                {box.map((item, i) => (
                    <Tr key={i}>
                      <Td >{item.HISTORICO}</Td>
                      <Td >{Intl.NumberFormat('pt-br',
                      {
                          style: 'currency',
                          currency: 'BRL'
                      }).format(
                        item.VALOR
                      )}</Td>
                    </Tr>
                  ))}  
                  
                </Tbody>
              </Table>
            </Typography>
          </div>
        </Box>
      </Modal>
      
    </div>
  );
};

export default ListBox;
