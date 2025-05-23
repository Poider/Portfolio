import React from 'react';
import "./HttpHover.css";
import concurrency from '../../assets/project-images/http/concurrency.png';
import big_arrow from '../../assets/project-images/http/big_arrow.png';
import small_arrow from '../../assets/project-images/http/small_arrow.png';
import configfile from '../../assets/project-images/http/configfile.png';
import ScrewNuts from '../../assets/project-images/http/ScrewNuts.png';
import Nginx from '../../assets/project-images/http/Nginx.png';
import network from '../../assets/project-images/http/network.png';
function HttpHover() {
    const ReactorPattern = `Reactor\nPattern`;
    return (React.createElement("div", { className: "HttpHoverWrapper" },
        React.createElement("div", { className: "HttpHoverDivs", id: "http1" },
            React.createElement("p", { id: "ReactorPattern", className: "preserveWhiteSpace" }, ReactorPattern),
            React.createElement("img", { id: "concurrency", src: concurrency, alt: "concurrency" }),
            React.createElement("div", { className: "eventLoop" },
                React.createElement("span", null, "Event Loop"),
                React.createElement("img", { src: small_arrow }),
                React.createElement("span", null, " select()"),
                React.createElement("img", { src: big_arrow }),
                React.createElement("img", { src: big_arrow }),
                React.createElement("img", { src: big_arrow }),
                React.createElement("span", null, "accept() //handshake"),
                React.createElement("span", null, "recv()  //read request"),
                React.createElement("span", null, "send() //write response"))),
        React.createElement("img", { className: "HttpHoverDivs", id: "http2", src: configfile }),
        React.createElement("div", { className: "HttpHoverDivs", id: "http3" },
            React.createElement("span", { className: "preserveWhiteSpace" }, "Massive\nUploads\nHandled"),
            React.createElement("img", { src: network, alt: "network" }),
            React.createElement("div", { id: "TerminalClients" },
                React.createElement("span", { className: "TerminalText preserveWhiteSpace" }, "[4:50:4]   Client 53:  Connected"),
                React.createElement("span", { className: "TerminalText preserveWhiteSpace" }, "[4:52:2]   Client 50:  Upload/f.dat"),
                React.createElement("span", { className: "TerminalText preserveWhiteSpace" }, "[4:56:8]   Client  71:  Handling"),
                React.createElement("span", { className: "TerminalText preserveWhiteSpace" }, "[4:57:3]   Client 53:  Requesting"),
                React.createElement("div", { className: "spacer" }),
                React.createElement("span", { className: "TerminalText preserveWhiteSpace alignEnd" }, "Done receiving file, 524MB\nreceived")),
            React.createElement("span", { className: "preserveWhiteSpace" }, `1000+\nClients,\nNo Sweat`),
            React.createElement("span", null, "tested by siege")),
        React.createElement("div", { className: "HttpHoverDivs", id: "http4" },
            React.createElement("span", null, "C++11"),
            React.createElement("img", { src: ScrewNuts }),
            React.createElement("span", { className: "preserveWhiteSpace" }, 'Inspired\nBy Nginx'),
            React.createElement("img", { src: Nginx })),
        React.createElement("div", { className: "HttpHoverDivs", id: "http5" },
            React.createElement("span", null, "CGI Integration"),
            React.createElement("span", null, "</>"),
            React.createElement("span", { className: "preserveWhiteSpace" }, `POST /run.py\n → executing...\n → output piped to client`))));
}
export default HttpHover;
