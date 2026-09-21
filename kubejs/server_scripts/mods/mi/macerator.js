// priority: -20

ServerEvents.recipes(event => {
    const parseJson = recipe => {
        const json = recipe.json
        if (!json) return null
        return typeof json === 'string' ? JSON.parse(json) : JSON.parse(json.toString())
    }

    const asList = value => {
        if (!value) return []
        return Array.isArray(value) ? value : [value]
    }

    const inputKey = ing => {
        if (!ing) return null
        if (ing.tag) return { type: 'tag', id: String(ing.tag), count: ing.count || ing.amount || 1 }
        const item = ing.item || ing.id
        if (item) return { type: 'item', id: String(item), count: ing.count || ing.amount || 1 }
        return null
    }

    const expandItems = key => {
        if (!key) return []
        if (key.type === 'item') return [key.id]
        try {
            const ids = Ingredient.of(`#${key.id}`).itemIds
            return ids ? Array.from(ids, id => String(id)) : []
        } catch (e) {
            return []
        }
    }

    const existingItems = new Set()
    const existingTags = new Set()

    event.forEachRecipe({ type: 'modern_industrialization:macerator' }, recipe => {
        const json = parseJson(recipe)
        if (!json) return
        asList(json.item_inputs).forEach(ing => {
            const key = inputKey(ing)
            if (!key) return
            if (key.type === 'tag') existingTags.add(key.id)
            expandItems(key).forEach(id => existingItems.add(id))
        })
    })

    const addedKeys = new Set()

    event.forEachRecipe({ type: 'mekanism:crushing' }, recipe => {
        const json = parseJson(recipe)
        if (!json) return
        const key = inputKey(json.input)
        const outputId = json.output && (json.output.id || json.output.item)
        if (!key || !outputId) return

        const unique = `${key.type}:${key.id}:${key.count}`
        if (addedKeys.has(unique)) return
        if (key.type === 'tag' && existingTags.has(key.id)) return

        const items = expandItems(key)
        if (items.some(id => existingItems.has(id))) return

        addedKeys.add(unique)
        if (key.type === 'tag') existingTags.add(key.id)
        items.forEach(id => existingItems.add(id))

        const inCount = key.count || 1
        const outCount = json.output.count || json.output.amount || 1
        const inputStr = key.type === 'tag'
            ? (inCount > 1 ? `${inCount}x #${key.id}` : `#${key.id}`)
            : (inCount > 1 ? `${inCount}x ${key.id}` : key.id)
        const outputStr = outCount > 1 ? `${outCount}x ${outputId}` : outputId
        const recipeId = String(recipe.getId()).replace(/[:/]/g, '_')

        event.recipes.modern_industrialization.macerator(2, 100)
            .itemIn(inputStr)
            .itemOut(outputStr)
            .id(`ccb:macerator/from_mek/${recipeId}`)
    })
})
