let root_url = 'http://114.215.30.71:4001'


const transaction_list = (params) => {
    return {
        url: `${root_url}/api/v1/nep5/public/graphql`,
        method: 'post',
        data: {
            query: ` {
                 TransactionQuery(skip:${params.skip||0},limit:${params.limit||20},
                    ${params.txid ? `txid:"${params.txid}"`:"," }${params.search ? `txid:"${params.search}"`:"," }){
                 count,
                 rows {
                     _id
                     txid
                     to{
                        value
                        hash
                     }
                     from{
                        value
                        hash
                     }
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
                AddressQuery(skip:${params.skip||0},limit:${params.limit||20},
                    ${params.symbol ? `txid:"${params.symbol}"`:"," }){
                  count
                  rows {
                    _id
                    contract
                    symbol
                    address{
                        value
                        hash
                    }
                    createdAt
                    updatedAt
                  }
                }
              }`
        }
    }
}


let asset_list = (params) => {
    return {
        url: `${root_url}/api/v1/nep5/public/graphql`,
        method: 'post',
        data: {
            query: `{
                    AssetQuery(skip:${params.skip||0},limit:${params.limit||20}){
                      rows {
                        _id
                        contract
                        symbol
                        createdAt
                        updatedAt
                      }
                      count
                    }
                }`
        }
    }
}

 // address BalanceOf 
let get_balanceof = (params) => {
    return {
        url: `${root_url}/api/v1/nep5/address/balanceOf`,
        method: 'post',
        data: {
            'address':params.address,
            'contract':params.contract,
        }
    }
}