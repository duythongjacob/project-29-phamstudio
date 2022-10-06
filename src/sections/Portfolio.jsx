import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import img1 from '../assets/Images/a.webp'
import img2 from '../assets/Images/b.webp'
import img3 from '../assets/Images/c.webp'
import img4 from '../assets/Images/4.webp'
import img5 from '../assets/Images/5.webp'
import img6 from '../assets/Images/6.webp'
import img7 from '../assets/Images/7.webp'
import img8 from '../assets/Images/8.webp'
import img9 from '../assets/Images/9.webp'
import img10 from '../assets/Images/10.webp'
import {motion} from 'framer-motion'
const Product = ({img, title = ''}) => {
    return (
        <Item initial={{filter:'grayscale(100%)'}}
        whileInView={{filter: 'grayscale(0%'}}
            transition={{ duration: 0.5 }}
            viewport={{once: false, amount:'all'}}>
  
            <img src={img} alt={title} />
            <h1>{title}</h1>
        </Item>
    )
}
function Portfolio() {
    gsap.registerPlugin(ScrollTrigger)
    const ref = useRef(null)
    const horizontalRef =  useRef(null)
    useLayoutEffect(()=>{
        let element = ref.current
        let t1= gsap.timeline()
        let scrollingElement = horizontalRef.current
        let pinkWrapWidth = scrollingElement.offsetWidth
        setTimeout(()=>{
            t1.to(element, {
                scrollTrigger : {
                    trigger: element,
                    start: 'top top',
                    end: pinkWrapWidth,
                    scroller: '.App', //locomotive element
                    scrub: true,
                    pin: true,
                    // markers:true,
                },
                //we have to increase scrolling height of this section same as the scrolling element width
                height: `${scrollingElement.scrollWidth}px`,
                ease: 'none'
            })
            // Horizontal scrolling
            t1.to(scrollingElement, {
                scrollTrigger : {
                    trigger: scrollingElement,
                    start: 'top top',
                    end: pinkWrapWidth,
                    scroller: '.App', //locomotive element
                    scrub: true,
                   
                    // markers:true,
                },
                //we have to increase scrolling height of this section same as the scrolling element width
                x: -pinkWrapWidth,
                ease: 'none'
            })
            ScrollTrigger.refresh()
        }, 1000)
        return () => {
            t1.kill()
            ScrollTrigger.kill()
        }
    },[])


  return (
    <Section ref={ref} id='portfolio'>
        <Title data-scroll data-scroll-speed='-1' >
            Pham portfolio
        </Title>
        <Left>
            <p>
                  The brand new collection is currently being developed in Viet Nam.
                  We create our products using best quality material, including the use of some of the pure fabrics to make our products.
                  All products are made using the best materials, from the finest cotton to the finest fabrics.
                <br />
                <br />
                  We have lots of different clothing options for women.
                  Not only clothes but we also provide unique Jewellery as well.
                  It is great for us to carry our new clothes all around the country and look different.
            </p>
        </Left>
          <Right ref={horizontalRef}>
            
        
            <Product img={img1} title='Bra pure '/>
            <Product img={img2} title='Suit Classic'/>
              <Product img={img3} title='clogs classic bae'/> 
            <Product img={img4} title='Ethnic clothes'/> 
            <Product img={img5} title='Sport Colorful'/> 
              <Product img={img6} title='Antiques clothes'/> 
            <Product img={img7} title='Spring Sport'/> 
              <Product img={img8} title='Iceberg'/> 
              <Product img={img9} title='bib Hanoi'/> 
            <Product img={img10} title='Aodai in Hue'/> 
     
            
        </Right>
    </Section>
  )
}

export default Portfolio
const Section = styled.section`
    min-height: 100vh;
    height: auto;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
    
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontxxxl};
    font-family: 'Kaushan Script';
    font-weight: 300;
    color: ${props =>props.theme.text};
    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 11;
    text-shadow: 1px 1px 1px ${props => props.theme.body};
    z-index: 11;
                    @media  (max-width: 64em) {
           font-size: ${props => props.theme.fontxxl};


    }
                    @media  (max-width: 48em) {
       font-size: ${props => props.theme.fontxl};



    }
`
const Left = styled.div`
    width: 35%;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    min-height: 100vh;
    z-index: 5;
    position: fixed;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
       font-size: ${props => props.theme.fontlg};
       font-weight: 300;
       width: 80%;
       margin: 0 auto;
    }
    @media  (max-width: 64em) {
          p{
       font-size: ${props => props.theme.fontmd};

    }
    }
    @media  (max-width: 48em) {
        width: 40%;
          p{
       font-size: ${props => props.theme.fontsm};

    }
    }
    @media  (max-width: 30em) {
   
          p{
       font-size: ${props => props.theme.fontxs};

    }


    }
`
const Right  = styled.div`
    position: absolute;
    left: 35%;
    padding-left: 30%;
    min-height: 100vh;

    background-color: ${props => props.theme.grey};
    /* width: 65%; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    h1 {
        display: inline-block;
        width: fit-content
        width: 5rem;
        margin: 0 2rem;
    }
`
const Item = styled(motion.div)`

    width: 20rem;
    margin-right: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    overflow: hidden;

    img {
        width: 100%;
        height: auto;
        height:30rem;
        object-fit: cover;
        cursor: pointer;
         @media  (max-width: 48em) {
             height:25rem;
        
    }    
    }
    h1 {
        font-weight: 500;
        text-align: center;
        cursor: pointer;
        display: inline-block;
        width: fit-content;
    }
        @media  (max-width: 48em) {
            width: 15rem;
        
    }
`
