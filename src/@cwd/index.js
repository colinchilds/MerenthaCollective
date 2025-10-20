import React, { useState } from 'react';

export const TabbedSelector = ({ data }) => {
  const [selected, setSelected] = useState(data[0].name);
  const selectedData = data.find((d) => d.name === selected);
  return (
    <div
      style={{
        display: 'flex',
        border: '1px solid black',
        borderRadius: '10px',
        overflow: 'hidden',
        marginBottom: '2rem',
        maxHeight: '80%',
      }}>
      {/* Sidebar */}
      <aside
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '150px',
          overflowY: 'auto',
        }}>
        {data.map((el) => (
          <li
            key={el.name}
            onClick={() => setSelected(el.name)}
            style={{
              listStyleType: 'none',
              cursor: 'pointer',
              padding: '5px 10px',
              backgroundColor: selected === el.name ? '#484747ff' : 'transparent',
              color: selected === el.name ? 'white' : 'black',
              borderRight: '1px solid black',
            }}>
            {el.name}
          </li>
        ))}
      </aside>

      {/* Content */}
      <section
        style={{
          padding: '0.5rem',
          height: '100%',
          overflowY: 'auto',
        }}>
        {selectedData.data.map((d, i) => (
          <p key={i} style={{ paddingTop: '0.25rem' }}>
            {d.message}
          </p>
        ))}
      </section>
    </div>
  );
};
