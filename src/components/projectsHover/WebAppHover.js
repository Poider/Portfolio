import React from 'react';
import "./WebAppHover.css";
import chat from '../../assets/project-images/webapp/chatpingpong.png';
import pingpong from '../../assets/project-images/webapp/pingpong.png';
import ReactImg from '../../assets/project-images/webapp/React.png';
import Docker from '../../assets/project-images/webapp/docker.png';
import nestJs from '../../assets/project-images/webapp/nestJs.png';
import webSockets from '../../assets/project-images/webapp/websocket.png';
import metric1Icon from '../../assets/icons/metric1.png';
import metric2Icon from '../../assets/icons/metric2.png';
import metric3Icon from '../../assets/icons/metric3.png';
import metric4Icon from '../../assets/icons/metric4.png';
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
    ];
    return (React.createElement("div", { className: "webAppHoverWrapper" },
        React.createElement("div", { className: "webAppHoverDivs" },
            React.createElement("div", { className: "webAppHoverImgWrapper" },
                React.createElement("img", { className: "webAppHoverImg", src: chat, alt: "chat", id: "chatImg" }),
                React.createElement("h4", { id: "title1", className: "WebAppTitles" }, "Chat Integrated"),
                React.createElement("h4", { id: "title2", className: "WebAppTitles" }, "2d + 3d GameModes"),
                React.createElement("img", { className: "webAppHoverImg", src: pingpong, alt: "pingpong", id: "pingpongImg" }))),
        React.createElement("div", { className: "webAppHoverDivs" },
            React.createElement("div", { className: "TechImgsWrapper" },
                React.createElement("h4", { className: "WebAppTitles", id: "title3" }, "Tech Stack"),
                React.createElement("img", { src: ReactImg, className: "TechImgs", id: "ReactImg" }),
                React.createElement("img", { src: Docker, className: "TechImgs", id: "DockerImg" }),
                React.createElement("img", { src: nestJs, className: "TechImgs", id: "nestJs" }),
                React.createElement("img", { src: webSockets, className: "TechImgs", id: "webSockets" }))),
        React.createElement("div", { className: "webAppHoverDivs" },
            React.createElement("div", { className: "MetricsWrapper" },
                React.createElement("h4", { className: "WebAppTitles", id: "title4" }, "Metrics"),
                React.createElement("div", { className: "MetricsDiv" }, metrics.map((metric, index) => (React.createElement("div", { key: index, className: "MetricItem" },
                    React.createElement("img", { src: icons[index], alt: `metric icon ${index}`, className: "MetricIcon" }),
                    React.createElement("span", { className: "MetricValue", id: "metricText" + (index + 1) }, metric.value),
                    React.createElement("span", { className: "MetricLabel", id: "metricText" + (index + 1) }, metric.label)))))))));
}
export default webAppHover;
