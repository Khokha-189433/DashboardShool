// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// export default function Content() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="error">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//           <Badge badgeContent={17} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ display: { xs: 'none', sm: 'block' } }}
//           >
//             MUI
//           </Typography>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//               <Badge badgeContent={4} color="error">
//                 <MailIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               aria-label="show 17 new notifications"
//               color="inherit"
//             >
//               <Badge badgeContent={17} color="error">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//           </Box>
//           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </Box>
//   );
// }
     // menu last
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// export default function TemporaryDrawer() {
//   const [open, setOpen] = React.useState(false);

//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };

//   const DrawerList = (
   //  <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
   //    <List>
   //      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
   //        <ListItem key={text} disablePadding>
   //          <ListItemButton>
   //            <ListItemIcon>
   //              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
   //            </ListItemIcon>
   //            <ListItemText primary={text} />
   //          </ListItemButton>
   //        </ListItem>
   //      ))}
   //    </List>
   //    <Divider />
   //    <List>
   //      {['All mail', 'Trash', 'Spam'].map((text, index) => (
   //        <ListItem key={text} disablePadding>
   //          <ListItemButton>
   //            <ListItemIcon>
   //              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
   //            </ListItemIcon>
   //            <ListItemText primary={text} />
   //          </ListItemButton>
   //        </ListItem>
   //      ))}
   //    </List>
   //  </Box>
//   );

//   return (
//     <div>
//       <Button onClick={toggleDrawer(true)}>Open drawer</Button>
//       <Drawer open={open} onClose={toggleDrawer(false)}>
//         {DrawerList}
//       </Drawer>
//     </div>
//   );
// }


   ///////////////////////// menu lest /////////////////////////////////////////
// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   }),
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));

// export default function PersistentDrawerLeft() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Persistent drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Main open={open}>
//         <DrawerHeader />
//         <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  
//         </Typography>
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
   
//         </Typography>
//       </Main>
//     </Box>
//   );
// }   


// ///////////////////////////////////////// menu
// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';



// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   }),
// );

// export default function MiniDrawer() {




//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: 'none' }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Mini variant drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: 'block' }}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? 'initial' : 'center',
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : 'auto',
//                     justifyContent: 'center',
//                   }}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: 'block' }}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? 'initial' : 'center',
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : 'auto',
//                     justifyContent: 'center',
//                   }}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
      
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
//           eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
//           neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          
//         </Typography>
//       </Box>
//     </Box>
//   );
// }
 // add element

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { TransitionGroup } from 'react-transition-group';

// const FRUITS = [
//   '🍏 Apple',
//   '🍌 Banana',
//   '🍍 Pineapple',
//   '🥥 Coconut',
//   '🍉 Watermelon',
// ];

// function renderItem({ item, handleRemoveFruit }) {
//   return (
//     <ListItem
//       secondaryAction={
//         <IconButton
//           edge="end"
//           aria-label="delete"
//           title="Delete"
//           onClick={() => handleRemoveFruit(item)}
//         >
//           <DeleteIcon />
//         </IconButton>
//       }
//     >
//       <ListItemText primary={item} />
//     </ListItem>
//   );
// }

// export default function TransitionGroupExample() {
//   const [fruitsInBasket, setFruitsInBasket] = React.useState(FRUITS.slice(0, 3));

//   const handleAddFruit = () => {
//     const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
//     if (nextHiddenItem) {
//       setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
//     }
//   };

//   const handleRemoveFruit = (item) => {
//     setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
//   };

//   const addFruitButton = (
//     <Button
//       variant="contained"
//       disabled={fruitsInBasket.length >= FRUITS.length}
//       onClick={handleAddFruit}
//     >
//       Add fruit to basket
//     </Button>
//   );

//   return (
//     <div>
//       {addFruitButton}
//       <List sx={{ mt: 1 }}>
//         <TransitionGroup>
//           {fruitsInBasket.map((item) => (
//             <Collapse key={item}>{renderItem({ item, handleRemoveFruit })}</Collapse>
//           ))}
//         </TransitionGroup>
//       </List>
//     </div>
//   );
// }

// button light
// import * as React from 'react';
// import Switch from '@mui/material/Switch';

// export default function ControlledSwitches() {
//   const [checked, setChecked] = React.useState(true);

//   const handleChange = (event) => {
//     setChecked(event.target.checked);
//   };

//   return (
//     <Switch
//       checked={checked}
//       onChange={handleChange}
//       inputProps={{ 'aria-label': 'controlled' }}
//     />
//   );
// }


// tixt field 
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function BasicTextFields() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="standard-basic" label="Standard" variant="standard" />
//     </Box>
//   );
// }



// import * as React from 'react';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// export default function InputAdornments() {
//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
//       <div>
//         <TextField
//           label="With normal TextField"
//           id="outlined-start-adornment"
//           sx={{ m: 1, width: '25ch' }}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">kg</InputAdornment>,
//           }}
//         />
      //   <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      //     <OutlinedInput
      //       id="outlined-adornment-weight"
      //       endAdornment={<InputAdornment position="end">kg</InputAdornment>}
      //       aria-describedby="outlined-weight-helper-text"
      //       inputProps={{
      //         'aria-label': 'weight',
      //       }}
      //     />
//           <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
//         </FormControl>
      //   <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      //     <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      //     <OutlinedInput
      //       id="outlined-adornment-password"
      //       type={showPassword ? 'text' : 'password'}
      //       endAdornment={
      //         <InputAdornment position="end">
      //           <IconButton
      //             aria-label="toggle password visibility"
      //             onClick={handleClickShowPassword}
      //             onMouseDown={handleMouseDownPassword}
      //             edge="end"
      //           >
      //             {showPassword ? <VisibilityOff /> : <Visibility />}
      //           </IconButton>
      //         </InputAdornment>
      //       }
      //       label="Password"
      //     />
//         </FormControl>
//         <FormControl fullWidth sx={{ m: 1 }}>
//           <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-amount"
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//             label="Amount"
//           />
//         </FormControl>
//       </div>
      // <div>
      //   <TextField
      //     label="With normal TextField"
      //     id="filled-start-adornment"
      //     sx={{ m: 1, width: '25ch' }}
      //     InputProps={{
      //       startAdornment: <InputAdornment position="start">kg</InputAdornment>,
      //     }}
      //     variant="filled"
      //   />
      //   <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
      //     <FilledInput
      //       id="filled-adornment-weight"
      //       endAdornment={<InputAdornment position="end">kg</InputAdornment>}
      //       aria-describedby="filled-weight-helper-text"
      //       inputProps={{
      //         'aria-label': 'weight',
      //       }}
      //     />
      //     <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
      //   </FormControl>
      //   <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
      //     <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
      //     <FilledInput
      //       id="filled-adornment-password"
      //       type={showPassword ? 'text' : 'password'}
      //       endAdornment={
      //         <InputAdornment position="end">
      //           <IconButton
      //             aria-label="toggle password visibility"
      //             onClick={handleClickShowPassword}
      //             onMouseDown={handleMouseDownPassword}
      //             edge="end"
      //           >
      //             {showPassword ? <VisibilityOff /> : <Visibility />}
      //           </IconButton>
      //         </InputAdornment>
      //       }
      //     />
      //   </FormControl>
      //   <FormControl fullWidth sx={{ m: 1 }} variant="filled">
      //     <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
      //     <FilledInput
      //       id="filled-adornment-amount"
      //       startAdornment={<InputAdornment position="start">$</InputAdornment>}
      //     />
      //   </FormControl>
      // </div>
//       <div>
//         <TextField
//           label="With normal TextField"
//           id="standard-start-adornment"
//           sx={{ m: 1, width: '25ch' }}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">kg</InputAdornment>,
//           }}
//           variant="standard"
//         />
//         <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
//           <Input
//             id="standard-adornment-weight"
//             endAdornment={<InputAdornment position="end">kg</InputAdornment>}
//             aria-describedby="standard-weight-helper-text"
//             inputProps={{
//               'aria-label': 'weight',
//             }}
//           />
//           <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
//         </FormControl>
//         <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
//           <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
//           <Input
//             id="standard-adornment-password"
//             type={showPassword ? 'text' : 'password'}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </FormControl>
//         <FormControl fullWidth sx={{ m: 1 }} variant="standard">
//           <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
//           <Input
//             id="standard-adornment-amount"
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//           />
//         </FormControl>
//       </div>
//     </Box>
//   );
// }



/// delet button and add
// import * as React from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';

// export default function AccessibilityTooltips() {
//   return (
//     <div>
//       <Tooltip title="Delete">
//         <IconButton>
//           <DeleteIcon />
//         </IconButton>
//       </Tooltip>
//       <Tooltip describeChild title="Does not add if it already exists.">
//         <Button>Add</Button>
//       </Tooltip>
//     </div>
//   );
// }





////////////////// card



// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// export default function BasicCard() {
//   return (
   //  <Card sx={{ minWidth: 275 }}>
   //    <CardContent>
   //      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
   //        Word of the Day
   //      </Typography>
   //      <Typography variant="h5" component="div">
   //        be{bull}nev{bull}o{bull}lent
   //      </Typography>
   //      <Typography sx={{ mb: 1.5 }} color="text.secondary">
   //        adjective
   //      </Typography>
   //      <Typography variant="body2">
   //        well meaning and kindly.
   //        <br />
   //        {'"a benevolent smile"'}
   //      </Typography>
   //    </CardContent>
   //    <CardActions>
   //      <Button size="small">Learn More</Button>
   //    </CardActions>
   //  </Card>
//   );
// }



////// اختيار عدة كومبونينت
// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import PhoneIcon from '@mui/icons-material/Phone';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import PersonPinIcon from '@mui/icons-material/PersonPin';

// export default function IconLabelTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
//       <Tab icon={<PhoneIcon />} label="RECENTS" />
//       <Tab icon={<FavoriteIcon />} label="FAVORITES" />
//       <Tab icon={<PersonPinIcon />} label="NEARBY" />
//     </Tabs>
//   );
// }


// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';

// export default function ColorTabs() {
//   const [value, setValue] = React.useState('one');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         textColor="secondary"
//         indicatorColor="secondary"
//         aria-label="secondary tabs example"
//       >
//         <Tab value="one" label="Item One" />
//         <Tab value="two" label="Item Two" />
//         <Tab value="three" label="Item Three" />
//       </Tabs>
//     </Box>
//   );
// }


// <div className="menu-list" >    
// <Link to={"/home"} > 
//      <ListItem  disablePadding >
//       <ListItemButton>
//       <ListItemText  className='Item'>
//         <ListItemIcon>
//             <BiHome  className="Logo-Icon"  />
//         </ListItemIcon>
//           home
//        </ListItemText>
       
//       </ListItemButton>
//     </ListItem>
// </Link>

// <Link to="courses">
//     <ListItem  disablePadding >
//       <ListItemButton>
//       <ListItemText   className='Item'>
//         <ListItemIcon>
//         <BiSolidGraduation className="Logo-Icon"   />
//         </ListItemIcon>
//         Courses
//         </ListItemText>
//       </ListItemButton>
//     </ListItem>
//  </Link>
// <Link to="teacher" >
//     <ListItem  disablePadding >         
//       <ListItemButton>
//       <ListItemText  className='Item'>
//         <ListItemIcon>
//         <BiSolidUserAccount className="Logo-Icon" />
//         </ListItemIcon>
//          Teachers
//         </ListItemText>
//       </ListItemButton> 
//     </ListItem>
//   </Link>

//     <ListItem  disablePadding >
//       <ListItemButton>
//       <ListItemText  className='Item'>
//         <ListItemIcon>
//         <BiQuestionMark className="Logo-Icon" />
//         </ListItemIcon>
//            About
//         </ListItemText>
//       </ListItemButton>
//     </ListItem>

//     <ListItem  disablePadding >
//       <ListItemButton>
//       <ListItemText  className='Item'>
//         <ListItemIcon>
//        <BiMessage className="Logo-Icon" />
             
//         </ListItemIcon>
//         Message
//         </ListItemText>
//       </ListItemButton>
//     </ListItem>

//     <ListItem  disablePadding >
//       <ListItemButton>
//       <ListItemText  className='Item'>
//         <ListItemIcon>
//         <BiHelpCircle className="Logo-Icon" />
//         </ListItemIcon>
//         Help  
//         </ListItemText>
//       </ListItemButton>
//     </ListItem>
  
//   </div> 


/////////////////////////////////////////////////////////////////////////////////////

 //light and dark
// import React, { useState } from "react";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import { Card,  Switch } from "@mui/material"

// export default function App() {

//   // state to manage the dark mode
//   const [toggleDarkMode, setToggleDarkMode] = useState(true);

//   // function to toggle the dark mode as true or false
//   const toggleDarkTheme = () => {
//     setToggleDarkMode(!toggleDarkMode);
//   };

//   // applying the primary and secondary theme colors
//   const darkTheme = createTheme({
//     palette: {
//       mode: toggleDarkMode ? 'dark' : 'light', // handle the dark mode state on toggle
//       primary: {
//         main: '#90caf9',
//       },
//       secondary: {
//         main: '#131052',

//       },
//     },
//   });

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <CssBaseline />
//       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <h2>Toggle Dark mode</h2>
//         <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
//         {/* rendering the card component with card content */}
//         <Card sx={{ width: '30%', borderRadius: 3, padding: 1 }}>
        
         
//         </Card>
//       </div>
//     </ThemeProvider>
//   )
// }


/////////////////////

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
// import Stack from '@mui/material/Stack';

// export default function IconLabelButtons() {
//   return (
   //  <Stack direction="row" spacing={2}>
   //    <Button variant="outlined" startIcon={<DeleteIcon />}>
   //      Delete
   //    </Button>
   //    <Button variant="contained" endIcon={<SendIcon />}>
   //      Send
   //    </Button>
   //  </Stack>
//   );
// }
// import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';





// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Close';
// import {
//   GridRowModes,
//   DataGrid,
//   GridToolbarContainer,
//   GridActionsCellItem,
//   GridRowEditStopReasons,
// } from '@mui/x-data-grid';
// import {
//   randomCreatedDate,
//   randomTraderName,
//   randomId,
//   randomArrayItem,
// }from '@mui/x-data-grid-generator';

// const roles = ['Market', 'Finance', 'Development'];
// const randomRole = () => {
//   return randomArrayItem(roles);
// };

// const initialRows = [
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 25,
//     joinDate: randomCreatedDate(),
//     role: randomRole(),
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 36,
//     joinDate: randomCreatedDate(),
//     role: randomRole(),
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 19,
//     joinDate: randomCreatedDate(),
//     role: randomRole(),
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 28,
//     joinDate: randomCreatedDate(),
//     role: randomRole(),
//   },
//   {
//     id: randomId(),
//     name: randomTraderName(),
//     age: 23,
//     joinDate: randomCreatedDate(),
//     role: randomRole(),
//   },
// ];

// function EditToolbar(props) {
//   const { setRows, setRowModesModel } = props;

//   const handleClick = () => {
//     const id = randomId();
//     setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
//     setRowModesModel((oldModel) => ({
//       ...oldModel,
//       [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
//     }));
//   };

//   return (
//     <GridToolbarContainer>
//       <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
//         Add record
//       </Button>
//     </GridToolbarContainer>
//   );
// }

// export default function FullFeaturedCrudGrid() {
//   const [rows, setRows] = React.useState(initialRows);
//   const [rowModesModel, setRowModesModel] = React.useState({});

//   const handleRowEditStop = (params, event) => {
//     if (params.reason === GridRowEditStopReasons.rowFocusOut) {
//       event.defaultMuiPrevented = true;
//     }
//   };

//   const handleEditClick = (id) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
//   };

//   const handleSaveClick = (id) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
//   };

//   const handleDeleteClick = (id) => () => {
//     setRows(rows.filter((row) => row.id !== id));
//   };

//   const handleCancelClick = (id) => () => {
//     setRowModesModel({
//       ...rowModesModel,
//       [id]: { mode: GridRowModes.View, ignoreModifications: true },
//     });

//     const editedRow = rows.find((row) => row.id === id);
//     if (editedRow.isNew) {
//       setRows(rows.filter((row) => row.id !== id));
//     }
//   };

//   const processRowUpdate = (newRow) => {
//     const updatedRow = { ...newRow, isNew: false };
//     setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
//     return updatedRow;
//   };

//   const handleRowModesModelChange = (newRowModesModel) => {
//     setRowModesModel(newRowModesModel);
//   };

//   const columns = [
//     { field: 'name', headerName: 'Name', width: 180, editable: true },
//     {
//       field: 'age',
//       headerName: 'Age',
//       type: 'number',
//       width: 80,
//       align: 'left',
//       headerAlign: 'left',
//       editable: true,
//     },
//     {
//       field: 'joinDate',
//       headerName: 'Join date',
//       type: 'date',
//       width: 180,
//       editable: true,
//     },
//     {
//       field: 'role',
//       headerName: 'Department',
//       width: 220,
//       editable: true,
//       type: 'singleSelect',
//       valueOptions: ['Market', 'Finance', 'Development'],
//     },
//     {
//       field: 'actions',
//       type: 'actions',
//       headerName: 'Actions',
//       width: 100,
//       cellClassName: 'actions',
//       getActions: ({ id }) => {
//         const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

//         if (isInEditMode) {
//           return [
//             <GridActionsCellItem
//               icon={<SaveIcon />}
//               label="Save"
//               sx={{
//                 color: 'primary.main',
//               }}
//               onClick={handleSaveClick(id)}
//             />,
//             <GridActionsCellItem
//               icon={<CancelIcon />}
//               label="Cancel"
//               className="textPrimary"
//               onClick={handleCancelClick(id)}
//               color="inherit"
//             />,
//           ];
//         }

//         return [
//           <GridActionsCellItem
//             icon={<EditIcon />}
//             label="Edit"
//             className="textPrimary"
//             onClick={handleEditClick(id)}
//             color="inherit"
//           />,
//           <GridActionsCellItem
//             icon={<DeleteIcon />}
//             label="Delete"
//             onClick={handleDeleteClick(id)}
//             color="inherit"
//           />,
//         ];
//       },
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         height: 500,
//         width: '100%',
//         '& .actions': {
//           color: 'text.secondary',
//         },
//         '& .textPrimary': {
//           color: 'text.primary',
//         },
//       }}
//     >
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         editMode="row"
//         rowModesModel={rowModesModel}
//         onRowModesModelChange={handleRowModesModelChange}
//         onRowEditStop={handleRowEditStop}
//         processRowUpdate={processRowUpdate}
//         slots={{
//           toolbar: EditToolbar,
//         }}
//         slotProps={{
//           toolbar: { setRows, setRowModesModel },
//         }}
//       />
//     </Box>
//   );
// }





// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// export default function FormDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open form dialog
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           component: 'form',
//           onSubmit: (event) => {
//             event.preventDefault();
//             const formData = new FormData(event.currentTarget);
//             const formJson = Object.fromEntries(formData.entries());
//             const email = formJson.email;
//             console.log(email);
//             handleClose();
//           },
//         }}
//       >
//         <DialogTitle>Subscribe</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To subscribe to this website, please enter your email address here. We
//             will send updates occasionally.
//           </DialogContentText>
//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="name"
//             name="email"
//             label="Email Address"
//             type="email"
//             fullWidth
//             variant="standard"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button type="submit">Subscribe</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }