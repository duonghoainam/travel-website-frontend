import * as React from 'react';

function IconMenu(props) {
   return (
      <svg viewBox="0 0 24 24" tabIndex={-1} {...props}>
         <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor" />
      </svg>
   );
}

export default IconMenu;
