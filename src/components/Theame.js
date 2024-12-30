import React from 'react'

export default function Theame(props) {
     
  return (
    <div>
      <button type="button" onClick={props.changeTheame} className="btn btn-danger my-5 mx-2" >Chanage Theame to Pink </button>
    </div>
  )
}
