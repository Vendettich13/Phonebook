import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import { MdContactPhone } from "react-icons/md"
import Button from '@mui/material/Button';


export function ContactItem({ contact: { name, number, id }}) {
const dispatch = useDispatch();
const handleDelete = () => dispatch(deleteContact(id))
    return <>
        <p><MdContactPhone style={{marginRight: "10px", color: '#2dcf2d'}}/> {name}  :  {number}</p>
        <Button style={{color: "#2dcf2d"}} variant="outlined" size="small" type="button" onClick={handleDelete}>Delete</Button>
    </>
}