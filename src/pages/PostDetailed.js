import React from 'react'
import bootstrap from 'bootstrap'
import { Container } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';

const PostDetailed = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div style={{backgroundColor:"black"}}>

        <div>
          <Container fluid style={{backgroundColor:"transparent"}} className='d-flex'>
            <img src='https://mir-s3-cdn-cf.behance.net/user/50/184aa115570001.59528aaec050c.png'
             className='rounded-circle' style={{width:"40px",height:"40px",marginTop:"20px",marginLeft:"10px"}}/>
            <div style={{color:"white",marginLeft:"30px"}}>
              <p style={{fontSize:'18px',marginTop:"10px",fontWeight:700}}>Nyord Construction - Brand Identity</p>
              <p style={{marginBottom:"8px",fontWeight:500}}>Insigniada .  • Follow</p>
            </div>
          </Container>
        </div>


        
            <div  className='d-flex'>
            <Container style={{marginLeft:"100px",marginTop:"50px"}}>
              <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/04d8f3148388563.62d559becab45.jpg' style={{width:"100%"}} />
            </Container>
            
            <div>
            <img src='https://mir-s3-cdn-cf.behance.net/user/50/184aa115570001.59528aaec050c.png'
             className='rounded-circle' style={{width:"40px",height:"40px",marginTop:"50px",marginRight:"80px",marginLeft:"10px"}}/>
             <p style={{color:"white",fontSize:"14px",marginLeft:"10px"}}>Follow</p>


             <img src='https://cdn-icons-png.flaticon.com/128/552/552486.png'
             className='rounded-circle' style={{width:"40px",height:"40px",marginTop:"20px",marginLeft:"10px"}}/>
             <p style={{color:"white",fontSize:"14px",marginLeft:"17px"}}>Hire</p>


             <img src='https://a5.behance.net/3b958de733be84110bb55a80b3a9b4987f00c178/img/project/tools/1x/illustrator.png'
             className='rounded-circle' style={{width:"40px",height:"40px",marginTop:"20px",marginLeft:"10px"}}/>
             <p style={{color:"white",marginLeft:"15px",fontSize:"14px"}}>Tools</p>

             
             <img src='https://cdn-icons-png.flaticon.com/128/3616/3616558.png'
             className='rounded-circle' style={{width:"40px",height:"40px",marginTop:"20px",marginLeft:"10px"}}/>
             <p style={{color:"white",marginLeft:"15px",fontSize:"14px"}}>Save</p>


             <img src='https://cdn-icons-png.flaticon.com/128/9790/9790408.png'
             className='rounded-circle' style={{width:"40px",height:"40px",marginTop:"20px",marginLeft:"10px"}}/>
             <p style={{color:"white",fontSize:"14px"   }}>Appreciate</p>
             </div>  
             </div>
           



            <div style={{marginTop:"90px"}}>
              <p style={{color:"white",fontSize:"30px",fontWeight:700,textAlign:"center"}}>NYORD</p>
              <p style={{color:"grey",textAlign:"center",marginLeft:"250px",fontSize:"14px"}}>Logo Design, Brand Identity, Print Design, Website Design</p> <br/>

              <p style={{color:"grey",marginLeft:"735px",fontSize:"16px"}}>Nyord Construction is a construction company from Denmark that is dedicated to quality and<br/> integrity. Headquartered in Christiansfeld, the company has been in operation since 2010. Nyord<br/>  specializes in general construction, design-build, and turnkey projects with expertise in schools,<br/>  hospitals, health care facilities, and commercial buildings as well as industrial projects.</p> <br/>

              <p style={{color:"white",fontSize:"20px",fontWeight:700,textAlign:"center",marginLeft:"120px"}}>The Mission & Challenges</p> 

              <p style={{color:"grey",marginLeft:"735px",fontSize:"16px"}}>They previous logo wasn’t so bad, but the main challenge was a lack of consistency through identity<br/> and logo being too basic, without any unique symbol or wordmark. That being said, our<br/> main obstacle was to craft a bold and popping identity, while keeping the simple and sharp style.</p> <br/>

            </div>
         

          <div>
            <Container>
             <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/a44b4c148388563.62ff9629bb5a5.gif' style={{width:"100%"}} />
            </Container>
           </div>
        
          <div>
            <Container>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/545e0f148388563.62d55be05f4a1.jpg'
            style={{width:"100%"}} />
            </Container>
          </div>

          <div>
            <Container>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/6024c6148388563.62d55be05ff4e.jpg'
            style={{width:"100%"}} />
            </Container>
          </div>

          <div>
            <Container>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/16b261148388563.62ff9629ba58c.gif'
            style={{width:"100%"}} />
            </Container>
          </div> <br/><br/>

          <div>
            <Container>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/3e8481148388563.62ff9629baea8.gif'
            style={{width:"100%"}} />
            </Container>
          </div> <br/>

          <div>
            <Container>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/00c356148388563.62d563dbafdaa.jpg'
            style={{width:"100%"}} />
            </Container>
          </div>

          <div>
            <Container>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/446281148388563.62ff9629b9c8b.gif'
            style={{width:"100%"}} />
            </Container>
          </div> <br/>

          <div>
            <Container>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/6f7e89148388563.62d524319adb3.jpg'
            style={{width:"100%"}} />
            </Container>
          </div> <br/>

          <div>
            <Container>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/92a62a148388563.62d524319b465.jpg'
            style={{width:"100%"}} />
            </Container>
          </div> <br/> <br/> <br/>

          <div style={{marginTop:"50px"}}>
            <Container>
            <p style={{color:"white",fontSize:"20px",fontWeight:700,textAlign:"center"}}>The Output & Impact</p>
            <p style={{color:"grey",marginLeft:"550px",fontSize:"16px"}}>
              After exploring some symbol options, we’ve decided to keep the wordmark direction and from there<br/> derive the symbol which is simple, yet effective. The outcome is a unique wordmark, used either<br/> standalone or as a combination with the arrow/triangle on various elements, surfaces and materials.<br/> Color scheme is a combination of sleek black and popping yellow, paired with the bold industrial<br/> typography. 
              </p> <br/>
              <p  style={{color:"grey",marginLeft:"550px",fontSize:"16px"}}>
              Since rebranding, within 3 months they’ve gained +55% more visitors on their website, +220% <br/> engagement on the social media and 2 magazine exposures as well. Besides that, now they are<br/> planning on expansion in 3 different cities around Kopenhagen.
              </p>
              </Container>
          </div> <br/><br/><br/>


          <div>
            <Container>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/95e757148388563.62d524319bdf8.jpg'
            style={{width:"100%"}} />
            </Container>
          </div> <br/>

          <div>
            <Container>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/2349f9148388563.62d563dbaf2ad.jpg'
            style={{width:"100%"}} />
            </Container>
          </div> <br/>

          <div>
            <Container>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/3aa865148388563.62d563dbae71b.jpg'
            style={{width:"100%"}} />
            </Container>
          </div><br/>

          <div>
            <Container>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/282c45148388563.630b34011bb8a.gif'
            style={{width:"100%"}} />
            </Container>
          </div><br/>

          <div>
            <Container>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/316ccf148388563.630b34011b38d.jpg'
            style={{width:"100%"}} />
            </Container>
          </div><br/>

          <div>
            <Container>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/e97010148388563.62d5644abfb86.jpg'
            style={{width:"100%"}} />
            </Container>
          </div><br/>

          <div>
            <Container>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/1486f6148388563.62d5644ac0503.jpg'
            style={{width:"100%"}} />
            </Container>
          </div><br/>


          <div style={{marginTop:"50px"}}>
            <Container>
            <p  style={{color:"white",fontSize:"20px",fontWeight:700,marginLeft:"500px"}}>Client's Words</p>
            <p style={{color:"grey",marginLeft:"500px",fontSize:"13px"}}>Prior to collaboration with Insigniada, we’ve hired another agency, which costed us few thousand dollars and 2 months of work, without getting any good directions and designs. So glad we opted out and found Insigniada to collaborate with. Since beginning, Ivan was so responsive and polite to work with, that we had a feeling of just going to a coffee with our friends. Kim and I are so happy with the outcome and how effective whole identity look and works right now!</p> <br/>

            <p  style={{color:"white",fontSize:"20px",fontWeight:700,marginLeft:"500px"}}>
              Thank you for watching! <br/>
              Are you ready to make your brand awesome?
            </p> <br/>

            <p style={{color:"white",fontSize:"15px",fontWeight:500,marginLeft:"500px"}}>
            If you are interested in a cooperation with us, <span style={{color:"yellow"}}>drop us an email</span> and we'll get to you as soon as possible.  
            </p> <br/> <br/>

            <p style={{color:"white",fontSize:"18px",fontWeight:500,marginLeft:"500px"}}>
              www.insigniada.com  &nbsp; <span style={{color:"yellow",fontWeight:600}}>|</span> &nbsp;   hello@insigniada.com
                </p> 

                <p style={{color:"white",fontSize:"18px",fontWeight:500,marginLeft:"500px"}}>
                Skype:  Insigniada  &nbsp; <span style={{color:"yellow",fontWeight:600}}>|</span> &nbsp;  © 2022 Insigniada
                </p> <br/>
            </Container>
          </div> <br/>


          <div>
          <Container>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/384b3f148388563.62d52453f02b0.jpg'
            style={{width:"100%"}} />
            </Container>
          </div> <br/><br/>


          <div style={{alignItems:"center",textAlign:"center"}}>
            
            <img src='https://cdn-icons-png.flaticon.com/128/9790/9790408.png' style={{width:"60px"}} />
            <p style={{fontSize:"26px",fontWeight:700,color:"white"}}>Nyord Construction - Brand Identity</p>
            </div>

            <div className='d-flex' style={{alignItems:"center",textAlign:"center",justifyContent:"center"}}>
              <div className='d-flex'>
                <img src='https://cdn-user-icons.flaticon.com/110141/110141595/1690807541006.svg?token=exp=1690808443~hmac=830f7842fd1c38040394371a89756a47' style={{width:"20px"}} />
                <p style={{fontSize:"16px",color:"grey",marginLeft:"5px",marginTop:"20px"}}>520</p>
              </div>

              <div className='d-flex' style={{marginLeft:"20px"}}>
                <img src='https://cdn-user-icons.flaticon.com/110141/110141595/1690808055402.svg?token=exp=1690808956~hmac=1de7df98572880c72b666fc57b45e01c' style={{width:"20px",marginTop:"5px"}} />
                <p style={{fontSize:"16px",color:"grey",marginLeft:"5px",marginTop:"20px"}}>6.9K</p>
              </div>

              <div className='d-flex' style={{marginLeft:"20px"}}>
                <img src='https://cdn-user-icons.flaticon.com/110141/110141595/1690808126528.svg?token=exp=1690809027~hmac=d723aa3e2321fa2b4337614d32409c81' style={{width:"20px",marginTop:"5px"}} />
                <p style={{fontSize:"16px",color:"grey",marginLeft:"5px",marginTop:"20px"}}>43</p>
              </div>
            </div>


            <div style={{alignItems:"center",textAlign:"center"}}>
              <p style={{color:"grey",fontSize:"16px"}}>Published: &nbsp;August 31st 2022</p>
            </div> <br/><br/>
          

            <div>
              <Container fluid style={{backgroundColor:"#7D7463"}}>
                <Container className='d-flex'>
                  <div style={{marginTop:"20px"}}>
                    <img src='https://mir-s3-cdn-cf.behance.net/user/50/184aa115570001.59528aaec050c.png'
             className='rounded-circle' style={{width:"50px",height:"50px",marginTop:"20px",marginLeft:"10px"}}/>
                  </div>
                   
                  <div style={{marginLeft:"20px",marginTop:"30px"}}>
                      <h3 style={{color:"white"}}>insigniada</h3>
                    <p className='border border-primary rounded-pill'
                    style={{textAlign:"center",color:"white",fontSize:"18px",fontWeight:600,backgroundColor:"#1D5D9B"}}>Follow</p>
                  </div>
                </Container>

                <Container>
                <Carousel responsive={responsive}>
  <div>
    <img src='https://a5.behance.net/3b958de733be84110bb55a80b3a9b4987f00c178/img/project/tools/1x/illustrator.png' />
  </div>
  <div>
    <img src='https://cdn-icons-png.flaticon.com/128/9790/9790408.png' />
  </div>
  <div>
    <img src='https://cdn-icons-png.flaticon.com/128/552/552486.png' />
  </div>
  <div>
    <img src='https://cdn-icons-png.flaticon.com/128/3616/3616558.png'/>
  </div>
</Carousel>;
                </Container>

              </Container>
            </div> <br/> <br/>


            <div>
              <Container fluid style={{backgroundColor:"white"}} className='d-flex'>
                <div>
              <Card style={{ width: '64rem',marginTop:"60px",marginLeft:"60px" }}>
      
      <Card.Body>
        <Card.Title>Sign up to join the conversation</Card.Title>
        <Card.Text>
        Add your feedback for Insigniada .’s project by signing in or signing up.
        <div className='d-flex' style={{marginTop:"10px"}}>
            <p className='border border-primary rounded-pill' style={{fontWeight:700,padding:"10px",backgroundColor:"#1D5D9B",color:"white"}}>Sign up with Email</p>
            <p style={{marginLeft:"10px",fontSize:"22px",fontWeight:500,color:"grey",marginTop:"5px"}}>or</p>
            <img src='https://cdn-icons-png.flaticon.com/128/145/145802.png' style={{width:"30px",height:"30px",marginTop:"10px",marginLeft:"10px"}} />
            <img src='https://cdn-icons-png.flaticon.com/128/0/747.png' style={{width:"30px",height:"30px",marginTop:"10px",marginLeft:"10px"}} />
            <img src='https://cdn-icons-png.flaticon.com/128/720/720255.png'  style={{width:"30px",height:"30px",marginTop:"10px",marginLeft:"10px"}} />
          </div> <hr/>

          <div className='d-flex'>
            <img src='https://mir-s3-cdn-cf.behance.net/user/100/fcdee7251700323.64022e202dd7f.png' style={{width:"40px",height:"40px"}}/>
            <div style={{marginLeft:"20px"}}>
              <h3>Thiago (ROCHA)</h3>
              <p>Super!</p>
            </div>
          </div>
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>


    <div>
              <Card style={{ width: '18rem',marginTop:"60px",marginLeft:"20px" }}>
      
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
         <p style={{fontWeight:800,color:"grey",fontSize:"14px"}}>OWNER</p>
         <div className='d-flex' style={{marginTop:"20px"}}>
                    <img src='https://mir-s3-cdn-cf.behance.net/user/50/184aa115570001.59528aaec050c.png'
             className='rounded-circle' style={{width:"50px",height:"50px",marginTop:"10px",marginLeft:"10px"}}/>
             <div>
              <p style={{fontWeight:600,fontSize:"18px",marginTop:"10px",marginLeft:"10px"}}>Insignidia .</p> <br/>
              <p className='border boder-primary rounded-pill'
               style={{width:"100%",padding:"10px",textAlign:"center",fontSize:"18px",fontWeight:700,backgroundColor:"#1D5D9B",color:"white"}}>Follow</p>
           
           <p className='border boder-primary rounded-pill'
               style={{width:"100%",padding:"10px",textAlign:"center",fontSize:"18px",fontWeight:700,backgroundColor:"#CEE6F3",color:"#1D5D9B"}}>Hire</p>
             </div>
                  </div>
          
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
              </Container>
            </div>
            

















    </div>
  )
}

export default PostDetailed