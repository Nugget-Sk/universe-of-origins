ServerEvents.recipes(event => {
    // Shaped Recipes
    // Walkie-Talkie
    event.shaped('simpleradio:transceiver', [
        'RIR',
        'ICI',
        'RIR'
    ],
    {
        R: 'minecraft:redstone',
        I: 'minecraft:iron_ingot',
        C: 'techreborn:ruby_gem'
    }).id('kubejs:transceiver_recipe')
    // Pixie jar
    event.shaped(Item.of('iceandfire:pixie_jar_empty', {display: {Name:'{"text":"§fPixie Trap"}'}}), [
        'GSG',
        'G G',
        'GGG'
    ],
    {
        G: 'minecraft:glass',
        S: '#minecraft:wooden_slabs'
    }).id('kubejs:pixie_jar')
    // Radio Smither
    event.shaped(Item.of('simpleradio:radiosmither', 1), [
        '   ',
        ' C ',
        'RIR'
    ],
    {
        R: 'minecraft:cobbled_deepslate',
        I: 'minecraft:iron_block',
        C: 'techreborn:ruby_gem'
    }).id('kubejs:frequency_changer')
    // Globe Recipe
    event.shaped(Item.of('supplementaries:globe', 1), [
        'GGB',
        'GBG',
        ' YY'
    ],
    {
        G: '#chipped:green_wool',
        B: '#chipped:blue_wool',
        Y: 'techreborn:gold_cable'
    }).id('kubejs:globe')
    // Tuff recipe
    event.shaped(Item.of('minecraft:tuff', 4), [
        'RI',
        'IR'
    ],
    {
        R: '#chipped:diorite',
        I: '#chipped:andesite',
    }).id('kubejs:tuff_making')
    // Turtle Helmet with shulker shells
    event.shaped('minecraft:turtle_helmet', [
        '   ',
        'CCC',
        'C C'
    ],
    {
        C: 'minecraft:shulker_shell'
    }).id('kubejs:turtle_helmet')
    //Shapeless Recipes
    // Flint
    event.shapeless(
        Item.of('minecraft:flint', 2), // arg 1: output
                    [
                        'minecraft:gravel',
                        'minecraft:gravel', 	       // arg 2: the array of inputs
                        'minecraft:gravel'
                    ]
    )
    // Wood
    event.shapeless(
        Item.of('minecraft:oak_wood', 4),
                    [
                        'minecraft:oak_log',
                        'minecraft:oak_log',
                        'minecraft:oak_log',
                        'minecraft:oak_log'
                    ]
    )
    // Dragon Meal
    event.shapeless(
        Item.of('iceandfire:dragon_meal', 1),
                    [
                        'minecraft:bone',
                        '#iceandfire:dragon_food_meat',
                        '#iceandfire:dragon_food_meat',
                        'minecraft:bone'
                    ]
    )
    // Globe pattern
    event.shapeless(
        Item.of('minecraft:globe_banner_pattern', 1),
                    [
                        'supplementaries:globe',
                        'minecraft:paper'
                    ]
    )
    // Bubble Blower patch
    event.shapeless(
        Item.of('supplementaries:bubble_blower', {Damage: 0}).withCount(1),
                    [
                        Item.of('supplementaries:bubble_blower', {Damage: 250}),
                        'supplementaries:soap'
                    ]
    )
    // Dragon scales conversion fire
    event.shapeless(
        Item.of('iceandfire:dragonscales_red', 1),
                    [
                        'iceandfire:shiny_scales',
                        Item.of('#iceandfire:scales/dragon/fire', 4)
                    ]
    )
    event.shapeless(
        Item.of('iceandfire:dragonscales_green', 1),
                    [
                        'iceandfire:shiny_scales',
                        Item.of('#iceandfire:scales/dragon/fire', 4)
                    ]
    )
    event.shapeless(
        Item.of('iceandfire:dragonscales_bronze', 1),
                    [
                        'iceandfire:shiny_scales',
                        Item.of('#iceandfire:scales/dragon/fire', 4)
                    ]
    )
    event.shapeless(
        Item.of('iceandfire:dragonscales_gray', 1),
                    [
                        'iceandfire:shiny_scales',
                        Item.of('#iceandfire:scales/dragon/fire', 4)
                    ]
    )
    // Dragon scales conversion ice
    event.shapeless(
        Item.of('iceandfire:dragonscales_blue', 1),
                    [
                        'iceandfire:shiny_scales',
                        Item.of('#iceandfire:scales/dragon/ice', 4)
                    ]
    )
    event.shapeless(
        Item.of('iceandfire:dragonscales_white', 1),
                    [
                        'iceandfire:shiny_scales',
                        Item.of('#iceandfire:scales/dragon/ice', 4)
                    ]
    )
    event.shapeless(
        Item.of('iceandfire:dragonscales_sapphire', 1),
                    [
                        'iceandfire:shiny_scales',
                        Item.of('#iceandfire:scales/dragon/ice', 4)
                    ]
    )
    event.shapeless(
        Item.of('iceandfire:dragonscales_silver', 1),
                    [
                        'iceandfire:shiny_scales',
                        Item.of('#iceandfire:scales/dragon/ice', 4)
                    ]
    )
    // Dragon scales conversion lightning
    event.shapeless(
        Item.of('iceandfire:dragonscales_electric', 1),
                    [
                        'iceandfire:shiny_scales',
                        Item.of('#iceandfire:scales/dragon/lightning', 4)
                    ]
    )
    event.shapeless(
        Item.of('iceandfire:dragonscales_amethyst', 1),
                    [
                        'iceandfire:shiny_scales',
                        Item.of('#iceandfire:scales/dragon/lightning', 4)
                    ]
    )
    event.shapeless(
        Item.of('iceandfire:dragonscales_copper', 1),
                    [
                        'iceandfire:shiny_scales',
                        Item.of('#iceandfire:scales/dragon/lightning', 4)
                    ]
    )
    event.shapeless(
        Item.of('iceandfire:dragonscales_black', 1),
                    [
                        'iceandfire:shiny_scales',
                        Item.of('#iceandfire:scales/dragon/lightning', 4)
                    ]
    )
    // Furnace & Blasting Recipes
    // Silver Ingot
    event.blasting('iceandfire:silver_ingot', 'techreborn:raw_silver',  2.0, 100)
    event.smelting('iceandfire:silver_ingot', 'techreborn:raw_silver',  2.0,  200)
    // Zinc Block Smelting
    event.blasting('create:zinc_block', 'create:raw_zinc_block',  2.0, 900)
    event.smelting('create:zinc_block', 'create:raw_zinc_block',  2.0,  1800)
    // Smithing Recipes
    event.smithing(
        Item.of('arsenal:scythe', {}),
        'minecraft:netherite_upgrade_smithing_template', // Template
        'weapons_expanded:diamond_scythe', // Item for upgrading
        'minecraft:netherite_ingot'  // item used for upgrading
    )
    event.smithing(
        Item.of('arsenal:anchorblade', {}),
        'minecraft:netherite_upgrade_smithing_template',
        'iceandfire:tide_trident',
        'minecraft:netherite_ingot'
    )
    event.smithing(
        Item.of('iceandfire:tide_trident', {}),
        'minecraft:netherite_upgrade_smithing_template',
        'minecraft:trident',
        'minecraft:diamond'
    )
    event.smithing(
        'minecraft:netherite_ingot',
        '#iceandfire:dragon_hearts',
        '#iceandfire:scales/dragon',
        '#iceandfire:scales/sea_serpent'
    )
    // Enchanting Table
    event.shaped('minecraft:enchanting_table', [
        ' F ',
        'DBD',
        'BBB'
    ],
    {
        D: 'techreborn:diamond_plate',
        B: 'create:sturdy_sheet',
        F: 'create:filter'
    }).id('kubejs:enchantment')
    // Bloodied Bone Swords
    // Fire
    event.custom({
        type: 'create:filling',
        ingredients: [
        {
            item: "iceandfire:dragonbone_sword"
        },
        {
            type: "fluid_stack",
            amount: 250,
            fluid: "kubejs:fire_dragon_blood"
        }
        ],
        results: [
            {
                item: "iceandfire:dragonbone_sword_fire",
                nbt: {
                    "display": {
                        "Name": '{"text":"§cFiery Dragon Sword"}'
                    }
                }
            }
        ]
    })
    // Frost
    event.custom({
        type: 'create:filling',
        ingredients: [
        {
            item: "iceandfire:dragonbone_sword"
        },
        {
            type: "fluid_stack",
            amount: 250,
            fluid: "kubejs:frost_dragon_blood"
        }
        ],
        results: [
            {
                item: "iceandfire:dragonbone_sword_ice",
                nbt: {
                    "display": {
                        "Name": '{"text":"§bFrost Dragon Sword"}'
                    }
                }
            }
        ]
    })
    // Electric
    event.custom({
        type: 'create:filling',
        ingredients: [
        {
            item: "iceandfire:dragonbone_sword"
        },
        {
            type: "fluid_stack",
            amount: 250,
            fluid: "kubejs:electric_dragon_blood"
        }
        ],
        results: [
            {
                item: "iceandfire:dragonbone_sword_lightning",
                nbt: {
                    "display": {
                        "Name": '{"text":"§dElectric Dragon Sword"}'
                    }
                }
            }
        ]
    })
    // Fire Dragon Blood
    event.custom({
        type: 'create:filling',
        ingredients: [
        {
            item: "minecraft:glass_bottle"
        },
        {
            type: "fluid_stack",
            amount: 250,
            fluid: "kubejs:fire_dragon_blood"
        }
        ],
        results: [
            {
                item: "iceandfire:fire_dragon_blood",
                nbt: {
                    "display": {
                        "Name": '{"text":"§cFire Dragon Blood"}'
                    }
                }
            }
        ]
    })
    event.custom({
        type: 'create:emptying',
        ingredients: [
            {
                item: "iceandfire:fire_dragon_blood"
            }
        ],
        results: [
            {
                type: "fluid_stack",
                amount: 250,
                fluid: "kubejs:fire_dragon_blood"
            },
            {
                item: "minecraft:glass_bottle"
            }
        ]
    })
    // Frost Blood
    event.custom({
        type: 'create:filling',
        ingredients: [
            {
                item: "minecraft:glass_bottle"
            },
            {
                type: "fluid_stack",
                amount: 250,
                fluid: "kubejs:frost_dragon_blood"
            }
        ],
        results: [
            {
                item: "iceandfire:ice_dragon_blood",
                nbt: {
                    "display": {
                        "Name": '{"text":"§bFrost Dragon Blood"}'
                    }
                }
            }
        ]
    })
    event.custom({
        type: 'create:emptying',
        ingredients: [
            {
                item: "iceandfire:ice_dragon_blood"
            }
        ],
        results: [
            {
                type: "fluid_stack",
                amount: 250,
                fluid: "kubejs:frost_dragon_blood"
            },
            {
                item: "minecraft:glass_bottle"
            }
        ]
    })
    // Electric Blood
    event.custom({
        type: 'create:filling',
        ingredients: [
            {
                item: "minecraft:glass_bottle"
            },
            {
                type: "fluid_stack",
                amount: 250,
                fluid: "kubejs:electric_dragon_blood"
            }
        ],
        results: [
            {
                item: 'iceandfire:lightning_dragon_blood', 
                nbt: {
                    "display": {
                        "Name": '{"text":"§dElectric Dragon Blood"}'
                    }
                }
            }
        ]
    })
    event.custom({
        type: 'create:emptying',
        ingredients: [
            {
                item: "iceandfire:lightning_dragon_blood"
            }
        ],
        results: [
        {
            type: "fluid_stack",
            amount: 250,
            fluid: "kubejs:electric_dragon_blood"
        },
        {
            item: "minecraft:glass_bottle"
        }
        ]
    })
    // Diamond Plates
    event.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            { item: 'minecraft:diamond'},
            { tag: 'iceandfire:scales/dragon/fire'}
        ],
        results: [{item: 'techreborn:diamond_plate'}]
    })
    // Wither Bone
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: "minecraft:coal"
            },
            {
                item: "minecraft:bone"
            }
        ],
        results: [
            {
                item: "iceandfire:witherbone"
            }
        ]
    })
    // Draco Steel Items
    // Fire Draco Steel
    // Ingots
    event.custom({
        type: 'create:filling',
        ingredients: [
            {
                item: "iceandfire:fire_dragon_blood"
            },
            {
                type: "fluid_stack",
                amount: 250,
                fluid: "kubejs:fire_dragon_blood"
            }
        ],
        results: [
            {
                item: 'iceandfire:dragonsteel_fire_ingot', 
                nbt: {
                    "display": {
                        "Name": '{"text":"§cFire Dracosteel Ingot"}'
                    }
                }
            }
        ]
    })
    // Boots
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_fire_ingot'
            }
        },
        pattern: [
            'A A',
            'A A',
            '   '
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_fire_boots',
            nbt: {
                "display": {
                    "Name": '{"text":"§cFire Dracosteel Boots "}'
                }
            }
        },
        show_notification: false
    })
    // Leggings
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_fire_ingot'
            },
            C: {
                item: 'iceandfire:dragonforge_fire_input'
            }
        },
        pattern: [
            'AAA',
            'A A',
            'C C'
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_fire_leggings',
            nbt: {
                "display": {
                    "Name": '{"text":"§cFire Dracosteel Leggings"}'
                }
            }
        },
        show_notification: false
    })
    // Chestplate
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_fire_ingot'
            },
            C: {
                item: 'iceandfire:dragonforge_fire_core_disabled'
            }
        },
        pattern: [
            'A A',
            'ACA',
            'AAA'
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_fire_chestplate',
            nbt: {
                "display": {
                    "Name": '{"text":"§cFire Dracosteel Chestplate"}'
                }
            }
        },
        show_notification: false
    })
    // Helmet
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_fire_ingot'
            }
        },
        pattern: [
            'AAA',
            'A A',
            '   '
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_fire_helmet',
            nbt: {
                "display": {
                    "Name": '{"text":"§cFire Dracosteel Helmet"}'
                }
            }
        },
        show_notification: false
    })
    // Sword
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_fire_ingot'
            },
            C: {
                item: 'minecraft:netherite_ingot'
            }
        },
        pattern: [
            ' A ',
            ' A ',
            ' C '
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_fire_sword',
            nbt: {
                "display": {
                    "Name": '{"text":"§cFire Dracosteel Sword"}'
                }
            }
        },
        show_notification: false
    })
    // Axe
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_fire_ingot'
            },
            C: {
                item: 'minecraft:netherite_ingot'
            }
        },
        pattern: [
            'AA ',
            'AC ',
            ' C '
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_fire_axe',
            nbt: {
                "display": {
                    "Name": '{"text":"§cFire Dracosteel Axe"}'
                }
            }
        },
        show_notification: false
    })
    // Pickaxe
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_fire_ingot'
            },
            C: {
                item: 'minecraft:netherite_ingot'
            }
        },
        pattern: [
            'AAA',
            ' C ',
            ' C '
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_fire_pickaxe',
            nbt: {
                "display": {
                    "Name": '{"text":"§cFire Dracosteel Pickaxe"}'
                }
            }
        },
        show_notification: false
    })
    // Shovel
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_fire_ingot'
            },
            C: {
                item: 'minecraft:netherite_ingot'
            }
        },
        pattern: [
            ' A ',
            ' C ',
            ' C '
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_fire_shovel',
            nbt: {
                "display": {
                    "Name": '{"text":"§cFire Dracosteel Shovel"}'
                }
            }
        },
        show_notification: false
    })
    // Scythe
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_fire_ingot'
            },
            C: {
                item: 'minecraft:netherite_ingot'
            }
        },
        pattern: [
            'AA ',
            ' C ',
            ' C '
        ],
        result: {
            count: 1,
            item: 'weapons_expanded:netherite_scythe',
            nbt: {
                "display": {
                    "Name": '{"text":"§cFire Dracosteel Scythe"}'
                }
            }
        },
        show_notification: false
    })
    // Frost Draco Steell
    // Ingots
    event.custom({
        type: 'create:filling',
        ingredients: [
            {
                item: "iceandfire:ice_dragon_blood"
            },
            {
                type: "fluid_stack",
                amount: 250,
                fluid: "kubejs:frost_dragon_blood"
            }
        ],
        results: [
            {
                item: 'iceandfire:dragonsteel_ice_ingot', 
                nbt: {
                    "display": {
                        "Name": '{"text":"§bFrost Dracosteel Ingot"}'
                    }
                }
            }
        ]
    })
    // Boots
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_ice_ingot'
            }
        },
        pattern: [
            'A A',
            'A A',
            '   '
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_ice_boots',
            nbt: {
                "display": {
                    "Name": '{"text":"§bFrost Dracosteel Boots"}'
                }
            }
        },
        show_notification: false
    })
    // Leggings
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_ice_ingot'
            },
            C: {
                item: 'iceandfire:dragonforge_ice_input'
            }
        },
        pattern: [
            'AAA',
            'A A',
            'C C'
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_ice_leggings',
            nbt: {
                "display": {
                    "Name": '{"text":"§bFrost Dracosteel Leggings"}'
                }
            }
        },
        show_notification: false
    })
    // Chestplate
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_ice_ingot'
            },
            C: {
                item: 'iceandfire:dragonforge_ice_core_disabled'
            }
        },
        pattern: [
            'A A',
            'ACA',
            'AAA'
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_ice_chestplate',
            nbt: {
                "display": {
                    "Name": '{"text":"§bFrost Dracosteel Chestplate"}'
                }
            }
        },
        show_notification: false
    })
    // Helmet
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_ice_ingot'
            }
        },
        pattern: [
            'AAA',
            'A A',
            '   '
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_ice_helmet',
            nbt: {
                "display": {
                    "Name": '{"text":"§bFrost Dracosteel Helmet"}'
                }
            }
        },
        show_notification: false
    })
    // Sword
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_ice_ingot'
            },
            C: {
                item: 'minecraft:netherite_ingot'
            }
        },
        pattern: [
            ' A ',
            ' A ',
            ' C '
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_ice_sword',
            nbt: {
                "display": {
                    "Name": '{"text":"§bFrost Dracosteel Sword"}'
                }
            }
        },
        show_notification: false
    })
    // Axe
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_ice_ingot'
            },
            C: {
                item: 'minecraft:netherite_ingot'
            }
        },
        pattern: [
            'AA ',
            'AC ',
            ' C '
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_ice_axe',
            nbt: {
                "display": {
                    "Name": '{"text":"§bFrost Dracosteel Axe"}'
                }
            }
        },
        show_notification: false
    })
    // Pickaxe
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_ice_ingot'
            },
            C: {
                item: 'minecraft:netherite_ingot'
            }
        },
        pattern: [
            'AAA',
            ' C ',
            ' C '
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_ice_pickaxe',
            nbt: {
                "display": {
                    "Name": '{"text":"§bFrost Dracosteel Pickaxe"}'
                }
            }
        },
        show_notification: false
    })
    // Shovel
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_ice_ingot'
            },
            C: {
                item: 'minecraft:netherite_ingot'
            }
        },
        pattern: [
            ' A ',
            ' C ',
            ' C '
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_ice_shovel',
            nbt: {
                "display": {
                    "Name": '{"text":"§bFrost Dracosteel Shovel"}'
                }
            }
        },
        show_notification: false
    })
    // Scythe
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_ice_ingot'
            },
            C: {
                item: 'minecraft:netherite_ingot'
            }
        },
        pattern: [
            'AA ',
            ' C ',
            ' C '
        ],
        result: {
            count: 1,
            item: 'weapons_expanded:netherite_scythe',
            nbt: {
                "display": {
                    "Name": '{"text":"§bFrost Dracosteel Scythe"}'
                }
            }
        },
        show_notification: false
    })
    // Lightning Draco Steel
    // Ingots
    event.custom({
        type: 'create:filling',
        ingredients: [
            {
                item: "iceandfire:lightning_dragon_blood"
            },
            {
                type: "fluid_stack",
                amount: 250,
                fluid: "kubejs:electric_dragon_blood"
            }
        ],
        results: [
            {
                item: 'iceandfire:dragonsteel_lightning_ingot', 
                nbt: {
                    "display": {
                        "Name": '{"text":"§dElectric Dracosteel Ingot"}'
                    }
                }
            }
        ]
    })
    // Boots
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_lightning_ingot'
            }
        },
        pattern: [
            'A A',
            'A A',
            '   '
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_lightning_boots',
            nbt: {
                "display": {
                    "Name": '{"text":"§dElectric Dracosteel Boots"}'
                }
            }
        },
        show_notification: false
    })
    // Leggings
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_lightning_ingot'
            },
            C: {
                item: 'iceandfire:dragonforge_lightning_input'
            }
        },
        pattern: [
            'AAA',
            'A A',
            'C C'
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_lightning_leggings',
            nbt: {
                "display": {
                    "Name": '{"text":"§dElectric Dracosteel Leggings"}'
                }
            }
        },
        show_notification: false
    })
    // Chestplate
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_lightning_ingot'
            },
            C: {
                item: 'iceandfire:dragonforge_lightning_core_disabled'
            }
        },
        pattern: [
            'A A',
            'ACA',
            'AAA'
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_lightning_chestplate',
            nbt: {
                "display": {
                    "Name": '{"text":"§dElectric Dracosteel Chestplate"}'
                }
            }
        },
        show_notification: false
    })
    // Helmet
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_lightning_ingot'
            }
        },
        pattern: [
            'AAA',
            'A A',
            '   '
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_lightning_helmet',
            nbt: {
                "display": {
                    "Name": '{"text":"§dElectric Dracosteel Helmet"}'
                }
            }
        },
        show_notification: false
    })
    // Sword
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_lightning_ingot'
            },
            C: {
                item: 'minecraft:netherite_ingot'
            }
        },
        pattern: [
            ' A ',
            ' A ',
            ' C '
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_lightning_sword',
            nbt: {
                "display": {
                    "Name": '{"text":"§dElectric Dracosteel Sword"}'
                }
            }
        },
        show_notification: false
    })
    // Axe
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_lightning_ingot'
            },
            C: {
                item: 'minecraft:netherite_ingot'
            }
        },
        pattern: [
            'AA ',
            'AC ',
            ' C '
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_lightning_axe',
            nbt: {
                "display": {
                    "Name": '{"text":"§dElectric Dracosteel Axe"}'
                }
            }
        },
        show_notification: false
    })
    // Pickaxe
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_lightning_ingot'
            },
            C: {
                item: 'minecraft:netherite_ingot'
            }
        },
        pattern: [
            'AAA',
            ' C ',
            ' C '
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_lightning_pickaxe',
            nbt: {
                "display": {
                    "Name": '{"text":"§dElectric Dracosteel Pickaxe"}'
                }
            }
        },
        show_notification: false
    })
    // Shovel
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_lightning_ingot'
            },
            C: {
                item: 'minecraft:netherite_ingot'
            }
        },
        pattern: [
            ' A ',
            ' C ',
            ' C '
        ],
        result: {
            count: 1,
            item: 'iceandfire:dragonsteel_lightning_shovel',
            nbt: {
                "display": {
                    "Name": '{"text":"§dElectric Dracosteel Shovel"}'
                }
            }
        },
        show_notification: false
    })
    // Scythe
    event.custom({
        type: 'create:mechanical_crafting',
        acept_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'iceandfire:dragonsteel_lightning_ingot'
            },
            C: {
                item: 'minecraft:netherite_ingot'
            }
        },
        pattern: [
            'AA ',
            ' C ',
            ' C '
        ],
        result: {
            count: 1,
            item: 'weapons_expanded:netherite_scythe',
            nbt: {
                "display": {
                    "Name": '{"text":"§dElectric Dracosteel Scythe"}'
                }
            }
        },
        show_notification: false
    })
    // Replaceing Outputs
    event.replaceOutput({}, 'techreborn:silver_ingot', 'iceandfire:silver_ingot')
    event.replaceOutput({}, 'techreborn:silver_block', 'iceandfire:silver_block')
    event.replaceOutput({}, 'techreborn:zinc_ingot', 'create:zinc_ingot')
    event.replaceOutput({}, 'techreborn:zinc_block', 'create:zinc_block')
    event.replaceOutput({}, 'techreborn:electrum_ingot', 'createaddition:electrum_ingot')
    event.replaceOutput({}, 'techreborn:electrum_block', 'createaddition:electrum_block')
    event.replaceOutput({}, 'techreborn:brass_ingot', 'create:brass_ingot')
    event.replaceOutput({}, 'techreborn:brass_block', 'create:brass_block')
    event.replaceOutput({}, 'create:copper_nugget', 'techreborn:copper_nugget')
    event.replaceOutput({}, 'techreborn:obsidian_plate', 'create:sturdy_sheet')
    // Removing Recipes
    // By ID
    event.remove({ id: 'minecraft:enchanting_table'})
    event.remove({ id: 'iceandfire:jar_empty'})
    event.remove({ id: 'simpleradio:transceiver' })
    event.remove({ id: 'simpleradio:radiosmither'})
    event.remove({ id: 'minecraft:oak_wood'})
    event.remove({ id: 'iceandfire:dragon_meal'})
    event.remove({ id: 'supplementaries:bubble_blower_charge_display'})
    event.remove({ id: 'estrogen:cookie_jar'})
    event.remove({ id: 'iceandfire:dragonbone_sword_fire'})
    event.remove({ id: 'iceandfire:dragonbone_sword_ice'})
    event.remove({ id: 'iceandfire:dragonbone_sword_lightning'})
    // By Input
    event.remove({ input: 'iceandfire:dragonsteel_ice_ingot'})
    event.remove({ input: 'iceandfire:dragonsteel_lightning_ingot'})
    event.remove({ input: 'iceandfire:dragonsteel_fire_ingot'})
    // By Output
    event.remove({ output: 'iceandfire:dragonbone_sword_lightning'})
    event.remove({ output: 'iceandfire:dragonsteel_fire_ingot'})
    event.remove({ output: 'iceandfire:dragonsteel_ice_ingot'})
    event.remove({ output: 'iceandfire:dragonsteel_lightning_ingot'})
    event.remove({ output: 'weapons_expanded:netherite_scythe'})
    event.remove({ output: 'iceandfire:copper_nugget'})
    event.remove({ output: 'techreborn:silver_helmet'})
    event.remove({ output: 'techreborn:silver_chestplate'})
    event.remove({ output: 'techreborn:silver_leggings'})
    event.remove({ output: 'techreborn:silver_boots'})
    event.remove({ output: 'minecraft:shulker_box'})
    event.remove({ output: 'sophisticatedstorage:shulker_box'})
    event.remove({ output: 'sophisticatedstorage:copper_shulker_box'})
    event.remove({ output: 'sophisticatedstorage:iron_shulker_box'})
    event.remove({ output: 'sophisticatedstorage:gold_shulker_box'})
    event.remove({ output: 'sophisticatedstorage:diamond_shulker_box'})
    event.remove({ output: 'sophisticatedstorage:netherite_shulker_box'})    
})
