ServerEvents.tags("item",event => {
    event.add('chicken_roost:chicken_food_tier_0','minecraft:wheat_seeds')
    event.add('ftb:chicken_stick','chicken_roost:chicken_stick')
})
ServerEvents.tags("block", event => {
    event.add('ccb:meteorite_crystal_blocks', [
        'ae2:quartz_block',
        'ae2:fluix_block',
        'ae2cs:meteor_crystal_block',
        'ae2cs:ender_quartz_block',
        'ae2cs:link_crystal_block',
        'ae2cs:redstone_crystal_block',
        'extendedae:entro_block',
        'ae2cs:crystal_grid_block',
        'ae2cs:resonating_crystal_block',
        'neoecoae:energized_crystal_block',
        'neoecoae:energized_fluix_crystal_block',
        'ae2cs:quantum_crystal_block',
        'ae2lt:overload_crystal_block',
        'extendedae_plus:lattra_crystal_block'
    ])
})
ServerEvents.tags("item",event => {
    event.add('c:seeds/tier0','minecraft:wheat_seeds')
    event.add('c:seeds/tier0orup','minecraft:wheat_seeds')
})
ServerEvents.recipes(event =>{
    event.remove({output:'chicken_roost:chicken_food_tier_2'})
    event.remove({output:'chicken_roost:chicken_food_tier_3'})
    event.remove({output:'chicken_roost:chicken_food_tier_4'})
    event.remove({output:'chicken_roost:chicken_food_tier_5'})
    event.remove({output:'chicken_roost:chicken_food_tier_6'})
    event.remove({output:'chicken_roost:chicken_food_tier_7'})
    event.remove({output:'chicken_roost:chicken_food_tier_8'})
    event.remove({output:'chicken_roost:chicken_food_tier_9'})
})
ServerEvents.recipes(event =>{
event.shaped('chicken_roost:chicken_food_tier_2',[
    "AAA",
    "ABA",
    "AAA"
],{
    A:'ccb:raw_sandwich',
    B:'chicken_roost:chicken_food_tier_1',
})
})
ServerEvents.recipes(event =>{
event.shaped('chicken_roost:chicken_food_tier_3',[
    "ABA",
    "BCB",
    "ABA"
],{
    A:'farmersdelight:fruit_salad',
    B:'ccb:soul_boom',
    C:'chicken_roost:chicken_food_tier_2'
})
})
ServerEvents.recipes(event =>{
event.shaped('chicken_roost:chicken_food_tier_4',[
    "ABA",
    "BCB",
    "ABA"
],{
    A:'ccb:magic_drink',
    B:'ccb:goo_jelly',
    C:'chicken_roost:chicken_food_tier_3',
})
})
ServerEvents.recipes(event =>{
event.shaped('chicken_roost:chicken_food_tier_5',[
    "ABA",
    "DCE",
    "AFA"
],{
    A:'ccb:source_soul_fudge',
    B:'arsdelight:mendosteen_pie',
    C:'chicken_roost:chicken_food_tier_4',
    D:'arsdelight:bombegrante_pie',
    E:'arsdelight:bastion_pie',
    F:'arsdelight:frostaya_pie'

})
event.shaped('chicken_roost:chicken_food_tier_6',[
    "ABA",
    "DCE",
    "AFA"
],{
    A:'ccb:crystal_thin_sheet',
    B:'ccb:singularity_cookie',
    C:'chicken_roost:chicken_food_tier_5',
    D:'ccb:ranbow_matter_fudge',
    E:'ccb:sample_pizza',
    F:'ccb:terminal_fried_rice'

})
event.shaped('chicken_roost:chicken_food_tier_7',[
    "ABD",
    "BCB",
    "EFG"
],{
    A:'ccb:unique_meat',
    B:'ccb:qio_special_toast_bread',
    C:'chicken_roost:chicken_food_tier_6',
    D:'ccb:power_drink',
    E:'ccb:bacterial_juice_ranbow',
    F:'mekanism:canteen[mekanism:fluids={fluid_tanks:[{amount:64000,id:"mekanism:nutritional_paste"}]}]',
    G:'ccb:mineral_processing_molecular_cuisine'

})
event.shaped('chicken_roost:chicken_food_tier_8',[
    "AFD",
    "BCB",
    "EFG"
],{
    A:'ccb:drangon_rice_bowl',
    B:'ccb:drangon_ice_cream',
    C:'chicken_roost:chicken_food_tier_7',
    D:'ccb:roasted_drangon_heart',
    E:'ccb:frozen_battery_stick_ice',
    F:'modern_industrialization:mixed_ingot_iridium',
    G:'ccb:beef_balls'

})
event.shaped('chicken_roost:chicken_food_tier_9',[
    "AFD",
    "BCB",
    "EFG"
],{
    A:'ccb:pellet_no',
    B:'ccb:atm_vibranium_unobtainium_alloy_ingot',
    C:'chicken_roost:chicken_food_tier_8',
    D:'ccb:uranium_radiation',
    F:'ccb:star_acid',
    E:'ccb:delicious_matter',
    G:'ccb:life_water'

})
event.shaped('chicken_roost:chicken_food_tier_10',[
    "ABD",
    "HC ",
    "EFG"
],{
    A:'ccb:antimatter_soup',
    B:'ccb:uumatter_soup',
    C:'chicken_roost:chicken_food_tier_9',
    D:'ccb:real_soul_boom',
    F:'ccb:exhaust_nuclear_waste_sauce',
    E:'ccb:plasma_coke',
    G:'ccb:aged_dragon_wings',
    H:'ccb:world_tree'
})
})