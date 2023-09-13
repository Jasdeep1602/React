import React from 'react'

export default function New() {
  let b = 'hellohello'

  let count = 0
  let c = 'h'

  for (let i = 0; i < b.length; i++) {
    if (b[i] === c) {
      count++
    }
  }

  return <div>{console.log(count)}</div>
}
