ServerEvents.recipes(event => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);

    function shard_from_crushing(gem) {
        event.recipes.create.crushing(
            [
                `7x pastel:${gem}_shard`,
                withChance(`pastel:${gem}_shard`, 0.5)

            ],
            `pastel:${gem}_cluster`
        )
        event.recipes.create.crushing(
            [
                `3x pastel:${gem}_shard`,
                withChance(`pastel:${gem}_shard`, 0.5)

            ],
            `pastel:${gem}_block`
        )
        // event.remove({id:`pastel:mod_integration/create_dragonplus/`})
    }

    shard_from_crushing('citrine')
    shard_from_crushing('topaz')


    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    event.recipes.create.finalize();
})