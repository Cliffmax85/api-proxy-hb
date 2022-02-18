import React from 'react';

export default function BusinessList({ businesses }) {
  return (
    <div>
      {businesses.map((business, i) => <div key={`${business}-${i}`}>
        <p>{business.name}</p>
        <img src={business.image_url} style={{ width: '150px' }} />  
      </div>)}
    </div>
  );
}
