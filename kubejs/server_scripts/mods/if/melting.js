ServerEvents.recipes(event => {
    event.custom({
        type: 'productivemetalworks:item_melting',
        ingredient: {
            item: 'industrialforegoing:plastic'
        },
        maximum_temperature: 0,
        minimum_temperature: 1000,
        result: [
            {
                amount: 1000,
                id: 'pneumaticcraft:plastic'
            }
        ]
    }).id('ccb:melting/industrialforegoing_plastic')
})
