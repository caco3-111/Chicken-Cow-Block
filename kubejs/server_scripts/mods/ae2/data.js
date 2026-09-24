ServerEvents.recipes(event => {
    event.custom({
        type: 'data_energistics:data_reassembler',
        inputs: {
            items: [
                { item: 'ae2:wireless_terminal' },
                { item: 'data_energistics:data_dust', count: 8 },
                { item: 'farmersdelight:rice', count: 2 },
                { item: 'farmersdelight:onion', count: 2 },
                { item: 'farmersdelight:minced_beef' },
                { item: 'farmersdelight:fried_egg' }
            ],
            fluids: [
                { fluid: 'actuallyadditions:refined_canola_oil', amount: 500 }
            ],
            resource: {
                key_type: 'data_energistics:digitalization',
                resource: 'data_energistics:data_flow',
                amount: 100
            }
        },
        outputs: {
            items: [
                { id: 'ccb:terminal_fried_rice' }
            ]
        }
    }).id('ccb:data_reassembler/terminal_fried_rice');

    event.custom({
        type: 'data_energistics:data_reassembler',
        inputs: {
            items: [
                { item: 'minecraft:cow_spawn_egg' },
                { item: 'data_energistics:data_mimetic_field' }
            ],
            fluids: [
                { fluid: 'data_energistics:data_corrosion_liquid', amount: 4000 }
            ],
            resource: {
                key_type: 'data_energistics:digitalization',
                resource: 'data_energistics:data_flow',
                amount: 2400
            }
        },
        outputs: {
            items: [
                {
                    id: 'fluidsneo:fluid_cow_spawn_egg',
                    components: {
                        'fluidsneo:fluid_type': 'data_energistics:data_corrosion_liquid'
                    }
                }
            ]
        }
    }).id('ccb:data_reassembler/data_corrosion_fluid_cow');

    event.custom({
        type: 'data_energistics:data_reassembler',
        inputs: {
            items: [
                { item: 'industrialforegoingsouls:soul_laser_base', count: 64 },
                { item: 'industrialforegoingsouls:soul_surge', count: 64 },
                { item: 'chicken_roost:chicken_essence_tier_9', count: 64 },
                { item: 'projecte:soul_stone' },
                {
                    ingredient: {
                        type: 'neoforge:components',
                        items: 'extendedcrafting:singularity',
                        components: {
                            'extendedcrafting:singularity_id': 'extendedcrafting:divine_soulshard'
                        }
                    },
                    count: 1
                },
                { item: 'oritech:enchantment_catalyst_block' },
                { item: 'sauce:anima_essence', count: 64 },
                { item: 'occultism:trinity_gem' },
                { item: 'megacells:soul_storage_cell_256m' }
            ],
            fluids: [
                { fluid: 'allthemodium:soul_lava', amount: 51200 },
            ],
            resource: {
                key_type: 'soulplied_energistics:soul',
                uhhh_idk: '',
                amount: 12800000
            }
        },
        outputs: {
            items: [
                { id: 'ccb:soul_cry' }
            ]
        }
    }).id('ccb:data_reassembler/soul_cry');

    event.custom({
        type: 'data_energistics:data_reassembler',
        inputs: {
            items: [
                { item: 'ae2lt:electro_chime_crystal' },
                { item: 'ccb_core:natural_lightning_spawner', count: 10 }
            ],
            fluids: [
                { fluid: 'data_energistics:data_corrosion_liquid', amount: 1000 }
            ],
            resource: {
                key_type: 'ae2lt:lightning',
                resource: 'ae2lt:extreme_high_voltage',
                amount: 2048
            }
        },
        outputs: {
            items: [
                { id: 'ae2lt:perfect_electro_chime_crystal' }
            ]
        }
    }).id('ccb:data_reassembler/perfect_electro_chime_crystal');

    event.custom({
        type: 'data_energistics:data_reassembler',
        inputs: {
            items: [
                { item: 'ccb:data_elder' },
                { item: 'data_energistics:me_digital_merged_storage_core_256m', count: 512 },
                { item: 'data_energistics:overlimit_me_digital_pattern_processing_core', count: 512 },
                { item: 'data_energistics:me_digital_storage_core_256m', count: 512 }
            ],
            fluids: [
                { fluid: 'data_energistics:data_corrosion_liquid', amount: 51200 },
                { fluid: 'data_energistics:data_corrosion_liquid', amount: 51200 }
            ],
            resource: {
                key_type: 'data_energistics:digitalization',
                resource: 'data_energistics:data_flow',
                amount: 51200000
            }
        },
        outputs: {
            items: [
                { id: 'ccb:epoch_orb' }
            ]
        }
    }).id('ccb:data_reassembler/epoch_orb');

    event.custom({
        type: 'data_energistics:data_reassembler',
        inputs: {
            items: [
                {
                    ingredient: {
                        type: 'neoforge:components',
                        items: 'extendedcrafting:singularity',
                        components: {
                            'extendedcrafting:singularity_id': 'extendedcrafting:data_residual_crystal'
                        }
                    },
                    count: 10
                },
                {
                    ingredient: {
                        type: 'neoforge:components',
                        items: 'extendedcrafting:singularity',
                        components: {
                            'extendedcrafting:singularity_id': 'extendedcrafting:enhanced_basic_attack'
                        }
                    },
                    count: 1
                }
            ],
            fluids: [
                { fluid: 'data_energistics:data_corrosion_liquid', amount: 51200 }
            ],
            resource: {
                key_type: 'data_energistics:digitalization',
                resource: 'data_energistics:data_flow',
                amount: 51200000
            }
        },
        outputs: {
            items: [
                { id: 'ccb:data_elder' }
            ]
        }
    }).id('ccb:data_reassembler/residual_data_ore');

    event.custom({
        type: 'data_energistics:data_reassembler',
        inputs: {
            items: [
                { item: 'data_energistics:residual_data_ore' }
            ],
            fluids: []
        },
        outputs: {
            resource: {
                key_type: 'data_energistics:manifest_binary',
                resource: 'data_energistics:data',
                amount: 10
            }
        }
    }).id('ccb:data_reassembler/residual_data_ore_to_binary');
});
