import React from 'react'

export default function CocktailsReducer(state=[], action) {
  switch(action.type) {
    case 'FETCH_COCKTAILS':
      return action.payload
    default:
      return state
  }
}
