ServerEvents.recipes(event => {
    event.shaped(
        Item.of('travelertoolbelt:iron_belt', '1'),
        [
            'A A',
            'ABA'
        ],
        {
            A: 'farmersdelight:rope',
            B: 'minecraft:iron_ingot'
        }
    )
})