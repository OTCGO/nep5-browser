let root_url = 'http://114.215.30.71:4001/api/v1/nep5/public/graphql'


let transaction_list = {
   url: `${root_url}/api/v1/nep5/public/graphql`,
   method: 'post',
   data: {
       query:` {
        TransactionQuery{
        count,
        rows {
            _id
            txid
            to
            from
            value
            blockIndex
            operation
            contract
            createdAt
            updatedAt
            } 
        }
    }`
   }
}

