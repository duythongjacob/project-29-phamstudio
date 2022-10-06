
//To use gsap with locmotive scroll, we have to use scroller proxy provided by gsap
import { useEffect } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

function ScrollTriggerProxy() {

    //first let's get instance of locmotive scroll
    const {scroll} = useLocomotiveScroll()
    //register scroll trigger plugin
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        if(scroll) {

            const element = scroll?.el 
            //locomotive scrolling element, in our case it's app ( main)
            scroll.on('scroll', ScrollTrigger.update) 
            // on scroll of locomotive, update scrolltrigger

            //lets use scroller proxy
            ScrollTrigger.scrollerProxy( element, {
                scrollTop(value) {
                    return arguments.length ? scroll.scrollTo(value, 0,0): scroll.scroll.instance.scroll.y
                },
                 // we dont have to define a scrollLeft because we're only scrolling vertically
                getBoundingClientRect() {
                    return  {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight,
                    }
                },
                // LocomotiveScroll handles things completely differently on mobile devices - it doesnt even transfrom
                pinType: element.style.transform ?'transform' : 'fixed'
            })
        }
        return () => {
            ScrollTrigger.addEventListener('refresh', () =>scroll?.update())
            ScrollTrigger.refresh()
        }
        
    }, [scroll]);
  return  null
}

export default ScrollTriggerProxy