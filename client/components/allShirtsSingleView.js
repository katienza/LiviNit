import React from 'react'
import {connect} from 'react-redux'
import {Button, Grid, Card, Image} from 'semantic-ui-react'
import {cartAdder} from '../store/cart'
import {Link} from 'react-router-dom'

const getSizesOptions = product =>
  product.sizes.map((size, idx) => ({
    key: idx,
    text: size,
    value: idx
  }))

const routeChange = history => {
  let path = `/`
  history.push(path)
}

export const AllShirtsSingleView = props => {
  return (
    <div id="singleView-items">
      <Grid container columns={2} divided>
        <Grid.Column>
          <Button
            id="allshirtssingleview-btn"
            icon="left arrow"
            onClick={() => routeChange(props.history)}
            align="left"
            circular
            style={{verticalAlign: 'middle'}}
          />
          <span id="allshirtssingleview-text-title">
            Barcelona Hotel Options
            <br />
            <span id="allshirtssingleview-text-description">
              As requested, here are a few options I sourced for the dates you
              mentioned. It was difficult to find something with a pool in your
              price range but I think you'll like these.
            </span>
          </span>
          <Card.Group id="allshirtssingleview-grid" itemsPerRow={1} stackable>
            {props.products.map(product => {
              return (
                <Card
                  key={product.id}
                  id="allshirtssingleview-grid-item"
                  raised
                >
                  <Image
                    src={product.imageUrl}
                    as={Link}
                    to={'./products/' + product.id}
                  />
                  <Card.Content>
                    <Card.Meta id="allshirtssingleview-option">
                      OPTION {product.id}
                    </Card.Meta>
                    <Card.Header id="allshirtssingleview-card-header">
                      {product.name}
                    </Card.Header>
                    <Card.Description>
                      This option is best for really optimizing for walkability
                      in the cool neighborhood of Todos Santos. Close to lots of
                      shops and good food, this place has really great vibes and
                      ambience.
                    </Card.Description>
                    <Button
                      id="allshirtssingleview-btns"
                      as={Link}
                      to={'./products/' + product.id}
                      floated="right"
                    >
                      I LIKE THIS ONE
                    </Button>
                    {/* </div> */}
                  </Card.Content>
                </Card>
              )
            })}
          </Card.Group>
        </Grid.Column>
        <Grid.Column>
          <div id="gmap_canvas">
            <iframe
              width="600"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Barcelona%20Spain&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
          </div>
        </Grid.Column>
      </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllShirtsSingleView)
