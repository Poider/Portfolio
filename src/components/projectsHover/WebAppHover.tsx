import React from 'react'
import "./WebAppHover.css"
import chat from '../../assets/project-images/webapp/chatpingpong.png';
import pingpong from '../../assets/project-images/webapp/pingpong.png';
import ReactImg from '../../assets/project-images/webapp/React.png';
import Docker from '../../assets/project-images/webapp/docker.png';
import nestJs from '../../assets/project-images/webapp/nestJs.png';
import webSockets from '../../assets/project-images/webapp/websocket.png';
import metric1Icon from '../../assets/icons/metric1.png'
import metric2Icon from '../../assets/icons/metric2.png'
import metric3Icon from '../../assets/icons/metric3.png'
import metric4Icon from '../../assets/icons/metric4.png'
function webAppHover() {
    const metrics = [
        { value: '78 ms', label: 'avg latency' },
        { value: '60 fps', label: 'avg framerate' },
        { value: '3 min', label: 'avg session' },
        { value: '50 %', label: 'bot win-rate' }
    ];

    const icons = [
        metric1Icon,
        metric2Icon,
        metric3Icon,
        metric4Icon
    ]
    return (
        <div className="webAppHoverWrapper">
            <div className="webAppHoverDivs">
                
                <div className="webAppHoverImgWrapper">

                    <img className="webAppHoverImg" src={chat} alt="chat" id="chatImg"></img>
                    <h4 id="title1" className="WebAppTitles">Chat Integrated</h4>
                    <h4 id="title2" className="WebAppTitles">2d + 3d GameModes</h4>
                    <img className="webAppHoverImg" src={pingpong} alt="pingpong" id="pingpongImg"></img>
                </div>
            </div>
            <div className="webAppHoverDivs">
                <div className="TechImgsWrapper">
                    <h4 className="WebAppTitles" id="title3">Tech Stack</h4>
                    <img src={ReactImg} className="TechImgs" id="ReactImg"></img>
                    <img src={Docker} className="TechImgs" id="DockerImg"></img>
                    <img src={nestJs} className="TechImgs" id="nestJs"></img>
                    <img src={webSockets} className="TechImgs" id="webSockets"></img>
                </div>
            </div>
            <div className="webAppHoverDivs">
                <div className="MetricsWrapper">

                    <h4 className="WebAppTitles" id="title4">Metrics</h4>
                    <div className="MetricsDiv">
                        {metrics.map((metric, index) => (
                            <div key={index} className="MetricItem">
                                <img src={icons[index]} alt={`metric icon ${index}`} className="MetricIcon" />
                                <span className="MetricValue" id={"metricText" + (index + 1)} >{metric.value}</span>
                                <span className="MetricLabel" id={"metricText" + (index + 1)}>{metric.label}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
        
  );
}

export default webAppHover;