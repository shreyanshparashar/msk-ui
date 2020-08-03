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
    value: 'Name',
    required: true
  },
  designation: {
    name: 'Designation',
    type: propertyTypes.STRING,
    value: 'Designation',
    required: false
  },
  company: {
    name: 'Company',
    type: propertyTypes.ARRAY,
    value: ['Company1'],
    required: false
  },
  imageUrl: {
    name: 'Image URL',
    type: propertyTypes.URL,
    value: 'https://avatars1.githubusercontent.com/u/57366926?v=4',
    required: true
  }
};

export default properties;