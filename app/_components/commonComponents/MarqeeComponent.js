import Marquee from "react-fast-marquee";
import React from "react";

const MarqeeComponent = ({ scrollingContent }) => (
    <Marquee autoFill={true} style={{ width: '100%' }}>
        {scrollingContent}
    </Marquee>
);

export default MarqeeComponent;