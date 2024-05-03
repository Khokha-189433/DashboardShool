import React from 'react'
import { useState } from "react"
////// start import properties from mui library *design* //////
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { BiHelpCircle, BiHome , BiMessage  ,BiSolidUserAccount , BiQuestionMark, BiSolidGraduation,BiMenu  ,BiSearch,BiToggleLeft} from 'react-icons/bi'
//////// end import properties from mui library *design*////////
import { Link } from "react-router-dom";
//////////////////////////////////////////////
import ListItems from './ListItem'
import './StylesHeadar.css' ;
///////////////////////////

// for design header
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});
// for design header
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
// for design header
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
// for design header
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
})
);

// for design header
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth ,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const HeaderList = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
     // // function to open menu
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    // // function to close menu
    const handleDrawerClose = () => {
      setOpen(false);
    };
 
    return (
    <>
        <Box sx={{ display: 'flex' , background:'' , margin:"12px"}}>
        
        <CssBaseline />
        <AppBar position="fixed" open={open}>
            {/* start header */}
            <Toolbar className="header">
            {/* زر الفتح والتسكير */}
            <IconButton
                d-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
                }}
            >
                <MenuIcon />       
            </IconButton>
            {/*  نهاية زر الفتح والتسكير  */}

            <h2   className="Name-logo">
                <em>S</em>chool
            </h2>
                {/* مربع البحث */}
                <form action="" method="post" className="search-from">
                <input type="text" placeholder="Search..." ></input>
                <button type="submit"  style={{background:"none" ,color: "white"}}>  <BiSearch  size={32}/></button>
                </form>
                {/* مربع البحث  نهاية*/}

            </Toolbar>
            {/* end header */}
        </AppBar>

        {/*  start menu colomn ----------------------------------------------*/}
        <Drawer variant="permanent" open={open} >
            <DrawerHeader>   {/*  زر تكبير وتصغير ال menu*/}
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            </DrawerHeader>
            <Divider />
            <div className="menu-list" >    
              <Link to='/home'>  <ListItems  namelist='home' > <BiHome  className="Logo-Icon"  /> </ListItems> </Link>
              <Link to='/courses'> <ListItems  namelist='Courses' > <BiSolidGraduation className="Logo-Icon"   />  </ListItems> </Link>

              <Link  to="/teacher"> <ListItems  namelist=' Teachers' >  <BiSolidUserAccount className="Logo-Icon" /> </ListItems> </Link>
                <ListItems  namelist=' About' > <BiQuestionMark className="Logo-Icon" /></ListItems>
                <ListItems  namelist=' Message' > <BiMessage className="Logo-Icon" /></ListItems>
                <ListItems  namelist=' Help  ' ><BiHelpCircle className="Logo-Icon" /></ListItems>

  {/* <Link to="/courses">
    <ListItem  disablePadding >
      <ListItemButton>
      <ListItemText   className='Item'>
        <ListItemIcon>
        <BiSolidGraduation className="Logo-Icon"   />
        </ListItemIcon>
        Courses
        </ListItemText>
      </ListItemButton>
    </ListItem>
  </Link> */}
            </div>
        </Drawer>
        {/* end menu list column--------------------------------------------- */}
        </Box>
    
</>
  )
}

export default HeaderList