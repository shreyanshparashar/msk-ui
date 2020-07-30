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
    value: 'My Name',
    required: true
  },
  designation: {
    name: 'Designation',
    type: propertyTypes.STRING,
    value: 'Designation',
    required: false
  },
  imageUrl: {
    name: 'Image URL',
    type: propertyTypes.URL,
    value: 'https://avatars0.githubusercontent.com/u/25038931?v=4',
    required: true
  }
};

export default properties;
