ServerEvents.recipes(event => {
    const FeastBlock = Java.loadClass('vectorwing.farmersdelight.common.block.FeastBlock')
    const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')

    const feastBlocks = []
    BuiltInRegistries.BLOCK.forEach(b => {
        if (b instanceof FeastBlock) feastBlocks.push(b)
    })

    let added = 0
    feastBlocks.forEach(feast => {
        const blockId = String(BuiltInRegistries.BLOCK.getKey(feast))
        try {
            const maxServings = feast.getMaxServings()
            const prop = feast.getServingsProperty()
            let state = feast.defaultBlockState()
            const outputs = {}

            for (let servings = maxServings; servings >= 1; servings--) {
                state = state.setValue(prop, servings)
                const stack = Item.of(feast.getServingItem(state))
                if (stack.isEmpty()) continue
                const itemId = String(stack.id)
                outputs[itemId] = (outputs[itemId] || 0) + stack.count
            }

            const keys = Object.keys(outputs)
            if (!keys.length) return

            let recipe = event.recipes.ccb_core.feast_block_serving(4, 20)
                .itemIn(blockId)
            keys.forEach(itemId => {
                const count = outputs[itemId]
                recipe = recipe.itemOut(count > 1 ? `${count}x ${itemId}` : itemId)
            })
            recipe.itemOut('minecraft:bowl')
            recipe.id(`ccb:feast/${blockId.replace(':', '/')}`)
            added++
        } catch (e) {
            console.warn(`[CCB] feast recipe skipped for ${blockId}: ${e}`)
        }
    })

    console.info(`[CCB] added ${added} feast_block_serving recipes`)

    event.recipes.ccb_core.feast_block_serving(1, 20)
        .itemIn('arsdelight:wilden_salad')
        .itemIn('4x arsdelight:chimera_horn')
        .itemOut('4x arsdelight:horn_roll')
        .itemOut('minecraft:bowl')
        .id('ccb_core:feast/arsdelight/horn_roll')
})
