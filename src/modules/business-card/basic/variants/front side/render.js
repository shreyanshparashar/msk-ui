import React from 'react';

const useStyles = () => ({
  root: {
    padding: '10% 0'
  },
  mainContent: {
    padding: '5% 0',
    height: '100px',
    fontFamily: 'Monospace',
    textAlign: 'center'
  }
});

const Frontside = ({ theme, bgColor, companyName, tagline }) => {
  const styles = useStyles();

  return (
    <>
      <div
        style={{
          ...styles.root,
          backgroundColor: bgColor.value.color,
          color: theme.value.contrast
        }}
      >
        <div
          style={{
            ...styles.mainContent,
            backgroundColor: theme.value.color,
            color: theme.value.contrast
          }}
        >
          <h2 style={{ margin: '0', fontSize: 20 }}>{companyName.value}</h2>
          <p style={{ margin: '0' }}>
            <em>{tagline.value}</em>
          </p>
        </div>
      </div>
    </>
  );
};

export default Frontside;
