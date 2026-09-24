MITweaksMachineEvents.registerPowerlessMachines(event => {
    event.singleblock("feast_block_serving", "feast_block_serving",
        event.getRecipeType("ccb_core:feast_block_serving"), -1,
        event.progressBar(70, 33, "arrow"),
        2, 4, 0, 0, 0,
        itemSlotPositions => itemSlotPositions.addSlots(36, 35, 1, 2).addSlots(102, 35, 2, 2),
        fluidSlotPositions => {
        },
        "bricks", "feast_block_serving", true, false, true,
        4, true
    )
})
