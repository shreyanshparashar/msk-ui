import React from 'react';

const useStyle = (theme) => ({
  imgContainer: {
    display: 'flex',
    padding: '25px  10px',
    backgroundColor: theme.value.color,
    justifyContent: 'center',
    position: 'relative'
  },
  imgBox: {
    width: 150,
    height: 150,
    border: `4px solid ${theme.value.contrast} `,
    zIndex: 1
  },
  line: {
    position: 'absolute',
    top: '50%',
    width: '90%',
    height: 4,
    backgroundColor: theme.value.contrast
  },
  name: {
    display: 'flex',
    justifyContent: 'center',
    color: theme.value.contrast,
    fontSize: 25
  },
  designation: {
    display: 'flex',
    justifyContent: 'center',
    color: theme.value.contrast,
    fontSize: 18
  }
});

const Square = ({ theme, name, designation, company, imageUrl }) => {
  const styles = useStyle(theme);
  return (
    <div style={{backgroundColor:theme.value.color , paddingBottom:"20px"}  }>
      <div style={styles.imgContainer}>
        <img style={styles.imgBox} src={imageUrl.value} alt="profilePhoto" />
        <div style={styles.line}></div>
      </div>
          <div style={styles.name}>{name.value}</div>
          <div style={styles.designation}>{designation.value} | {company.value}</div>
    </div>
  );
};

export default Square;
