import ReactDOM from 'react-dom'
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ModalProps, PokemonInterface } from '../interfaces';
import PokemonCard from './PokemonCard';

export function Modal(props: ModalProps) {
  const { pokemon, exit } = props
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    exit();
    setOpen(false);
  };

  return (
    <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle variant='h4' textAlign='center'>
          Deep Specifications
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <PokemonCard pokemon={pokemon} isModal={true}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
  );
}

const RenderModal = (pokemon: PokemonInterface) => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  const exit = () => {
    ReactDOM.unmountComponentAtNode(div)
  }

  ReactDOM.render(
    <Modal pokemon={pokemon} exit={exit} />
    ,div
  )
}

export default RenderModal
