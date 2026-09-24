ServerEvents.recipes(event =>{
    event.shapeless('chicken_roost:c_vanilla',[
        'minecraft:egg'
    ])
    event.shapeless('chicken_roost:blue_egg',[
        'minecraft:egg','minecraft:blue_dye'
    ])
    event.shapeless('chicken_roost:brown_egg',[
        'minecraft:egg','minecraft:brown_dye'
    ])
    event.shapeless('chicken_roost:white_egg',[
        'minecraft:egg','minecraft:white_dye'
    ])
    event.shaped('6x minecraft:deepslate', [
        '  A',
        'AA ',
        'A  '
    ], {
        A: 'chicken_roost:stone_essence'
    }).noMirror().noShrink().id('ccb:stone_essence_to_deepslate')
    event.shaped('6x xycraft_world:kivi', [
        'A  ',
        'A  ',
        'A  '
    ], {
        A: 'chicken_roost:stone_essence'
    }).noMirror().noShrink().id('ccb:stone_essence_to_kivi')
    const concreteEssencePatterns = {
        white: ['AAA', '   ', '   '],
        orange: ['A  ', 'A  ', 'A  '],
        magenta: ['A  ', ' A ', '  A'],
        light_blue: ['  A', ' A ', 'A  '],
        yellow: ['AA ', 'A  ', '   '],
        lime: ['AA ', ' A ', '   '],
        pink: ['A  ', 'AA ', '   '],
        gray: [' A ', 'AA ', '   '],
        light_gray: ['A A', ' A ', '   '],
        cyan: [' A ', 'A A', '   '],
        purple: ['AA ', '   ', '  A'],
        blue: [' AA', '   ', 'A  '],
        brown: ['A  ', '   ', 'A A'],
        green: ['  A', '   ', 'A A'],
        red: ['A A', '   ', 'A  '],
        black: ['A A', '   ', '  A']
    }
    Object.entries(concreteEssencePatterns).forEach(([color, pattern]) => {
        event.shaped(`6x minecraft:${color}_concrete`, pattern, {
            A: 'ccb:concrete_essence'
        }).noMirror().noShrink().id(`ccb:concrete_essence_to_${color}_concrete`)
    })
    event.shaped('8x irons_spellbooks:arcane_essence',[
    "A",
    "B",
    "C"
],{
    A:'minecraft:light_blue_dye',
    B:'ars_nouveau:sourceberry_bush',
    C:'minecraft:purple_dye'
})
event.shaped('mi_tweaks:alien_chicken',[
    "ABA",
    "BCB",
    "ABA"
],{
    A:'ae2:controller',
    B:'mekanism:ultimate_control_circuit',
    C:'ae2:smooth_quartz_block'
})
event.shaped('mi_tweaks:create_chicken',[
    "ABA",
    "BCB",
    "ABA"
],{
    A:'appliedcreate:stress_storage_component_16k',
    B:'create:flywheel',
    C:'create:brass_casing'
})
event.shaped('modern_mekanistics:mass_generator',[
    "ADA",
    "BCB",
    "AEA"
],{
    A:'mekmm:scrap_box',
    B:'modern_industrialization:quantum_circuit',
    C:'create:brass_casing',
    D:'mekmm:ultimate_recycling_factory',
    E:'extended_industrialization:electric_waste_collector'
})
event.shaped('modern_mekanistics:niuniu_brand_cooking_machine',[
    "ADA",
    "BCB",
    "AEA"
],{
    A:'mekanism:boiler_casing',
    B:'mekanism:resistive_heater',
    C:'mekanism:qio_drive_array',
    D:'mi_tweaks:cutting_board',
    E:'mi_tweaks:cooking_pot'
})
event.shaped('mi_tweaks:cutting_board',[
    "A B",
    "DCE",
    " F "
],{
    A:'farmersdelight:flint_knife',
    B:'farmersdelight:iron_knife',
    C:'farmersdelight:cutting_board',
    D:'farmersdelight:golden_knife',
    E:'farmersdelight:diamond_knife',
    F:'mekck:atomic_knife'
})
event.shaped('mi_tweaks:cooking_pot',[
    "D E",
    "BFC",
    "AAA"
],{
    A:'mekanism:resistive_heater',
    B:'ends_delight:end_stove',
    C:'farmersdelight:stove',
    D:'farmersdelight:cooking_pot',
    E:'farmersdelight:skillet',
    F:'occultism:spirit_campfire'
})
event.shaped('mi_tweaks:feast_block_serving',[
    "ABA",
    "CDE",
    "FFF"
],{
    A:'minecraft:bowl',
    B:'farmersdelight:roast_chicken_block',
    C:'mi_tweaks:cutting_board',
    D:'farmersdelight:cooking_pot',
    E:'mi_tweaks:cooking_pot',
    F:'minecraft:bricks'
})
event.shaped('modern_mekanistics:bigger_ambient_gas_collector',[
    "ABA",
    "BCB",
    "ABA"
],{
    A:'mekmm:ambient_gas_collector',
    B:'mekanism:upgrade_filter',
    C:'pneumaticcraft:plastic_brick_white'
})
event.shapeless('justdirethings:goosoil_tier1', [
    'minecraft:dirt','justdirethings:ferricore_hoe'
    ]).damageIngredient('justdirethings:ferricore_hoe',1) 
    event.shapeless('justdirethings:goosoil_tier2', [
    'minecraft:dirt','justdirethings:blazegold_hoe'
    ]).damageIngredient('justdirethings:blazegold_hoe',1) 
    event.shapeless('justdirethings:goosoil_tier3', [
    'minecraft:dirt','justdirethings:celestigem_hoe'
    ]).damageIngredient('justdirethings:celestigem_hoe',1) 
    event.shapeless('justdirethings:goosoil_tier4', [
    'minecraft:dirt','justdirethings:eclipsealloy_hoe'
    ]).damageIngredient('justdirethings:eclipsealloy_hoe',1) 
    event.remove({ output: 'extendedcompressor:extended_compressor' });
    event.shaped('extendedcompressor:extended_compressor', [
        'CBC',
        'BIB',
        'DSD'
    ], {
        I: 'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:compressor"]',
        B: 'extendedcrafting:ultimate_component',
        S: 'extendedcrafting:ultimate_auto_table',
        C: 'extendedcrafting:enhanced_ender_catalyst',
        D: 'extendedcrafting:enhanced_redstone_catalyst'
    });
    event.shaped('avaritia:infinity_ingot', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'ccb:infinite_rainbow_dye',
        B: 'minecraft:iron_ingot'
    });
    event.remove({ output: 'ars_caelum:ritual_conjure_island_end_portal' });
    event.shaped('asr:end_portal', [
        ' A ',
        'ABA',
        ' A '
    ], {
        B:'ars_nouveau:purple_archwood_log',
        A: 'minecraft:end_portal_frame'
    });
});
