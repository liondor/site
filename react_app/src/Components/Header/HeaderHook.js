import React, {useEffect, useState} from 'react'
import BigHeader from "./BigHeader";
import SmallHeader from "./SmallHeader";

function HeaderHook() {
    const {height, width} = useWindowDimensions();
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