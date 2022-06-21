import {Button, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, TextField} from "@mui/material";
import {useState} from "react";

export default function ToDoView() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [toDos, setToDos] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        const current = toDos.concat({ name });
        setToDos(current);
        setOpen(false);
    };

    return (<div>
        <Button onClick={handleClickOpen}>
            Add to do
        </Button>
        <List>
            {toDos.map((item) => (
                <ListItem>{item.name}</ListItem>
            ))}
        </List>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add to do</DialogTitle>
            <DialogContent>
                <TextField
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    </div>)
}