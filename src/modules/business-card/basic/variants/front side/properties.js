import propertyTypes from 'msk-property-types'
import themes from 'msk-themes'

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.dark.mistMaroon,
    required: true
  },
  bgColor:{
    name: "Background Color",
    type: propertyTypes.THEME,
    value: themes.light.cutePink,
    required: true
  },
  companyName: {
    name: 'Company Name',
    type: propertyTypes.STRING,
    value: 'MSK-DOCUMENTS',
    required: true
  },
  tagline: {
    name: 'Tagline',
    type: propertyTypes.STRING,
    value: 'tagline',
    required: false
  }
}
export default properties;