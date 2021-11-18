import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  
  Switch,
  Route,
  Link,
  
  useRouteMatch
} from "react-router-dom";
import useAuth from '../../Hooks/UseAuth/useAuth';
import ManageAllProducts from '../Admin/Manage.all.products/ManageAllProducts';
import MyOrders from '../My Orders/My-Orders';
import MakeAdmin from '../Admin/Make.A.Admin/MakeAAdmin';
import Review from '../Review/Review';
import Payment from '../Payment/Payment';
import AdminRoute from '../Admin/AdminRoute/AdminRoute';
import Addproduct from '../AddProduct/Addproduc';
import DashBoardHome from './DashBoard/DashBoardHome/DashBoardHome';
const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {user,logout,admin} = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <div>
      <Link to="/shop"><button style={{  backgroundColor:"#39395f" , color:"#fff", textDecoration: "none" ,width:"100%" }} class="btn " >Shop</button></Link>
      </div>
      <br/>
      
      {
        admin && <Box>
          <div>
      <Link to={`${url}/makeAdmin`}><button style={{  backgroundColor:"#39395f" , color:"#fff", textDecoration: "none",width:"100%" }} class="btn " >Make Admin</button></Link>
      </div>
          
      <br/>
      
      
      <div>
      <Link to={`${url}/addProduct`}><button style={{  backgroundColor:"#39395f" , color:"#fff", textDecoration: "none",width:"100%" }} class="btn " >Add Products</button></Link>
      </div>
      <br/>
      
     
      <div>
      <Link to={`${url}/manageAllProducts`}><button style={{  backgroundColor:"#39395f" , color:"#fff", textDecoration: "none",width:"100%" }} class="btn " >Manage All Products</button></Link>
      </div>
      <br/>
      
      

        </Box>
      }
       {
         !admin && <Box>
           <div>
      <Link to={`${url}/myorder`}><button style={{  backgroundColor:"#39395f" , color:"#fff", textDecoration: "none",width:"100%" }} class="btn " >My Orders</button></Link>
      </div>
      <br/>
      
      
      <div>
      <Link to={`${url}/payment`}><button style={{  backgroundColor:"#39395f" , color:"#fff", textDecoration: "none",width:"100%"}} class="btn " >Payment</button></Link>
      </div>
      <br/>
      
      
      
      <Divider />
      <div>
      <Link to={`${url}/review`}><button style={{  backgroundColor:"#39395f" , color:"#fff", textDecoration: "none",width:"100%" }} class="btn " >Review</button></Link>
      </div>
      <br/>
      
      
      <div>
      <Link to={`${url}/manageorders`}><button style={{  backgroundColor:"#39395f" , color:"#fff", textDecoration: "none" ,width:"100%"}} class="btn " >Manage Order</button></Link>
      </div>
      <br/>
         </Box>
       }
      
      <br/>
      {
          user?.email ? 
          <Box>
            
          <Link to="/login"><button onClick={logout} style={{  backgroundColor:"#39395f" , color:"#fff",width:"100%" }} class="btn " >Logout</button></Link>
          </Box>
:
<Link to="/login"><button style={{  backgroundColor:"#39395f" , color:"#fff" }} class="btn " >Login</button></Link>

        }
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography variant="h4">
        
        </Typography>
        <Switch>
        {/* <Route path={`${path}`}>
        <DashBoardHome></DashBoardHome>
        </Route> */}
        <Route path={`${path}/myorder`}>
          <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/manageAllProducts`}>
          <ManageAllProducts></ManageAllProducts>
        </Route>
        <AdminRoute path={`${path}/addProduct`}>
          <Addproduct />
        </AdminRoute>
        <Route path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
        
        <Route path={`${path}/review`}>
          <Review />
        </Route>
        <Route path={`${path}/payment`}>
          <Payment />
        </Route>
      </Switch>
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
