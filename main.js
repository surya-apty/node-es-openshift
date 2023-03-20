const { Client } = require('@elastic/elasticsearch')
const client = new Client({
  node: 'http://ec2-13-59-138-158.us-east-2.compute.amazonaws.com:5601',
  auth: {
    username: 'elastic',
    password: 'a1LkrTXTohfgolZS1f_x'
  }
//   auth: { apiKey: 'base64EncodedKey' }
})

const result = client.search({
    index: 'my-index',
    query: {
      match: { hello: 'world' }
    }
  })

console.log(result);

console.log('done....!')