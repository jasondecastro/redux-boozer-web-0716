import React from 'react'
import { connect } from 'react-redux'

function cocktailsShow(props) {
  return (
    <div>
      {props.cocktail.name}
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  const cocktail = state.cocktails.find((cocktail) => {return cocktail.id == ownProps.params.id})
  return {cocktail: cocktail}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(cocktailsShow);