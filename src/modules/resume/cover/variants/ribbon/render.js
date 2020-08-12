import React from 'react';

const useStyles = (theme) => {
  const dark = theme.value.contrast === 'white';
  return {
    root: {
      display: 'flex',
      padding: '20px 0px',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    name: {
      margin: 0,
      fontSize: 32,
      fontWeight: 'bold'
    },
    designation: {
      margin: 0,
      fontSize: 16
    },
    image: {
      width: 120,
      marginTop: 20,
      minHeight: 120,
      borderRadius: '50%',
      border: `5px solid ${theme.value.color}`
    },
    ribbonWrapper: {
      width: '60%',
      height: '100%',
      textAlign: 'center',
      position: 'relative',
      color: theme.value.contrast,
      padding: '10px 10px 20px 10px',
      backgroundColor: theme.value.color
    },
    ribbonWings: {
      width: '50%',
      height: 'inherit',
      position: 'absolute',
      backgroundColor: theme.value.color,
      filter: `brightness(${dark ? 150 : 80}%)`
    },
    ribbonUnder: {
      zIndex: 1,
      width: '25%',
      height: '25%',
      position: 'absolute',
      backgroundColor: theme.value.color,
      filter: `brightness(${dark ? 40 : 60}%)`
    }
  };
};

const Ribbon = ({ theme, name, imageUrl, designation }) => {
  const styles = useStyles(theme);

  return (
    <div style={styles.root}>
      <div style={styles.ribbonWrapper}>
        <div style={styles.name}>{name.value}</div>
        {designation.value && (
          <h3 style={styles.designation}>{designation.value}</h3>
        )}
        <div
          style={{
            top: '25%',
            left: '-25%',
            ...styles.ribbonWings,
            clipPath:
              'polygon(50% 0%, 50% 75%, 100% 75%, 100% 100%, 0 100%, 15% 50%, 0 0)'
          }}
        ></div>
        <div
          style={{
            top: '25%',
            right: '-25%',
            ...styles.ribbonWings,
            clipPath:
              'polygon(50% 0%, 100% 0, 85% 50%, 100% 100%, 0 100%, 0 75%, 50% 75%)'
          }}
        ></div>
        <div
          style={{
            right: 0,
            bottom: '-25%',
            ...styles.ribbonUnder,
            clipPath: 'polygon(0 0, 0% 100%, 100% 0)'
          }}
        ></div>
        <div
          style={{
            left: 0,
            bottom: '-25%',
            ...styles.ribbonUnder,
            clipPath: 'polygon(0 0, 100% 100%, 100% 0)'
          }}
        ></div>
      </div>
      <img style={styles.image} src={imageUrl.value} alt="profile" />
    </div>
  );
};

export default Ribbon;
