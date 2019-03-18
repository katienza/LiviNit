import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Card, Image, Icon, Item} from 'semantic-ui-react'
import {shirts} from '../store/singleProduct'

class singleProduct extends Component {
  constructor(props) {
    super(props)

    this.routeChange = this.routeChange.bind(this)
  }

  componentDidMount() {
    this.props.getProduct(this.props.match.params.id)
  }

  routeChange() {
    let path = `/products`
    this.props.history.push(path)
  }

  render() {
    const {singleProduct} = this.props

    if (Object.keys(singleProduct).length === 0) {
      return <div />
    }

    return (
      <div>
        <Button
          id="allshirtssingleview-btn"
          icon="left arrow"
          onClick={this.routeChange}
          align="left"
          circular
          style={{verticalAlign: 'middle'}}
        />
        <div id="singleProduct-card-container">
          <Item.Group id="singleProduct-ui-cards1">
            <Item style={{width: '30rem', marginLeft: '20em'}}>
              <Image
                size="large"
                src={singleProduct.imageUrl}
                rounded
                centered
              />
            </Item>
            <Item style={{width: '40em', marginLeft: '15em', marginTop: '5em'}}>
              <Item.Content>
                <Item.Header id="singleProduct-card-title">
                  {singleProduct.name}
                </Item.Header>

                <Item.Description id="singleProduct-card-description">
                  Once you've finished stretching out your legs, feel free to
                  reserve some time at the spa for soothing relaxation massages.
                  If you're exhausted and need to rest up, put your feet up or
                  sleep in one of our freshly cleaned bedsheets. Directions to{' '}
                  {singleProduct.name}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
          <Item.Group id="singleProduct-ui-cards2">
            <Item>
              <Item.Content>
                <Item.Header> Hours</Item.Header>
                <div id="singleProduct-hours">
                  <div>MON TUE WED THU FRI SAT SUN</div>
                  <div>
                    7:30 AM 8:00 PM 7:30 AM 8:00 PM 7:30 AM 8:00 PM 7:30 AM 8:00
                    PM 7:30 AM 8:00 PM 7:30 AM 8:00 PM CLOSED
                  </div>
                </div>
              </Item.Content>
            </Item>
            <Item id="singleProduct-card-address">
              <Item.Content>
                <Item.Header>Address</Item.Header>

                <Item.Description>
                  123 COOL PLACE SAN FRANCISCO, CA 94107
                </Item.Description>
                <a>VIEW IN GOOGLE MAPS</a>
              </Item.Content>
            </Item>
            <Item>
              <Item.Content id="singleProduct-card-content">
                <Item.Header>Things to Bring</Item.Header>
                <Icon name="checkmark box">CAMERA</Icon>
                <Icon name="checkmark box">BACKPACK</Icon>
                <Icon name="checkmark box">CASH</Icon>
                <Icon name="checkmark box">WALKING SHOES</Icon>
                <Icon name="checkmark box">PASSPORT</Icon>
              </Item.Content>
            </Item>
          </Item.Group>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    singleProduct: state.singleProduct
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProduct: id => dispatch(shirts(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(singleProduct)
