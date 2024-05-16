import React, { useEffect } from 'react';

function ScrollToTop() {
    useEffect(() => {
        console.log("Scrolling to top");
        window.scrollTo(0, 0);
    }, []);

    return null;
}

export default ScrollToTop;
