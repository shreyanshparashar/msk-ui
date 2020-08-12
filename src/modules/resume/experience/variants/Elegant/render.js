import React from 'react';

const useStyles = () => ({
  mainTitle: {
    width: '100%',
    textAlign: 'center',
    margin: '0'
  },
  title: { margin: 'auto' },
  titleDesign: {
    width: '60px',
    borderBottom: '#b9c2ad dotted 2px',
    margin: '4px auto 10px auto',
    opacity: '0.7'
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '0 auto 0 auto'
  },
  dateBox: {
    display: 'flex',
    width: '200px',
    justifyContent: 'center'
  },
  jobBox: {
    width: '450px',
    textAlign: 'center'
  },
  description: {
    fontSize: '13px',
    width: '60%',
    margin: '-10px auto 10px auto',
    textAlign: 'justify',
    textJustify: 'inter-word',
    opacity: '0.8'
  },
  designation: {
    textTransform: 'uppercase',
    fontSize: '20px'
  },
  company: {
    fontStyle: 'italic',
    fontSize: '13px',
    marginTop: '-15px'
  },
  line: {
    borderTop: '#b9c2ad dotted 2px',
    height: '1px',
    width: '50%',
    margin: 'auto',
    opacity: '0.8',
    padding: '5px 0'
  }
});

const Elegant = ({ theme, headlineText, experience }) => {
  const styles = useStyles();
  const main = {
    backgroundColor: theme.value.color,
    color: theme.value.contrast
  };

  function renderExperience(experienceDetails) {
    return (
      <div style={styles.content}>
        <div style={styles.dateBox}>
          <div style={styles.date}>
            <h3>{experienceDetails.date.value}</h3>
          </div>
        </div>
        <div style={styles.jobBox}>
          <div>
            <h1 style={styles.designation}>
              {experienceDetails.designation.value}
            </h1>
            <h3 style={styles.company}>
              {experienceDetails.company.value} |{' '}
              {experienceDetails.location.value}
            </h3>
            <p style={styles.description}>
              {experienceDetails.description.value}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={main}>
      <div style={styles.mainTitle}>
        <h1 style={styles.mainTitle}>{headlineText.value}</h1>
        <div style={styles.titleDesign}></div>
      </div>
      {experience.value.map((experienceDetails, id) => {
        return (
          <div key={id}>
            {renderExperience(experienceDetails.value)}
            <div style={styles.line}></div>
          </div>
        );
      })}
    </div>
  );
};

export default Elegant;
