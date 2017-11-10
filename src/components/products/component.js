import React from 'react';
function products({ items = [] }){

  return items.map( item => {
    return (<li>
        {item}
      </li>);
  });

};

export default products;
