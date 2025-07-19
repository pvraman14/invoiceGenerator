import React, { useState } from "react";
import { Rnd, RndDragCallback, DraggableData } from "react-rnd";
import {DraggableEvent} from 'react-draggable'

type TRndWrapper = {
    children: React.ReactNode;
}

const RndWrapper = (props: TRndWrapper) => {
     const { children } = props;

     const [size, setSize] = useState<{
        width: string;
        height: string;
        x: number;
        y: number;
    }>({
        width: '100px',
        height: '100px',
        x: 0,
        y: 0,
    })

   const onHandleDragStop: RndDragCallback = (e: DraggableEvent, data: DraggableData) => {
        setSize(prev => ({...prev, x: data.x, y: data.y }) )
    }
   
    return (
        <div className="rnd-wrapper">
            <Rnd
                id="rnd"
                className="rnd-component"
                style={{
                    border: "1px solid #000"
                }}
                size={{width: size.width, height: size.height  }}
                position={{ x: size.x, y: size.y }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    setSize({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position,
                    });
                }}
                onDragStop={onHandleDragStop}
            >
                {children}
            </Rnd>
        </div>
    );
};

export default RndWrapper;