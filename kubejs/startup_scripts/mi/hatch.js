MIRegistrationEvents.registerCableTiers(event => {
    event.register(
        "ultimate",
        "UV",
        "Ultimate Voltage",
        15333333333333333,
        "extendedcrafting:the_ultimate_block"
    );
});

MIMachineEvents.registerHatches(event => {
    event.energy("ultimate");

    event.fluid(
        "Quantum",
        "quantum",
        "quan_casing",
        2147283647,
    );

    event.parallel("Giga", "giga", "quan_casing", 2100000000);

    event.roostSpeed("Time Crystal", "time_crystal", "time_crystal_casing", 4.0);
    event.roostSpeed("Ultimate", "ultimate", "ultimate_core_casing", 8.0);
    event.roostSpeed("Feijibei", "feijibei", "feijibei_casing", 16.0);
});

ModernMekMachineEvents.registerChemicalHatches(event => {
    event.itemFluidChemical(
        "milk_chicken_steak_ex",
        "Milk Chicken Steak",
        "data_casing",
        64000,
        64000,
        items => items.addSlots(16, 20, 3, 3),
        fluids => fluids.addSlots(80, 20, 2, 2),
        chemicals => chemicals.addSlots(122, 20, 2, 2)
    );
});
