import { useDispatch } from "react-redux"
import { setFilter } from "redux/filterSlice"
import { nanoid } from "nanoid"
import { Input } from "@mui/material"
import styled from "@emotion/styled"

const FilterInput = styled(Input)`
height: 25px;
width: 380px;
padding-left: 5px;
height: 25px;
margin-bottom: 15px;
color: green;
`
const SearchText = styled.p`
font-weight: 600;
margin-top: 20px;
margin-bottom: 10px;
`

export function Filter() {
    const dispatch = useDispatch();
    return <div style={{margin: '0 auto'}}>
        <SearchText>Find contacts by name:</SearchText>
        <FilterInput placeholder="Type to filter" type="text" onChange={e => dispatch(setFilter(e.currentTarget.value))} id={nanoid()} />
    </div>
}