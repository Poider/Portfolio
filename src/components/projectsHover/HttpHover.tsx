import React from 'react'
import "./HttpHover.css"
import concurrency from '../../assets/project-images/http/concurrency.png'
import terminal from '../../assets/project-images/http/terminal.png'
import big_arrow from '../../assets/project-images/http/big_arrow.png'
import small_arrow from '../../assets/project-images/http/small_arrow.png'
import configfile from '../../assets/project-images/http/configfile.png'
import ScrewNuts from '../../assets/project-images/http/ScrewNuts.png'
import Nginx from '../../assets/project-images/http/Nginx.png'
function HttpHover() {
    const ReactorPattern = `Reactor\nPattern`
  return (
       <div className="HttpHoverWrapper">
          <div className="HttpHoverDivs"  id="http1">
              <p id="ReactorPattern" className="preserveWhiteSpace">{ReactorPattern}</p>
              <img id="concurrency" src={concurrency} alt ="concurrency"></img>           
              <div className="eventLoop">
                  <span >Event Loop</span>
                  <img src={small_arrow} />
                  <span> select()</span>
                  <img src={big_arrow}/>
                  <img src={big_arrow}/>
                  <img src={big_arrow} />
                  <span>accept() //handshake</span>
                  <span>recv()  //read request</span>
                  <span>send() //write response</span>
              </div>
          </div>
         
          <img className="HttpHoverDivs" id="http2"  src={configfile}></img>
          <div className="HttpHoverDivs" id="http3">
               
          </div>
          <div className="HttpHoverDivs" id="http4">
              <span>C++11</span>
              <img src={ScrewNuts} />
              <span className="preserveWhiteSpace">{'Inspired\nBy Nginx'}</span>
              <img src={Nginx} />


          </div>
          <div className="HttpHoverDivs" id="http5">
              <span>CGI Integration</span>
              <span>{"</>"}</span>
              <span className="preserveWhiteSpace">{ `POST /run.py\n → executing...\n → output piped to client`}</span>
          </div>
       </div>
  );
}

export default HttpHover;