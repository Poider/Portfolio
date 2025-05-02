import React from 'react'
import "./HttpHover.css"
function HttpHover() {
    const ReactorPattern = `Reactor\nPattern`
  return (
       <div className="HttpHoverWrapper">
          <div className="HttpHoverDivs"  id="http1">
              <p id="ReactorPattern" className= "preserveWhiteSpace">{ReactorPattern}</p>
          </div>
          <div className="HttpHoverDivs" id="http2">aa</div>
          <div className="HttpHoverDivs" id="http3"></div>
          <div className="HttpHoverDivs" id="http4"></div>
          <div className="HttpHoverDivs" id="http5">
             
          </div>
       </div>
  );
}

export default HttpHover;