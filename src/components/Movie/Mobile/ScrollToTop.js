import React, {useEffect, useState} from "react";
import styled from 'styled-components';

const StyledTop = styled.div`
  position: fixed;
  top: 85vh;
  left: 0.5vw;
  z-index: 25;

  div {
    font-size: 3vh;
  }

  :hover {
    cursor: pointer;
  }
`;


export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 3500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <StyledTop>
            {isVisible &&
            <div onClick={scrollToTop}>
                🔝
            </div>}
        </StyledTop>
    );
}
