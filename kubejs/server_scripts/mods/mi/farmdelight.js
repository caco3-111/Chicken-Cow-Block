ServerEvents.recipes(event => {
    event.remove({id: "farmersdelight:cooking/cooked_rice"});
    event.remove({id: 'farmersdelight:cooking/tomato_sauce'});
    event.remove({id: 'farmersdelight:cooking/mushroom_stew'});
    event.remove({id: 'farmersdelight:cooking/beetroot_soup'});
    event.remove({id: 'farmersdelight:cooking/stuffed_pumpkin_block'});
    event.remove({id: 'farmersdelight:cooking/ratatouille'});
    event.remove({id: 'farmersdelight:cooking/vegetable_noodles'});
    event.remove({id: 'farmersdelight:cooking/chicken_soup'});
    event.remove({id: 'farmersdelight:cooking/cabbage_rolls'});
    event.remove({id: 'ends_delight:food/chorus_fruit_milk_tea'});
    event.remove({id: 'ends_delight:food/chorus_sauce'});
    event.custom({
        "type": "farmersdelight:cooking",
        "ingredients": [
            {
                "item": "ends_delight:chorus_succulent"
            },
            {
                "type": "neoforge:compound",
                "children": [
                    {
                        "item": "minecraft:chorus_fruit"
                    },
                    {
                        "item": "ends_delight:chorus_fruit_grain"
                    }
                ]
            },
            {
                "item": "minecraft:sugar"
            }
        ],
        "result": {
            "id": "ends_delight:chorus_sauce"
        },
        "recipe_book_tab": "misc",
        "cookingtime": 200,
        "experience": 0.35
    }).id('ccb:cooking/chorus_sauce');
    event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 100,
        "experience": 0.35,
        "ingredients": [
            {
                "tag": "c:crops/cabbage"
            },
            {
                "tag": "c:foods/safe_raw_fish"
            }
        ],
        "result": {
            "count": 1,
            "id": "farmersdelight:cabbage_rolls"
        }
    }).id('ccb:cooking/cabbage_rolls');
    event.custom({
        "type": "farmersdelight:cooking",
        "experience": 1.0,
        "ingredients": [
            {
                "tag": "c:foods/raw_chicken"
            },
            {
                "tag": "c:crops/carrot"
            },
            {
                "tag": "c:foods/leafy_green"
            },
            {
                "type": "neoforge:compound",
                "children": [
                    {"item": 'minecraft:golden_carrot'},
                    {"item": 'minecraft:beetroot'},
                    {"item": 'farmersdelight:tomato'},
                    {"item": 'farmersdelight:onion'}
                ]
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "count": 1,
            "id": "farmersdelight:chicken_soup"
        }
    }).id('ccb:cooking/chicken_soup');
    event.custom({
        "type": "farmersdelight:cooking",
        "experience": 1.0,
        "ingredients": [
            {
                "tag": "c:crops/carrot"
            },
            {
                "tag": "c:mushrooms"
            },
            {
                "tag": "c:foods/pasta"
            },
            {
                "tag": "c:foods/leafy_green"
            },
            {
                "type": "neoforge:compound",
                "children": [
                    {"item": 'minecraft:golden_carrot'},
                    {"item": 'minecraft:beetroot'},
                    {"item": 'farmersdelight:tomato'},
                    {"item": 'farmersdelight:onion'}
                ]
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "count": 1,
            "id": "farmersdelight:vegetable_noodles"
        }
    }).id('ccb:cooking/vegetable_noodles');
    event.custom({
        "type": "farmersdelight:cooking",
        "experience": 1.0,
        "ingredients": [
            {
                "tag": "c:crops/tomato"
            },
            {
                "tag": "c:crops/onion"
            },
            {
                "tag": "c:crops/beetroot"
            },
            {
                "type": "neoforge:compound",
                "children": [
                    {"item": 'minecraft:carrot'},
                    {"item": 'minecraft:golden_carrot'},
                    {"item": 'minecraft:potato'}
                ]
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "count": 1,
            "id": "farmersdelight:ratatouille"
        }
    }).id('ccb:cooking/ratatouille');
    event.custom({
        "type": "farmersdelight:cooking",
        "container": {
            "count": 1,
            "id": "minecraft:pumpkin"
        },
        "cookingtime": 400,
        "experience": 2.0,
        "ingredients": [
            {
                "tag": "c:crops/rice"
            },
            {
                "tag": "c:crops/onion"
            },
            {
                "item": "minecraft:brown_mushroom"
            },
            {
                "tag": "c:crops/potato"
            },
            {
                "tag": "c:foods/berry"
            },
            {
                "type": "neoforge:compound",
                "children": [
                    {"item": 'minecraft:carrot'},
                    {"item": 'minecraft:golden_carrot'},
                    {"item": 'minecraft:beetroot'},
                    {"item": 'farmersdelight:tomato'}
                ]
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "count": 1,
            "id": "farmersdelight:stuffed_pumpkin_block"
        }
    }).id('ccb:cooking/stuffed_pumpkin_block');
    event.custom({
        type: 'farmersdelight:cooking',
        container: {id: 'minecraft:glass_bottle'},
        experience: 1.0,
        ingredients: [
            {"tag": "c:drinks/milk"},
            {
                "type": "neoforge:compound",
                "children": [
                    {"item": "minecraft:chorus_fruit"},
                    {"item": "ends_delight:chorus_fruit_grain"}
                ]
            },
            {"item": 'minecraft:sugar'}
        ],
        result: {
            count: 1,
            id: 'ends_delight:chorus_fruit_milk_tea'
        }
    }).id('ccb:cooking/chorus_fruit_milk_tea');
    event.custom({
        type: 'farmersdelight:cooking',
        container: {id: 'minecraft:bowl'},
        cookingtime: 100,
        experience: 0.35,
        ingredients: [
            {tag: 'c:crops/rice'},
            {
                "type": "neoforge:components",
                "items": ["minecraft:potion"],
                "components": {
                    "potion_contents": {
                        "potion": "water"
                    }
                }
            }
        ],
        result: {
            count: 1,
            id: 'farmersdelight:cooked_rice'
        }
    }).id('ccb:cooking/cooked_rice');
    event.custom({
        type: 'farmersdelight:cooking',
        container: {id: 'minecraft:bowl'},
        cookingtime: 100,
        experience: 0.35,
        ingredients: [
            {tag: 'c:crops/tomato'},
            {tag: 'c:crops/tomato'},
            {item: 'minecraft:sugar'},
        ],
        result: {
            count: 1,
            id: 'farmersdelight:tomato_sauce'
        }
    }).id('ccb:cooking/tomato_sauce');
    event.custom({
        "type": "farmersdelight:cooking",
        "container": {"id": "minecraft:glass_bottle"},
        "experience": 1.0,
        "ingredients": [
            {
                "item": 'ars_nouveau:sourceberry_bush'
            },
            {
                "item": 'irons_spellbooks:arcane_essence'
            },
            {
                "item": 'minecraft:egg'
            },
            {
                "item": 'ars_nouveau:magebloom'
            },
            {
                "item": 'farmersdelight:milk_bottle'
            }
        ],
        "recipe_book_tab": "drinks",
        "result": {
            "count": 1,
            "id": "ccb:magic_drink"
        }
    }).id('ccb:cooking/magic_drink');
    event.custom({
        "type": "farmersdelight:cooking",
        "container": {"id": "minecraft:bowl"},
        "experience": 1.0,
        "ingredients": [
            {
                "item": 'justdirethings:gooblock_tier1'
            },
            {
                "item": 'justdirethings:upgrade_blank'
            },
            {
                "item": 'chicken_roost:chicken_essence_tier_4'
            },
            {
                "item": 'chicken_roost:chicken_essence_tier_4'
            },
            {
                "item": 'minecraft:sugar'
            }
        ],
        "result": {
            "count": 1,
            "id": "ccb:goo_jelly"
        }
    }).id('ccb:cooking/goo_jelly');
    event.custom({
        type: 'farmersdelight:cooking',
        container: {id: 'draconicevolution:draconium_ingot'},
        experience: 1.0,
        ingredients: [
            {item: 'ends_delight:liquid_dragon_egg'},
            {item: 'irons_spellbooks:dragonskin'},
            {item: 'jdte:ender_dragon_essence'},
            {item: 'draconicevolution:awakened_draconium_dust'},
            {item: 'apothic_enchanting:draconic_endshelf'}
        ],
        result: {
            count: 1,
            id: 'ccb:drangon_rice_bowl'
        }
    }).id('ccb:cooking/drangon_rice_bowl');
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": "appflux:redstone_crystal"
            }
        ],
        "result": [
            {
                "item": {
                    "count": 4,
                    "id": "ccb:crystal_thin_sheet"
                }
            },
        ],
        "tool": [
            {
                "item": "data_energistics:data_crystal_cutting_knife"
            }
        ]
    }).id('ccb:cutting/crystal_thin_sheet');
})
