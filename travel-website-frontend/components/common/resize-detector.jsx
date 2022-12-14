import React, { memo, useEffect, useRef } from 'react';

const style = {
   position: 'absolute',
   left: 0,
   top: 0,
   right: 0,
   bottom: 0,
   overflow: 'scroll',
   zIndex: -1,
   visibility: 'hidden',
   pointerEvents: 'none',
   opacity: 0,
};

function ResizeSensor(element, callback) {
   let zIndex = parseInt(getComputedStyle(element));
   if (isNaN(zIndex)) {
      zIndex = 0;
   }
   zIndex--;

   let expand = document.createElement('div');
   expand.style.position = 'absolute';
   expand.style.left = '0px';
   expand.style.top = '0px';
   expand.style.right = '0px';
   expand.style.bottom = '0px';
   expand.style.overflow = 'hidden';
   expand.style.zIndex = zIndex;
   expand.style.visibility = 'hidden';

   let expandChild = document.createElement('div');
   expandChild.style.position = 'absolute';
   expandChild.style.left = '0px';
   expandChild.style.top = '0px';
   expandChild.style.width = '10000000px';
   expandChild.style.height = '10000000px';
   expand.appendChild(expandChild);

   let shrink = document.createElement('div');
   shrink.style.position = 'absolute';
   shrink.style.left = '0px';
   shrink.style.top = '0px';
   shrink.style.right = '0px';
   shrink.style.bottom = '0px';
   shrink.style.overflow = 'hidden';
   shrink.style.zIndex = zIndex;
   shrink.style.visibility = 'hidden';

   let shrinkChild = document.createElement('div');
   shrinkChild.style.position = 'absolute';
   shrinkChild.style.left = '0px';
   shrinkChild.style.top = '0px';
   shrinkChild.style.width = '200%';
   shrinkChild.style.height = '200%';
   shrink.appendChild(shrinkChild);

   element.appendChild(expand);
   element.appendChild(shrink);

   function setScroll() {
      expand.scrollLeft = 10000000;
      expand.scrollTop = 10000000;

      shrink.scrollLeft = 10000000;
      shrink.scrollTop = 10000000;
   }
   setScroll();

   let size = element.getBoundingClientRect();

   let currentWidth = size.width;
   let currentHeight = size.height;

   let onScroll = function () {
      let size = element.getBoundingClientRect();

      let newWidth = size.width;
      let newHeight = size.height;

      if (newWidth != currentWidth || newHeight != currentHeight) {
         currentWidth = newWidth;
         currentHeight = newHeight;

         callback(newWidth, newHeight);
      }

      setScroll();
   };

   expand.addEventListener('scroll', onScroll);
   shrink.addEventListener('scroll', onScroll);
}

const ResizeDetector = memo(({ onResize }) => {
   const ref = useRef(null);
   const onResizeCallback = useRef(onResize);

   useEffect(() => {
      onResizeCallback.current = onResize;
   });

   useEffect(() => {
      const element = ref.current;
      if (element) {
         new ResizeSensor(element, (w, h) => {
            onResizeCallback.current && onResizeCallback.current(w, h);
         });
         onResizeCallback.current &&
            onResizeCallback.current(
               element.getBoundingClientRect().width,
               element.getBoundingClientRect().height
            );
      }
   }, []);

   return <resize-sensor style={style} ref={ref}></resize-sensor>;
});

ResizeDetector.displayName = 'ResizeDetector';

export default ResizeDetector;
