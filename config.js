let root_url = 'http://nep5-api.otcgo.cn'
let otcgo_url = 'https://api.otcgo.cn'

const transaction_list = (params) => {
    console.log('transaction_list',params)
    return {
        url: `${root_url}/api/v1/nep5/public/graphql`,
        method: 'post',
        data: {
            query: ` {
                 TransactionQuery(skip:${params.skip||0},limit:${params.limit||20},
                    ${params.txid ? `txid:"${params.txid}"`:"," }${params.search ? `search:"${params.search}"`:"," }){
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
                     symbol
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
        url: `${root_url}/api/v1/nep5/address/balances/${params.address}`,
        method: 'get'
    }
}


let assets_banaceof_list  = {
    "ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9":"RPX",
    "a52e3e99b6c2dd2312a94c635c050b4c2bc2485fcb924eecb615852bd534a63f":"申一币",
    "602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7":"GAS",
    "c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b":"NEO",
    "a0777c3ce2b169d4a23bcba4565e3225a0122d95":"APH",
    "6d36b38af912ca107f55a5daedc650054f7e4f75":"APH"
}

let socket_url = 'http://114.215.30.71:4002'