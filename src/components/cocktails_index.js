import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

function CocktailsIndex(props) {
  return (
    <div>
      <ul>
        {props.cocktails.map(cocktail => <Link to={`/cocktails/${cocktail.id}`}><li key={cocktail.id}>{cocktail.name}</li></Link>)}
      </ul>
      {props.children}
    </div>
  )
}

function mapStateToProps(state){
  return {
    cocktails: state.cocktails
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CocktailsIndex)
