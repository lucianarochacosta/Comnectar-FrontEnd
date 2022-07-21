import { Button, createStyles, makeStyles, Theme } from '@material-ui/core'
import { Box, Modal } from '@mui/material';
import DeletarProduto from '../produtos/deletarProduto/DeletarProduto';
import './ModalDeletar.css'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);
export interface ID {
  id: string
}

function ModalDeletar(props: ID) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Box display="flex" justifyContent="flex-end" className="cursor">
        <CloseIcon onClick={handleClose}/>
      
      </Box>
      
      <DeletarProduto id={props.id} />
      
    </div>
  );

  return (
    <div>
       <Button onClick={handleOpen}  variant="contained" className="btnDeletar" style={{width:"100%"}}> 
          Deletar
        </Button>
     <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
  >
    {body}
  </Modal></div>
  )
}

export default ModalDeletar