import React, {useEffect, useState} from 'react'
import BigHeader from "./BigHeader";
import SmallHeader from "./SmallHeader";

function HeaderHook() {

    const {height, width} = useWindowDimensions();
    const fixedText = "I am fixed :)";
    const whenNotFixed = "I am not a fixed header :(";
    const [headerText, setHeaderText] = useState(whenNotFixed);
    useEffect(() => {
        const header = document.getElementById("header");
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);
    if (width >= 768) {

        return (
            <>
                <BigHeader/>
            </>
        );
    } else {
        return (
            <>
                <SmallHeader/>
            </>
        );
    }
}

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowDimensions;
}

const Component = () => {
    const {height, width} = useWindowDimensions();

    return (
        <div>
            width: {width} ~ height: {height}
        </div>
    );
};
export default HeaderHook;