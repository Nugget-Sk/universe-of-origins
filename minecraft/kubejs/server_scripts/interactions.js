ItemEvents.entityInteracted('hand', event => {
    if(event.target.type != 'minecraft:villager') return
    event.player.tell('[Villager]: Apologies, i don\'t have anything to sell at the moment')
    event.cancel()
})
ItemEvents.entityInteracted('minecraft:glass_bottle', event => {
    if(event.target.attributes.DeathStage <= 7) return
    if(event.target.type != 'iceandfire:fire_dragon' && 'iceandfire:ice_dragon' && 'iceandfire:lightning_dragon') return
    attribute.change("DeathStage", +1)
    item.shrink(1)
    if(event.target.type == 'iceandfire:fire_dragon') {
        event.player.giveInHand(Item.of('iceandfire:fire_dragon_blood', {display: {Name:'{"text":"§cFire Dragon Blood"}'}}))
    }
    if(event.target.type == 'iceandfire:ice_dragon') {
        event.player.giveInHand(Item.of('iceandfire:ice_dragon_blood', {display: {Name:'{"text":"§bFrost Dragon Blood"}'}}))
    }
    if(event.target.type == 'iceandfire:lightning_dragon') {
        event.player.giveInHand(Item.of('iceandfire:lightning_dragon_blood', {display: {Name:'{"text":"§dElectric Dragon Blood"}'}}))
    }
    event.cancel()
})
ItemEvents.firstRightClicked("minecraft:glass_bottle", e => {
    let {player, target, item} = e;
    if(target.block.id != 'kubejs:fire_blood') return
    item.shrink(1)
    player.giveInHand('iceandfire:fire_dragon_blood')
})
