import { useRef } from "react";

function HorrizontallyScrollable({children,className=''}){

    const scrollref= useRef();
    const mousehandler= (evt)=>{
        const oldX = evt.pageX;
        const scrollleft = scrollref.current.scrollLeft;

        const handleMouseMove = (evt)=>{
            const newX=evt.pageX;
            const offset=newX-oldX;

            scrollref.current.scrollLeft=scrollleft-offset;
        };

        const handleMouseUp=()=>{
            window.removeEventListener('mousemove',handleMouseMove);
            window.removeEventListener('mouseup',handleMouseUp);
        };

        window.addEventListener('mousemove',handleMouseMove);
        window.addEventListener('mouseup',handleMouseUp);
    };

    return <div className={className} ref={scrollref} onMouseDown={mousehandler}>{children}</div>
}

export default HorrizontallyScrollable;