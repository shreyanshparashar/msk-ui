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

const Frontside = ({ theme, bgColor, name, designation, contactInfo }) => {
  const styles = useStyles();

  return (
    <>
      <div
        style={{
          ...styles.root,
          backgroundColor: bgColor.value.color,
          color: theme.value.color
        }}
      >
        <div style={styles.mainContent}>
          <div>
            <h2 style={{ margin: '0' }}>{name.value}</h2>
            <p style={{ margin: '0', paddingBottom: '10px' }}>
              <em>{designation.value}</em>
            </p>
          </div>
          <div>
            <ul style={{ listStyle: 'none', margin: '0', padding: '0' }}>
              <li>Mobile:{contactInfo.value.value.Mobile.value}</li>
              <li>Email:{contactInfo.value.value.Email.value}</li>
              <li>Address:{contactInfo.value.value.Address.value}</li>
              <li>Website:{contactInfo.value.value.Website.value}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frontside;
