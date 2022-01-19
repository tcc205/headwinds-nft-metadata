const fs = require('fs')


async function run() {
    let index = 740

    while (index < 778) {
        let data = {
            name: `Headwinds #${index}`,
            symbol: "HDWNDS",
            description: "777 non-fungible passes that give access to a full suite of crypto software.",
            seller_fee_basis_points: 1000,
            image: 'https://www.arweave.net/rL0MkkzSkLNXs5odeLt86Sd77-VSb4JgsqnnACEaHQQ?ext=png',
            attributes: [
                  {
                  "trait_type": "Headwinds",
                  "value": `#${index}`
                  }
              ],
            
            properties: {
                creators: [
                    {
                        address: "EouTzX12NUdbqqBDBePf8VNZd6THQHgJjxgE3ydJ8wsA",
                        share: 100,
                    },
                ],
              files: [
                {
                  uri: 'https://www.arweave.net/rL0MkkzSkLNXs5odeLt86Sd77-VSb4JgsqnnACEaHQQ?ext=png',
                  type: "image/png",
                },
              ]
            },
            collection: {
                name: "Headwinds",
                family: "Headwinds",
              },
          }


        await fs.writeFileSync(`./headwinds${index}.json`, JSON.stringify(data))
        index++
    }
}


run()