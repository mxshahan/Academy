import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';

export class Slider extends Component {
  render() {
    return (
    <div className="container-fluid " id="mainSlider">
        <div className="row">
        <OwlCarousel
            items={1}
            nav={true}
            loop={true}
            animateOut="fadeOut"
        >
            <div className="item">
                <div className="overlay-container overlay-visible">
                    <img src="/images/education-slider-slide-1tmp.jpg" alt=""/> 
                </div>
            </div>
            <div className="item">
                <div className="overlay-container overlay-visible">
                    <img src="/images/education-slider-slide-2tmp.jpg" alt=""/> 
                </div>
            </div>
            <div className="item">
                <div className="overlay-container overlay-visible">
                    <img src="/images/education-slider-slide-1tmp.jpg" alt=""/> 
                </div>
            </div>
        </OwlCarousel>
        </div>
    </div>


//     <div className="banner clearfix">
//       <div className="slideshow">
//           <div className="slider-banner-container">
//               <div className="slider-banner-fullwidth">
//                   <OwlCarousel 
//                     className="owl-theme slides"
//                     loop margin={0} 
//                     nav={true}
//                     dots={true}
//                     items={1}
//                     height={100}
//                     autoWidth={true}
//                     center={true}
//                     animateOut="fadeOut"
//                     smartSpeed={300}
//                     dragEndSpeed={100}
//                     fallbackEasing="fade"
//                   >
//                       <div className="item" data-transition="fade" data-slotamount="4" data-masterspeed="500" data-saveperformance="on" data-title="Training Academy">
//                           <img src="/images/education-slider-slide-1.jpg" alt="slidebg1" data-bgposition="center top" data-bgrepeat="no-repeat" data-bgfit="cover"/>
//                       </div>
//                       <div className="item" data-transition="fade" data-slotamount="4" data-masterspeed="500" data-saveperformance="on" data-title="Training Academy">
//                           <img src="/images/education-slider-slide-2.jpg" alt="slidebg2" data-bgposition="center top" data-bgrepeat="no-repeat" data-bgfit="cover"/>
//                       </div>
//                   </OwlCarousel>
//                   <div className="tp-bannertimer"></div>
//               </div>
//           </div>
//       </div>
//   </div>	
    )
  }
}

export default Slider
