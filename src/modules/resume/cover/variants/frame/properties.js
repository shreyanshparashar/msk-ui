import propertyTypes from 'msk-property-types';
import themes from 'msk-themes';

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.dark.shadowPurple,
    required: true
  },
  name: {
    name: 'Name',
    type: propertyTypes.STRING,
    value: 'Rahul Goyal',
    required: true
  },
  designation: {
    name: 'Designation',
    type: propertyTypes.STRING,
    value: 'Web Developer',
    required: false
  },
  imageUrl: {
    name: 'Image URL',
    type: propertyTypes.URL,
    value:
      'https://avatars0.githubusercontent.com/u/43722080?s=400&u=c3aef01463fccebc712475985ab8dca0cfe7563c&v=4',
    required: true
  },
  githubUrl: {
    name: 'GitHub URL',
    type: propertyTypes.URL,
    value: 'https://github.com/rahulgoyal21',
    required: false
  },
  linkedinUrl: {
    name: 'Linkedin URL',
    type: propertyTypes.URL,
    value: 'https://www.linkedin.com/in/rahul-goyal-62a0b4128/',
    required: false
  }
};

export default properties;
