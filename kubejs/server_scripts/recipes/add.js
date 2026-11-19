ServerEvents.recipes(event => {
    // Modified Tool Belt
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

    // Furnace Recipe (Cobblestone Only)
    event.shaped(
        Item.of('minecraft:furnace', '1'),
        [
            'AAA',
            'A A',
            'AAA'
        ],
        {
            A: 'minecraft:cobblestone'
        }
    )
})