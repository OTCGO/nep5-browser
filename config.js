let root_url = 'http://114.215.30.71:4001'


const transaction_list = (params) => {
    return {
        url: `${root_url}/api/v1/nep5/public/graphql`,
        method: 'post',
        data: {
            query: ` {
                 TransactionQuery(skip:${params.skip||0},limit:${params.limit||20}){
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
}


let address_list = (params) => {
    return {
        url: `${root_url}/api/v1/nep5/public/graphql`,
        method: 'post',
        data: {
            query: `{
                AddressQuery(skip:${params.skip||0},limit:${params.limit||20}){
                  count
                  rows {
                    _id
                    contract
                    address
                    createdAt
                    updatedAt
                  }
                }
              }`
        }
    }
}