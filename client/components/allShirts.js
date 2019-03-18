import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Card, Image, Button} from 'semantic-ui-react'
import {cartAdder} from '../store/cart'

export const AllShirts = props => {
  return (
    <div>
      <span id="allShirts-Title">
        <Button id="allShirts-Singleview-btn" as={Link} to="/products">
          Reservations & Options
        </Button>
      </span>
      <Card.Group itemsPerRow={6}>
        {props.products.map(product => {
          return (
            // <Grid.Column key={product.id}>
            <Card raised key={product.id}>
              {
                <Image
                  src={product.imageUrl}
                  href={'./products/' + product.id}
                />
              }
              <Card.Content>
                <div className="product name and price">
                  <Card.Header>{product.name}</Card.Header>
                  <Card.Header>{product.description}</Card.Header>
                </div>
              </Card.Content>
            </Card>
            // </Grid.Column>
          )
        })}
      </Card.Group>
      <span id="allShirts-activities">
        <Button id="allShirts-activities-btn" as={Link} to="/products">
          Things To Do & Places To Eat
        </Button>
      </span>
      {/* </Grid> */}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => {
      dispatch(cartAdder(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllShirts)
