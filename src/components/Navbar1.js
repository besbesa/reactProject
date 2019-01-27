import React from 'react';
import searchImage from '../s.png';
import logo1 from './logo1.png';
import logo2 from './dark2.0.png';
import {Navbar,Nav,FormControl,Form,Button} from 'react-bootstrap';

class Navbar1 extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Navbar fixed="top" bg="dark" variant="dark" >
          <Navbar.Brand href="#home"><img src={logo2} style={{height:53}}/></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="http://localhost:3000/" style={{marginLeft:700, color:"white", fontFamily:'Open Sans', fontSize:18}}>Home</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl style={{fontFamily:"'Open Sans',sans-serif",fontSize:18}} type="text" placeholder="Search" className="mr-sm-2" />
            <Button style={{fontFamily:"'Open Sans',sans-serif",fontSize:18}} className="searchButton" variant="outline-info" >Search</Button>
          </Form>
        </Navbar>
      </div>
    )
  }
}
export default Navbar1;