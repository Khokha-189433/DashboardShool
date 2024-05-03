import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//////// end import properties from mui library *design*////////

const ListItems = (props) => {
  return (
    <>
    <ListItem  disablePadding >
                <ListItemButton>
                <ListItemText   className='Item'>
                    <ListItemIcon>
                    <div className="Logo-Icon">{props.children}</div>
                    </ListItemIcon>
                    {props.namelist}
                    </ListItemText>
                </ListItemButton>
     </ListItem>
    </>
  )
}

export default ListItems