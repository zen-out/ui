import React from 'react'

export function Icon_Delete(props) {
  return (
  
  <span className="has-text-danger is-clickable icon"> <i className="icon icon-delete"
  onclick="axiosDelete('TABLE_NAME' ,'TABLE_ID' )"> </i></span>
  )
}
