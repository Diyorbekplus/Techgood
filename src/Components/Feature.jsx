import React from 'react'

const Feature = ({id, title, icon, subtitle}) => {
  return (
    <article className="feature-item" key={id}>
    <div className="icon">
        {icon}
    </div>
    <div className="label">
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
</article>
  )
}

export default Feature