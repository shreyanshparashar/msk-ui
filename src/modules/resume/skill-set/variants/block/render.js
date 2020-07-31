import React from 'react';

const useStyles = () => ({
  root: {
    padding: 20
  },
  headlineText: {
    fontSize: 30,
    margin: 0
  },
  wrapper: {
    display: 'flex',
    padding: 10,
    flexDirection: 'column'
  },
  block: {
    width: 20,
    height: 20,
    marginLeft: 10,
    borderRadius: 3
  },
  blockFill: {
    width: 20,
    height: 20,
    marginLeft: 10,
    borderRadius: 3
  },
  blockRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  skill: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 20
  }
});

const Block = ({ theme, headlineText, skills }) => {
  const styles = useStyles();

  const addBlock = (value) => {
    const blockNo = [1, 2, 3, 4, 5];
    const blocks = blockNo.map((el, i) => {
      if (el <= value) {
        return (
          <div
            key={`fill-${i}`}
            style={{
              ...styles.blockFill,
              backgroundColor: theme.value.color,
              border: `1px solid ${theme.value.color}`
            }}
          ></div>
        );
      }
      return (
        <div
          key={`empty-${i}`}
          style={{ ...styles.block, border: `1px solid ${theme.value.color}` }}
        ></div>
      );
    });

    return blocks;
  };

  return (
    <div style={styles.root}>
      <h1 style={styles.headlineText}>{headlineText.value}</h1>
      <hr />
      <div style={styles.wrapper}>
        {skills.value.map((el, i) => (
          <React.Fragment key={i}>
            <div style={styles.skill}>{el.value[0]}</div>
            <div style={styles.blockRow}>{addBlock(el.value[1])}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Block;
