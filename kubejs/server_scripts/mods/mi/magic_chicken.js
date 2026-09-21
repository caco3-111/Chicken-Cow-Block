ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('3x minecraft:lightning_rod')
        .itemIn('minecraft:heart_of_the_sea')
        .itemIn('ars_nouveau:air_essence')
        .fluidIn("1000x #c:experience")
        .itemOut('ars_nouveau:glyph_lightning');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('ars_nouveau:glyph_lightning')
        .itemIn('8x minecraft:glass_bottle')
        .itemOut('8x irons_spellbooks:lightning_bottle');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('ars_nouveau:thread_life_drain')
        .itemIn('8x minecraft:glass_bottle')
        .itemOut('8x irons_spellbooks:blood_vial');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('minecraft:potion[potion_contents={potion:"minecraft:water"}]')
        .itemIn('minecraft:gunpowder')
        .itemIn('minecraft:coal')
        .itemOut('irons_spellbooks:common_ink');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('4x irons_spellbooks:common_ink')
        .itemIn(' minecraft:copper_ingot')
        .itemOut('irons_spellbooks:uncommon_ink');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('4x irons_spellbooks:uncommon_ink')
        .itemIn(' minecraft:iron_ingot')
        .itemOut('irons_spellbooks:rare_ink');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('4x irons_spellbooks:rare_ink')
        .itemIn(' minecraft:gold_ingot')
        .itemOut('irons_spellbooks:epic_ink');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('4x irons_spellbooks:epic_ink')
        .itemIn('minecraft:amethyst_shard')
        .itemOut('irons_spellbooks:legendary_ink');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('minecraft:paper')
        .itemIn('#c:dusts/emerald')
        .itemIn('2x #c:dusts/iron')
        .itemIn('mahoutsukai:dagger', 0)
        .fluidIn("1000x irons_spellbooks:blood")
        .itemOut('mahoutsukai:scroll_boundary_drain_life');
    event.recipes.modern_industrialization.magic_chicken(32, 40)
        .itemIn('chicken_roost:c_red')
        .itemIn('8x irons_spellbooks:legendary_ink')
        .itemIn('8x mahoutsukai:scroll_boundary_drain_life')
        .fluidIn("8000x irons_spellbooks:blood")
        .itemOut('chicken_roost:c_blood');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('#c:dusts/emerald')
        .itemIn('#c:dusts/diamond')
        .itemIn('#c:dusts/gold')
        .itemIn('mahoutsukai:dagger', 0)
        .fluidIn("1000x irons_spellbooks:blood")
        .itemOut('mahoutsukai:scroll_gandr');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('#c:dusts/emerald')
        .itemIn('#c:dusts/iron')
        .itemIn('#c:dusts/gold')
        .itemIn('mahoutsukai:dagger', 0)
        .fluidIn("1000x irons_spellbooks:blood")
        .itemOut('mahoutsukai:scroll_geas');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('minecraft:echo_shard')
        .itemIn('minecraft:breeze_rod')
        .fluidIn("1000x minecraft:water")
        .fluidOut('1000x irons_spellbooks:timeless_slurry');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('minecraft:paper')
        .itemIn('mahoutsukai:scroll_geas')
        .itemIn('mahoutsukai:scroll_gandr')
        .itemIn('allthemodium:ancient_soulberries')
        .fluidIn("1000x irons_spellbooks:timeless_slurry")
        .itemOut('irons_spellbooks:ancient_knowledge_fragment');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('2x minecraft:prismarine_shard')
        .itemIn('ars_nouveau:conjuration_essence')
        .itemIn('minecraft:totem_of_undying')
        .fluidIn("1000x #c:experience")
        .itemOut('ars_nouveau:glyph_fangs');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('ars_nouveau:glyph_fangs')
        .itemIn('8x minecraft:blue_ice')
        .itemOut('8x irons_spellbooks:icy_fang');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('irons_spellbooks:icy_fang')
        .fluidIn("1000x minecraft:water")
        .fluidOut('1000x irons_spellbooks:ice_venom');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('irons_spellbooks:arcane_ingot')
        .itemIn('#c:nuggets/steel')
        .fluidIn('100x minecraft:lava')
        .itemOut('apotheosis:common_material');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('2x apotheosis:common_material')
        .itemIn('irons_spellbooks:magic_cloth')
        .fluidIn("100x irons_spellbooks:blood")
        .itemOut('apotheosis:uncommon_material');
     event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('2x apotheosis:uncommon_material')
        .itemIn('irons_spellbooks:mithril_ingot')
        .fluidIn("100x irons_spellbooks:ice_venom")
        .itemOut('apotheosis:rare_material');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('2x apotheosis:rare_material')
        .itemIn('irons_spellbooks:mithril_weave')
        .fluidIn("100x irons_spellbooks:timeless_slurry")
        .itemOut('apotheosis:epic_material');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('2x apotheosis:epic_material')
        .itemIn('4x irons_spellbooks:legendary_ink')
        .itemIn('irons_spellbooks:dragonskin')
        .itemOut('apotheosis:mythic_material');
     event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('apotheosis:salvaging_table',0)
        .itemIn('2x #c:gems')
        .itemOut('apotheosis:gem_dust');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('irons_spellbooks:hogskin')
        .fluidIn('1000x irons_spellbooks:blood')
        .itemOut('irons_spellbooks:bloody_vellum');
    event.recipes.modern_industrialization.magic_chicken(32, 100)
        .itemIn('minecraft:dragon_breath')
        .fluidIn('3200x ifeu:liquid_sculk_matter')
        .itemOut('3x apothic_enchanting:infused_breath');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('apotheosis:mythic_material')
        .itemIn('irons_spellbooks:energized_core')
        .itemIn('irons_spellbooks:holy_upgrade_orb')
        .itemIn('apothic_enchanting:infused_breath')
        .fluidIn('3200x industrialforegoing:ether_gas')
        .itemOut('apotheosis:god_fused_pearl');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('industrialforegoing:mechanical_dirt')
        .itemIn('occultism:cursed_honey')
        .itemIn('occultism:demonic_meat')
        .fluidIn('8000x irons_spellbooks:blood')
        .itemOut('apotheosis:boss_summoner');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('8x apotheosis:gem_fused_slate')
        .itemIn('apotheosis:boss_summoner')
        .itemOut('8x apotheosis:sigil_of_malice');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('irons_spellbooks:heavy_chain_necklace')
        .itemIn('irons_spellbooks:arcane_ingot')
        .itemIn('minecraft:tnt')
        .fluidIn('100x #c:experience')
        .itemOut('apotheosis:spawner_chain');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('apotheosis:spawner_rune')
        .fluidIn('8000x #c:experience')
        .itemOut('apotheosis:infused_spawner_rune');

    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('#c:gems/source')
        .itemIn('minecraft:feather')
        .itemIn('ars_nouveau:wilden_wing')
        .itemIn('#minecraft:arrows')
        .fluidIn('2000x sauce:source_fluid')
        .itemOut('ars_nouveau:air_essence');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('#c:gems/source')
        .itemIn('minecraft:water_bucket')
        .itemIn('minecraft:snow_block')
        .itemIn('minecraft:kelp')
        .fluidIn('2000x sauce:source_fluid')
        .itemOut('ars_nouveau:water_essence');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('#c:gems/source')
        .itemIn('minecraft:flint_and_steel')
        .itemIn('minecraft:torch')
        .itemIn('minecraft:gunpowder')
        .fluidIn('2000x sauce:source_fluid')
        .itemOut('ars_nouveau:fire_essence');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('#c:gems/source')
        .itemIn('#c:ingots/iron')
        .itemIn('#c:seeds')
        .itemIn('#minecraft:dirt')
        .fluidIn('2000x sauce:source_fluid')
        .itemOut('ars_nouveau:earth_essence');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('#c:gems/source')
        .itemIn('minecraft:fermented_spider_eye')
        .itemIn('minecraft:sugar')
        .itemIn('minecraft:milk_bucket')
        .fluidIn('2000x sauce:source_fluid')
        .itemOut('ars_nouveau:abjuration_essence');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('#c:gems/source')
        .itemIn('ars_nouveau:wilden_horn')
        .itemIn('ars_nouveau:starbuncle_shards')
        .itemIn('minecraft:book')
        .fluidIn('2000x sauce:source_fluid')
        .itemOut('ars_nouveau:conjuration_essence');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('#c:gems/source')
        .itemIn('minecraft:stone_button')
        .itemIn('minecraft:redstone')
        .itemIn('minecraft:clock')
        .fluidIn('2000x sauce:source_fluid')
        .itemOut('ars_nouveau:manipulation_essence');
    event.recipes.modern_industrialization.magic_chicken(32, 200)
        .itemIn('#c:gems/source')
        .itemIn('minecraft:wither_skeleton_skull')
        .itemIn('minecraft:bone_meal')
        .itemIn('minecraft:golden_apple')
        .fluidIn('3000x sauce:source_fluid')
        .itemOut('ars_elemental:anima_essence');

});
