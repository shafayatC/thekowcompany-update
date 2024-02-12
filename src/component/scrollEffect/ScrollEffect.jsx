import React, { Suspense, useEffect, useRef, useState } from 'react';

export const ScrollEffect = (props) => {
  const offset = props.offset ? props.offset : 150;
  const duration = props.duration ? props.duration + 's' : '1s';
  const animateOut = props.animateOut ? props.animateOut : false;

  const uniquId = 'scrolAnim_' + Math.floor(Math.random() * 9999);
  const animElemRef = useRef(null);

  const [activeElem, setActiveElemn] = useState(false);

  const scrollAction = () => {
    const animElem = animElemRef.current;

    if (!animElem) return;

    const windowHeight = window.innerHeight;
    const elementTop = animElem.getBoundingClientRect().top;

    if (elementTop < windowHeight - offset) {
      setActiveElemn(true);
      animElem.classList.add('active');
    } else if (!animateOut) {
      // setActiveElemn(false);
      // animElem.classList.remove('active');
    }
  };

  useEffect(() => {
    animElemRef.current = document.getElementById(props.id ? props.id : uniquId);
    scrollAction()

    document.addEventListener('scroll', scrollAction);

    return () => {
      document.removeEventListener('scroll', scrollAction);
    };

  }, [uniquId, offset, animateOut]);

  return (
    <>

      <div
        id={props.id ? props.id : uniquId}
        className={props.className ? props.className + ' scrollFade' : 'scrollFade'}
        style={{ transition: duration }}
      >
        {
          activeElem == false &&
          <div className='h-screen flex items-center'>
            <p className='mx-auto'>Loading...</p>
          </div>
        }
        {
          activeElem &&
          <Suspense fallback={
            <div className='h-screen flex items-center'>
              <p className='mx-auto'>Loading...</p>
            </div>}>
            {props.children}
          </Suspense>
        }
      </div>
    </>

  );
};
