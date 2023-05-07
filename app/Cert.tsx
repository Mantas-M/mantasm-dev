import React from 'react'

async function getCert() {
  const res = await fetch(
    'https://learnweb3.io/api/tokens/7411199b-6463-4ffa-803d-80afa30585ec/164963/metadata.json'
  )
  const data = await res.json()

  return data.image_data
}

export default async function Cert() {
  const imageData = await getCert()

  const SvgComponent = React.createElement('div', {
    dangerouslySetInnerHTML: { __html: imageData }
  })

  return SvgComponent
}
