import { useState,useEffect } from 'react'

export default function useWindowResize(){

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
    return [mobileView];
}

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }