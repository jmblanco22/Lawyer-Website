import React from 'react'

export default function Button({ as = 'a', href = '#', children, variant = 'primary', ...rest }){
  const className = variant === 'outline' ? 'btn btn-outline' : 'btn'
  const Comp = as
  return <Comp href={href} className={className} {...rest}>{children}</Comp>
}
