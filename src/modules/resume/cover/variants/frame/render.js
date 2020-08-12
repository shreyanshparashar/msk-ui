import React from 'react';
import { linkedinIcon, githubIcon } from '../../../../../../public/Base64Icons';

const useStyles = (theme) => ({
  root: {
    backgroundColor: theme.value.color,
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '500px',
    fontSize: '1rem'
  },
  outerBoxStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  design: {
    position: 'relative',
    width: '200px',
    height: '200px',
    marginBottom: '3rem'
  },

  imgStyle: {
    height: '200px',
    width: '200px',
    position: 'absolute',
    objectFit: 'cover',
    boxShadow: '0 0 10px #000000'
  },
  rotateBorder: {
    height: '200px',
    width: '200px',
    position: 'absolute'
  },
  grid: {
    height: '200px',
    width: '200px',
    position: 'absolute',
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridTemplateColumns: '1fr 1fr'
  },
  dataWhite: {
    backgroundColor: '#ffffff'
  },
  blend: {
    mixBlendMode: 'multiply'
  },
  linkStyling: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '0.5rem'
  },
  githubLinkStyle: {
    color: '#ffffff',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '2rem'
  },
  linkedinLinkStyle: {
    color: '#ffffff',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconStyle: { borderRadius: '50%', width: '48px', height: '48px' }
});

const Basic = ({
  theme,
  name,
  designation,
  imageUrl,
  githubUrl,
  linkedinUrl
}) => {
  const styles = useStyles(theme);

  return (
    <div style={styles.root}>
      <div style={styles.outerBoxStyle}>
        <div style={styles.design}>
          <img src={imageUrl.value} style={styles.imgStyle} />
          <div
            style={{
              ...styles.rotateBorder,
              border: '10px solid #ffffff',
              transform: 'rotate(45deg)',
              boxShadow: '0 0 10px #ffffff,inset 0 0 25px #ffffff'
            }}
          ></div>
          <div style={styles.grid}>
            <div style={styles.dataWhite}></div>
            <div></div>
            <div></div>
            <div style={styles.dataWhite}></div>
          </div>

          <div style={styles.blend}>
            <img src={imageUrl.value} style={styles.imgStyle} />

            <div style={styles.grid}>
              <div></div>
              <div style={styles.dataWhite}></div>
              <div style={styles.dataWhite}></div>
              <div></div>
            </div>
          </div>
        </div>
        <div>
          {name.value} | {designation.value}
        </div>
        <div style={styles.linkStyling}>
          <a
            style={styles.githubLinkStyle}
            href={githubUrl.value}
            target="_blank"
            referrer="noreferrer"
          >
            <img src={githubIcon} style={styles.iconStyle} />
            GitHub
          </a>
          <a
            style={styles.linkedinLinkStyle}
            href={linkedinUrl.value}
            target="_blank"
            referrer="noreferrer"
          >
            <img src={linkedinIcon} style={styles.iconStyle} />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Basic;
