import { useState,useEffect } from 'react'

// const isBrowser = typeof window !== "undefined"

export default function useWindowResize(){

  //   if (!isBrowser) {
  //    return;
  // }

    let mobileView = false;
    const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {

    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

  }, []);    

  if(windowSize.innerWidth <= 600){
        mobileView = true
    }else{
        mobileView = false;
    }
    console.log(mobileView,"windo resize==>. 22",windowSize);
    return [mobileView];
}

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }