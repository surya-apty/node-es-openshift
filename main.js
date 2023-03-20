const { Client } = require('@elastic/elasticsearch')
const client = new Client({
  node: 'http://ec2-13-59-138-158.us-east-2.compute.amazonaws.com:5601',
})
console.log();
const test = async () => {
    const getStats = client.nodes.stats();
    getStats.then(function(o){
        console.log("started!", e);
    })
    .catch(function(e){
        console.log(e);
        throw e;
    });
};

test();
console.log('done....!')