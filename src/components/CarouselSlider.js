
import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function DarkVariantExample() {
  // const swiper = new Swiper('.swiper', {
  // 	// Optional parameters
  // 	direction: 'vertical',
  // 	loop: true,

  // 	// If we need pagination
  // 	pagination: {
  // 	  el: '.swiper-pagination',
  // 	},

  // 	// Navigation arrows
  // 	navigation: {
  // 	  nextEl: '.swiper-button-next',
  // 	  prevEl: '.swiper-button-prev',
  // 	},

  // 	// And if we need scrollbar
  // 	scrollbar: {
  // 	  el: '.swiper-scrollbar',
  // 	},
  //   });
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
  <div>

<Container style={{margin:60}}>
<Carousel responsive={responsive}>
  <div ><img src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/7c2823175060033.64ad50ce71528.jpg' style={{height:70,width:"95%"}}/></div>
  <div><img src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/72cb91137083901.6204d6159eb23.jpg' style={{height:70,width:"95%"}}/></div>
  <div><img src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/4a5bbd173465411.6498a6126fedb.png' style={{height:70,width:"95%"}}/></div>
  <div><img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1412d9176047983.64be7dc6bb02e.png' style={{height:70,width:"95%"}}/></div>
  <div ><img src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/7c2823175060033.64ad50ce71528.jpg' style={{height:70,width:"95%"}}/></div>
  <div><img src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/72cb91137083901.6204d6159eb23.jpg' style={{height:70,width:"95%"}}/></div>
  <div><img src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/4a5bbd173465411.6498a6126fedb.png' style={{height:70,width:"95%"}}/></div>
  <div><img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1412d9176047983.64be7dc6bb02e.png' style={{height:70,width:"95%"}}/></div>
</Carousel>
</Container>
  </div>
  );
}

export default DarkVariantExample;
