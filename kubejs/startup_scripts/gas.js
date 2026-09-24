StartupEvents.registry('mekanism:chemical', event => {
    //注册气体（id，颜色，显示的名字）
    event.create('ccb:netherstar_gas').tint(0xf4f7cd).displayName('下界之星');
    event.create('ccb:singularity_gas').tint(0x39013c).displayName('奇点');
    event.create('ccb:annihilation_matter').tint(0x1c0028).displayName('湮灭物质');
});