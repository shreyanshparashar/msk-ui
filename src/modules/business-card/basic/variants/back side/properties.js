import propertyTypes from 'msk-property-types';
import themes from 'msk-themes';

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.light.cutePink,
    required: true
  },
  bgColor: {
    name: 'Background Color',
    type: propertyTypes.THEME,
    value: themes.dark.mistMaroon,
    required: true
  },
  name: {
    name: 'Name',
    type: propertyTypes.STRING,
    value: 'Jone Doe',
    required: true
  },
  designation: {
    name: 'Designation',
    type: propertyTypes.STRING,
    value: 'Full Stack Developer',
    required: true
  },
  contactInfo: {
    name: 'contact information',
    type: propertyTypes.OBJECT,
    required: true,
    value: {
      name: 'Conatct Details',
      type: propertyTypes.OBJECT,
      required: true,
      value: {
        type: propertyTypes.OBJECT,
        Mobile: {
          name: 'Mobile',
          type: propertyTypes.NUMBER,
          value: '+91 1234567890',
          required: true
        },
        Email: {
          name: 'Email',
          type: propertyTypes.EMAIL,
          value: 'abc@xyz.com',
          required: true
        },
        Address: {
          name: 'Address',
          type: propertyTypes.STRING,
          value: 'Delhi,India',
          required: true
        },
        Website: {
          name: 'Website',
          type: propertyTypes.STRING,
          value: 'www.mywebsite.com',
          required: false
        }
      }
    }
  }
};

export default properties;
