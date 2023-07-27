import getSections from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/sections'

export default ({ state }) => {
  const sections = getSections({ state })
  const offersTimer = sections.find(({ name }) => {
    return name === 'offers-timer'
  })
  for (let i = 0; i < offersTimer.fields.length; i++) {
    const { name } = offersTimer.fields[i]
    if (name === 'offers') {
      offersTimer.fields[i].multiple = true
      break
    }
  }
  /*
  sections.push({
    label: 'Barra de informações',
    name: 'info-bar',
    widget: 'object', // https://decapcms.org/docs/widgets/
    icon: 'https://api.iconify.design/bi:info-square.svg',
    fields: [
      {
        label: 'Exibir barra de informações',
        name: 'enabled',
        widget: 'boolean',
        default: true
      }
    ]
  })
  */
  return sections
}
