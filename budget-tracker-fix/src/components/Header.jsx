import React from 'react';

export default function Header(props) {
  return (
    <header className="header">
      <h1>{props.title}</h1>
    </header>
  );
}

