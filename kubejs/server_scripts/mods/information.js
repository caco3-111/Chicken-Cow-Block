RecipeViewerEvents.addInformation("item", event => {
    event.add('chicken_roost:c_oakwood', [
        "当你第一次跳入虚空时，你将会获得它，后续可通过合成获得。"
    ]);
     event.add('chicken_roost:c_feather', [
        "当你杀死一只原版鸡的时候，有概率生成一只羽毛鸡。"
    ]);
    event.add('#ars_nouveau:shady_wizard_fruits', [
        "这些果实可以分别通过对应的空岛构筑之板获得或者选择至高木森林造林之板一次性获得所有果实。"
    ]);
    event.add('ccb:chaotic_space_fragment', [
        "当混沌守卫处于空间塔维度受到龙堆的爆炸伤害时，它会掉落混沌空间碎片。"
    ]);
    event.add('ae2lt:tianshu_supercomputer_controller', [
        "该物品无法制作，只能使用天枢矩阵之板召唤"
    ]);
    event.add('ae2lt:matter_warping_matrix_controller', [
        "该物品无法制作，只能使用天枢矩阵之板召唤"
    ]);
    event.add('data_energistics:trinity_data_core', [
        "该物品无法制作，只能使用三位一体数据核心之板召唤"
    ]);
    event.add('advanced_ae:quantum_core', [
        "该物品无法制作，只能使用超级装配矩阵之板召唤"
    ]);
    event.add('ars_nouveau:ritual_brazier', [
        "潜行空手右键仪式火盆可进入鸡基岩层。在该维度再次潜行空手右键火盆可返回。"
    ]);
    event.add('ccb:nether_roost', [
        "用8个下界鸡窝摆成4×4边框并去掉四角，再向内侧倒入一桶灵魂熔岩，即可开启通往异界的传送门。走进传送门前往异界，在异界同样建造可返回。",
        "使用对应钻头破坏下界鸡窝可获得特殊鸡：蒸汽采矿钻头→光卤石鸡，柴油采矿钻头→钴鸡，电动采矿钻头→精金鸡。"
    ]);
    event.add('chicken_roost:c_carnallite', [
        "使用现代工业化的蒸汽采矿钻头破坏下界鸡窝获得。"
    ]);
    event.add('chicken_roost:c_cobald', [
        "使用现代工业化的柴油采矿钻头破坏下界鸡窝获得。"
    ]);
    event.add('chicken_roost:c_adamantine', [
        "使用扩展工业化的电动采矿钻头破坏下界鸡窝获得。"
    ]);
    event.add(['ccb:eternal_pain_soul', 'mecrh:ender_chicken_spawn_egg'],[
        "Ender Chicken被奥术触媒吸收灵魂时,会掉落该物品"
    ]);
    event.add(['ccb:warm_eon_soul','oritech:wither_crop_block'], [
        "灵魂之花被奥术触媒吸收灵魂时，会掉落该物品"
    ]);
    event.add(['chicken_roost:c_gravel','chicken_roost:c_sand','chicken_roost:c_tnt','mahoutsukai:hammer'], [
        "想要获得这几只鸡，请使用魔法使模组的锤击杀对应的鸡。"
    ]);
    event.add('ccb:unique_meat', [
        "当你受到mek模组激光的伤害时，你将获得它。"
    ]);
      event.add('chicken_roost:c_electric', [
        "若想获得它，你必须使用自然闪电。将它放入ikun工坊可以产电，生产一次产出1000EU（可以吃等级加成和并行仓）。"
    ]);


    global.COW_TRANSMUTE_RULES.forEach(rule => {
        const {item, fluid} = rule;

        const spawnEggId = `fluidsneo:fluid_cow_spawn_egg[fluidsneo:fluid_type="${fluid}"]`;
        const itemName = Item.of(item).getDisplayName().getString() || item;
        const fluidName = Fluid.of(fluid).getDisplayName().getString() || fluid;

        event.add([spawnEggId, item], [
            `使用 §6${itemName}§r 右键普通牛，可将其转化为 §b${fluidName}§r 流体牛。`
        ]);
    });

    global.CHICKEN_TRANSMUTE_RULES.forEach(rule => {
        const {item, outputChicken} = rule;

        const itemName = Item.of(item).getDisplayName().getString() || item;
        const chickenName = Item.of(`chicken_roost:${outputChicken}`).getDisplayName().getString() || outputChicken;

        event.add([`chicken_roost:${outputChicken}`, item], [
            `使用 §6${itemName}§r 右键普通鸡，可将其转化为 §b${chickenName}§r。`
        ]);
    });
});

RecipeViewerEvents.addInformation("fluid", event => {
    global.COW_TRANSMUTE_RULES.forEach(rule => {
        const {item, fluid} = rule;

        const itemName = Item.of(item).getDisplayName().getString() || item;
        const fluidName = Fluid.of(fluid).getDisplayName().getString() || fluid;

        event.add(fluid, [
            `使用 §6${itemName}§r 右键普通牛，可将其转化为 §b${fluidName}§r 流体牛。`
        ]);
    });
});