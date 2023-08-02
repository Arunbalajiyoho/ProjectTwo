import React from 'react'
import DiscoverNavbar from "../components/DiscoverNavbar"
import CarouselSlider from "../components/CarouselSlider"
import Form from 'react-bootstrap/Form';
import { Button, Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AiFillLike} from "react-icons/ai"
import {AiFillEye} from "react-icons/ai"
const Discover = () => {
  return (
    <div>
    <DiscoverNavbar/>
    <CarouselSlider/>
    <div style={{textAlign:'center',marginTop:30}}>
    <header style={{
      fontSize:70,
      fontWeight:"700"
    }}>Best of Behance</header>
    <div style={{fontSize:20,fontWeight:"600",marginTop:5}}>Projects featured today by our curators</div>

   <Form style={{display:'flex' ,justifyContent:'center',marginTop:8}}>
   <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
                className='my-2'
              style={{width:350,
            borderRadius:20,
            height:40,
            fontSize:15,
            fontWeight:"600"
            }}
            />
   </Form>
            </div>

            <Container fluid style={{marginTop:50}}>
              <Row>
                <Col>
                <Card >
            <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/133d4e176050279.64be86902a718.jpg" className='img-fluid ' style={{backgroundSize:'cover',height:200}} />
      <Card.Body>
        <Card.Title>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
              <img src='https://mir-s3-cdn-cf.behance.net/user/115/7b255494341381.6317cdbb027e9.jpg' className='img-fluid ' style={{
                height:30,
                borderRadius:100
              }}/> <span  style={{ fontSize:14, paddingLeft:2,fontWeight:"700",color:'#737373'}}> Rafael Nobre Studio</span>
            </div>
            <div style={{display:'flex',marginTop:6}}>
              <div style={{color:'#737373',fontSize:12,fontWeight:"700"}}> <AiFillLike/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
              <div style={{color:'#737373',fontSize:12,fontWeight:"800",marginLeft:5}}> <AiFillEye/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
            </div>
            </div>
        </Card.Title>
       
      </Card.Body>     
            </Card>
                </Col>

                <Col>
                <Card  >
            <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/a5117a172949111.6488465ad50ea.jpeg" className='img-fluid 'style={{backgroundSize:'cover',height:200}}/>
      <Card.Body>
        <Card.Title>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
              <img src='https://mir-s3-cdn-cf.behance.net/user/115/7b255494341381.6317cdbb027e9.jpg' className='img-fluid ' style={{
                height:30,
                borderRadius:100
              }}/> <span  style={{ fontSize:14, paddingLeft:2,fontWeight:"700",color:'#737373'}}> Rafael Nobre Studio</span>
            </div>
            <div style={{display:'flex',marginTop:6}}>
              <div style={{color:'#737373',fontSize:12,fontWeight:"700"}}> <AiFillLike/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
              <div style={{color:'#737373',fontSize:12,fontWeight:"800",marginLeft:5}}> <AiFillEye/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
            </div>
            </div>
        </Card.Title>
       
      </Card.Body>     
            </Card>
                </Col>
                <Col>
                <Card  >
            <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/ba569f176558725.64c77484850a7.jpg" className='img-fluid 'style={{backgroundSize:'cover',height:200}}/>
      <Card.Body>
        <Card.Title>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
              <img src='https://mir-s3-cdn-cf.behance.net/user/115/7b255494341381.6317cdbb027e9.jpg' className='img-fluid ' style={{
                height:30,
                borderRadius:100
              }}/> <span  style={{ fontSize:14, paddingLeft:2,fontWeight:"700",color:'#737373'}}> Rafael Nobre Studio</span>
            </div>
            <div style={{display:'flex',marginTop:6}}>
              <div style={{color:'#737373',fontSize:12,fontWeight:"700"}}> <AiFillLike/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
              <div style={{color:'#737373',fontSize:12,fontWeight:"800",marginLeft:5}}> <AiFillEye/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
            </div>
            </div>
        </Card.Title>
       
      </Card.Body>     
            </Card>
                </Col>

                  <Col>
                <Card  >
            <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e65a59176412999.64c41402e4a7b.gif" className='img-fluid 'style={{backgroundSize:'cover',height:200}}/>
      <Card.Body>
        <Card.Title>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
              <img src='https://mir-s3-cdn-cf.behance.net/user/115/7b255494341381.6317cdbb027e9.jpg' className='img-fluid ' style={{
                height:30,
                borderRadius:100
              }}/> <span  style={{ fontSize:14, paddingLeft:2,fontWeight:"700",color:'#737373'}}> Rafael Nobre Studio</span>
            </div>
            <div style={{display:'flex',marginTop:6}}>
              <div style={{color:'#737373',fontSize:12,fontWeight:"700"}}> <AiFillLike/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
              <div style={{color:'#737373',fontSize:12,fontWeight:"800",marginLeft:5}}> <AiFillEye/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
            </div>
            </div>
        </Card.Title>
       
      </Card.Body>     
            </Card>
                </Col>
              </Row>
            </Container>
       
          
            <Container fluid style={{marginTop:40}}>
              <Row>
                <Col>
                <Card >
            <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/6707f9176060815.64bea32a2262c.jpg" className='img-fluid ' style={{backgroundSize:'cover',height:200}} />
      <Card.Body>
        <Card.Title>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
              <img src='https://mir-s3-cdn-cf.behance.net/user/115/7b255494341381.6317cdbb027e9.jpg' className='img-fluid ' style={{
                height:30,
                borderRadius:100
              }}/> <span  style={{ fontSize:14, paddingLeft:2,fontWeight:"700",color:'#737373'}}> Rafael Nobre Studio</span>
            </div>
            <div style={{display:'flex',marginTop:6}}>
              <div style={{color:'#737373',fontSize:12,fontWeight:"700"}}> <AiFillLike/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
              <div style={{color:'#737373',fontSize:12,fontWeight:"800",marginLeft:5}}> <AiFillEye/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
            </div>
            </div>
        </Card.Title>
       
      </Card.Body>     
            </Card>
                </Col>

                <Col>
                <Card  >
            <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/cc3215176264563.64c1ac02e01d8.jpg" className='img-fluid 'style={{backgroundSize:'cover',height:200}}/>
      <Card.Body>
        <Card.Title>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
              <img src='https://mir-s3-cdn-cf.behance.net/user/115/7b255494341381.6317cdbb027e9.jpg' className='img-fluid ' style={{
                height:30,
                borderRadius:100
              }}/> <span  style={{ fontSize:14, paddingLeft:2,fontWeight:"700",color:'#737373'}}> Rafael Nobre Studio</span>
            </div>
            <div style={{display:'flex',marginTop:6}}>
              <div style={{color:'#737373',fontSize:12,fontWeight:"700"}}> <AiFillLike/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
              <div style={{color:'#737373',fontSize:12,fontWeight:"800",marginLeft:5}}> <AiFillEye/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
            </div>
            </div>
        </Card.Title>
       
      </Card.Body>     
            </Card>
                </Col>
                <Col>
                <Card  >
            <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/86d10b176268381.64c1c6636641f.png" className='img-fluid 'style={{backgroundSize:'cover',height:200}}/>
      <Card.Body>
        <Card.Title>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
              <img src='https://mir-s3-cdn-cf.behance.net/user/115/7b255494341381.6317cdbb027e9.jpg' className='img-fluid ' style={{
                height:30,
                borderRadius:100
              }}/> <span  style={{ fontSize:14, paddingLeft:2,fontWeight:"700",color:'#737373'}}> Rafael Nobre Studio</span>
            </div>
            <div style={{display:'flex',marginTop:6}}>
              <div style={{color:'#737373',fontSize:12,fontWeight:"700"}}> <AiFillLike/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
              <div style={{color:'#737373',fontSize:12,fontWeight:"800",marginLeft:5}}> <AiFillEye/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
            </div>
            </div>
        </Card.Title>
       
      </Card.Body>     
            </Card>
                </Col>

                  <Col>
                <Card  >
            <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/452605172429409.647f3a3ca3c3b.png" className='img-fluid 'style={{backgroundSize:'cover',height:200}}/>
      <Card.Body>
        <Card.Title>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
              <img src='https://mir-s3-cdn-cf.behance.net/user/115/7b255494341381.6317cdbb027e9.jpg' className='img-fluid ' style={{
                height:30,
                borderRadius:100
              }}/> <span  style={{ fontSize:14, paddingLeft:2,fontWeight:"700",color:'#737373'}}> Rafael Nobre Studio</span>
            </div>
            <div style={{display:'flex',marginTop:6}}>
              <div style={{color:'#737373',fontSize:12,fontWeight:"700"}}> <AiFillLike/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
              <div style={{color:'#737373',fontSize:12,fontWeight:"800",marginLeft:5}}> <AiFillEye/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
            </div>
            </div>
        </Card.Title>
       
      </Card.Body>     
            </Card>
                </Col>
              </Row>
            </Container>

            <Container fluid style={{marginTop:50}}>
              <Row>
                <Col style={{margin:'auto',justifyContent:'center',textAlign:'center'}}>
                    <header style={{fontWeight:"700",fontSize:17}}>Featured Streams</header>
                    <p style={{fontSize:14,fontWeight:"700",color:'dimgray',opacity:0.7}}>Watch leading creatives livestream on Behance.</p>
                    <Button variant="light" style={{border:"1px solid black",borderRadius:18}}>View All</Button>
                </Col>

                 
                <Col>
                <iframe  height="250" src="https://www.youtube.com/embed/4iMIg_CzxTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Col>

                <Col>
                <iframe  height="250" src="https://www.youtube.com/embed/4iMIg_CzxTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Col>
              
                
                <Col>
                <iframe   height="250" src="https://www.youtube.com/embed/4iMIg_CzxTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Col>
              
              
              </Row>
            </Container>
          
          
          
            <Container fluid style={{marginTop:50}}>
              <Row>
                <Col>
                <Card >
            <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f6b1d1170135455.6478ce41716bf.jpg" className='img-fluid ' style={{backgroundSize:'cover',height:200}} />
      <Card.Body>
        <Card.Title>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
              <img src='https://mir-s3-cdn-cf.behance.net/user/115/7b255494341381.6317cdbb027e9.jpg' className='img-fluid ' style={{
                height:30,
                borderRadius:100
              }}/> <span  style={{ fontSize:14, paddingLeft:2,fontWeight:"700",color:'#737373'}}> Rafael Nobre Studio</span>
            </div>
            <div style={{display:'flex',marginTop:6}}>
              <div style={{color:'#737373',fontSize:12,fontWeight:"700"}}> <AiFillLike/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
              <div style={{color:'#737373',fontSize:12,fontWeight:"800",marginLeft:5}}> <AiFillEye/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
            </div>
            </div>
        </Card.Title>
       
      </Card.Body>     
            </Card>
                </Col>

                <Col>
                <Card  >
            <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/919054175591141.64b671d8b594d.jpg" className='img-fluid 'style={{backgroundSize:'cover',height:200}}/>
      <Card.Body>
        <Card.Title>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
              <img src='https://mir-s3-cdn-cf.behance.net/user/115/7b255494341381.6317cdbb027e9.jpg' className='img-fluid ' style={{
                height:30,
                borderRadius:100
              }}/> <span  style={{ fontSize:14, paddingLeft:2,fontWeight:"700",color:'#737373'}}> Rafael Nobre Studio</span>
            </div>
            <div style={{display:'flex',marginTop:6}}>
              <div style={{color:'#737373',fontSize:12,fontWeight:"700"}}> <AiFillLike/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
              <div style={{color:'#737373',fontSize:12,fontWeight:"800",marginLeft:5}}> <AiFillEye/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
            </div>
            </div>
        </Card.Title>
       
      </Card.Body>     
            </Card>
                </Col>
                <Col>
                <Card  >
            <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/9c5c85175591141.64b671d8bbc4f.jpg" className='img-fluid 'style={{backgroundSize:'cover',height:200}}/>
      <Card.Body>
        <Card.Title>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
              <img src='https://mir-s3-cdn-cf.behance.net/user/115/7b255494341381.6317cdbb027e9.jpg' className='img-fluid ' style={{
                height:30,
                borderRadius:100
              }}/> <span  style={{ fontSize:14, paddingLeft:2,fontWeight:"700",color:'#737373'}}> Rafael Nobre Studio</span>
            </div>
            <div style={{display:'flex',marginTop:6}}>
              <div style={{color:'#737373',fontSize:12,fontWeight:"700"}}> <AiFillLike/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
              <div style={{color:'#737373',fontSize:12,fontWeight:"800",marginLeft:5}}> <AiFillEye/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
            </div>
            </div>
        </Card.Title>
       
      </Card.Body>     
            </Card>
                </Col>

                  <Col>
                <Card  >
            <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/701bd6175939265.64bc3496ce66f.png" className='img-fluid 'style={{backgroundSize:'cover',height:200}}/>
      <Card.Body>
        <Card.Title>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
              <img src='https://mir-s3-cdn-cf.behance.net/user/115/7b255494341381.6317cdbb027e9.jpg' className='img-fluid ' style={{
                height:30,
                borderRadius:100
              }}/> <span  style={{ fontSize:14, paddingLeft:2,fontWeight:"700",color:'#737373'}}> Rafael Nobre Studio</span>
            </div>
            <div style={{display:'flex',marginTop:6}}>
              <div style={{color:'#737373',fontSize:12,fontWeight:"700"}}> <AiFillLike/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
              <div style={{color:'#737373',fontSize:12,fontWeight:"800",marginLeft:5}}> <AiFillEye/> </div><div style={{color:'#737373',fontSize:12,fontWeight:"700",marginLeft:5}}>246</div>
            </div>
            </div>
        </Card.Title>
       
      </Card.Body>     
            </Card>
                </Col>
              </Row>
            </Container>

                
    </div>
    
  )
}

export default Discover