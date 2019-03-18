'use strict'
const db = require('../server/db')
const {User, Product, Cart, OrderHistory} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'jane.doe@gmail.com',
      password: '123',
      firstName: 'Jane',
      lastName: 'Doe',
      admin: false,
      phoneNumber: '7321239876',
      billingAddress: '12 Wall Street, New York City, NY 10005'
    }),
    User.create({
      email: 'john.smith@gmail.com',
      password: '789',
      firstName: 'John',
      lastName: 'Smith',
      admin: false,
      phoneNumber: '2013278910',
      billingAddress: '34 Street, New York City, NY 10001'
    }),
    User.create({
      email: 'admin@gmail.com',
      password: '123',
      firstName: 'Doctor',
      lastName: 'Disrespect',
      admin: true,
      phoneNumber: '1231231234',
      billingAddress: 'The North Pole'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)

  const products = await Promise.all([
    Product.create({
      name: 'Claris Hotel & Spa',
      description: 'February 8 - 13',
      sizes: ['M', 'L', 'XL', 'XLL'],
      imageUrl:
        'https://www.slh.com/globalassets/hotels/h/hotel-claris/hotel-claris_hubcnhc_herosquare.jpeg',
      currentPrice: 1599
    }),
    Product.create({
      name: 'El Palace',
      description: 'February 2 - 6',
      sizes: ['M', 'L', 'XL', 'XLL'],
      imageUrl:
        'http://ewt-holiday.com/wp-content/uploads/2018/11/lw1401_88438275_790x490-300x300.jpg',
      currentPrice: 2199
    }),
    Product.create({
      name: 'Ritz Hotel',
      description: 'February 4 - 11',
      sizes: ['M', 'L', 'XL', 'XLL'],
      imageUrl: 'http://www.funtastik.com/images/UI/02890/02890_b1.jpg',
      currentPrice: 2199
    }),
    Product.create({
      name: 'Hotel Casa Fuster',
      description: 'February 15 - 18',
      sizes: ['M', 'L', 'XL', 'XLL'],
      imageUrl:
        'http://reidsguides.com/images/destinations/europe/spain/barcelona/hotels/casa-fuster-thumb.jpg',
      currentPrice: 2199
    }),
    Product.create({
      name: 'Hotel Condes de Barcelona',
      description: 'February 2 - 8',
      sizes: ['M', 'L', 'XL', 'XLL'],
      imageUrl:
        'https://static1.squarespace.com/static/5bfaac2996e76fe3619f3835/5bfb07260ebbe88c33a6cedd/5bfb07276d2a73887b8edc05/1543527954473/68703-579.jpg?format=300w',
      currentPrice: 1499
    }),
    Product.create({
      name: 'Hotel Ciutadella Barcelona',
      description: 'February 10 - 14',
      sizes: ['M', 'L', 'XL', 'XLL'],
      imageUrl:
        'https://hi-cdn.t-rp.co.uk/images/hotels/3394561/0?width=300&height=300&crop=true',
      currentPrice: 1599
    })
  ])

  console.log(`seeded ${products.length} products`)
  console.log(`seeded products successfully`)

  const carts = await Promise.all([
    Cart.create({
      userId: 1,
      productId: 1
    })
  ])
  console.log(`seeded ${carts.length} carts`)
  console.log(`seeded carts successfully`)

  const Orders = await Promise.all([
    OrderHistory.create({
      productName: 'Batman Arkham Origins',
      imageURL:
        'https://i5.walmartimages.com/asr/50280214-4281-474d-bafb-beb8a653a2b9_1.830a9f11e14c2856b44671f3c3dd6658.jpeg?odnWidth=600&odnHeight=826&odnBg=ffffff',
      size: 'M',
      checkoutPrice: 1999,
      userId: 1,
      address: '12 Wall Street, New York City, NY 10005'
    })
  ])
  console.log(`seeded ${Orders.length} order history`)
  console.log(`seeded order history successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed
