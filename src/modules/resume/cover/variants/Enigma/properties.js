

import propertyTypes from 'msk-property-types'
import themes from 'msk-themes'

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.dark.shadesOfGrey,
    required: true
  },
  name: {
    name: 'Name',
    type: propertyTypes.STRING,
    value: 'Your Name',
    required: true
  },
  imageUrl: {
    name: 'Image URL',
    type: propertyTypes.STRING,
    value: 'https://github.com/fouzanmohd/webproject1/blob/master/profile-img.png?raw=true',
    required: false
  },
  designation: {
    name: 'Designation',
    type: propertyTypes.STRING,
    value: 'Designation',
    required: false
  },
  emailId: {
    name: 'Email ID',
    type: propertyTypes.EMAIL,
    value: 'youremail@emai.com',
    icon: 'https://github.com/fouzanmohd/webproject1/blob/master/email.png?raw=true'
    ,required: true
  },
  phoneNo: {
    name: 'Phone No',
    type: propertyTypes.NUMBER,
    value: '99999999999',
    icon:'https://github.com/fouzanmohd/webproject1/blob/master/telephone.png?raw=true',
    required: true
  },
  location: {
    name: 'Location',
    type:propertyTypes.STRING,
    value:'Your place',
    icon:'https://github.com/fouzanmohd/webproject1/blob/master/place.png?raw=true',
    required:true
  },
  linkedIn: {
    name: 'Linkedin',
    type:propertyTypes.URL,
    value:'LinkedIn id: ',
    required:false
  },
  gitHub: {
    name: 'gitHub',
    type:propertyTypes.URL,
    value:'GitHub Id:',
    required:false
  },
  description: {
    name: 'Description',
    type:propertyTypes.URL,
    value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugiat quo quidem pariatur et! Quod ",
    required:false
  }

  
};

export default properties;