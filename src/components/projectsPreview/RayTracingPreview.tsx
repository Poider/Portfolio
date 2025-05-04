import React from 'react';
import { useFadeInOnceLoaded } from "../../hooks/useFadeInOnceLoaded"; 
import "./WebAppPreview.css";

function RayTracingPreview() {
    const fadeClass = useFadeInOnceLoaded(20); //10ms then fade in (so it first render at 0)

    return (
        <div className={`${fadeClass}`}>
            <p>Hello world! b</p>
            <p>Hello world! b</p>
            <p>Hello world! b</p>
            <p>Hello world! b</p>
            <p>Hello world! b</p>
            <p>Hello world! b</p>
            <p>Hello world! b</p>
            <p>Hello world! b</p>
            <p>Hello world! b</p>
            <p>Hello world! b</p>
            <p>Hello world! b</p>
            <p>Hello world! b</p>
            <p>Hello world! b</p>
            <p>Hello world! b</p>
            <p>Hello world! b</p>
            <p>Hello world! b</p>
           
        </div>
    );
}

export default RayTracingPreview;
