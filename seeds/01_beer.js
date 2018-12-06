
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  return knex
  .raw('DELETE FROM beer; ALTER SEQUENCE beer_id_seq RESTART WITH 11;')
  .then(function() {
      // Inserts seed entries
      return knex('beer').insert([
        {
          id: 1,
          name: "Avery Brewing Co. Fortuna",
          imageUrl: "https://cdn.pastemagazine.com/www/articles/assets_c/2015/06/avery_fortuna_web%20(Custom)-thumb-220x328-157545.jpg",
          abv: 8.1,
          review: "The only tequila barrel-aged beer in the tasting was unsurprisingly one of the most distinct. With the salinity and spicy, somewhat herbaceous quality, it has more in common with an overgrown gose than one might initially expect—at least until the woody flavors assert themselves more strongly. It’s not particularly boozy, though, nor so in-your-face as we’ve tasted in some other tequila-barreled brews, which might also be attributable to an ABV slightly more modest than many barrel-aged Avery offerings. It seems like what they were going for was the fusion of a salt-rimmed margarita with an American wild ale, which is a pretty inspired pairing when all is said and done. There’s a nice balance between sweet/sour lime citrus, salt, and most prominently, that spicy, agave-infused wood."
        },
        {
          id: 2,
          name: "Cerebral Brewing BBA Here Be Monsters",
          imageUrl: "https://cdn.pastemagazine.com/www/articles/assets_c/2017/02/cerebral%20here%20be%20monsters%20(Custom)-thumb-220x258-575026.jpg",
          abv: 12,
          review: "This is exactly the kind of classical barrel-aged imperial stout in terms of profile that could score well in just about any competition, and afterward drinkers would look at the label and say “Who is this? I figured this was Bourbon County Stout.” It’s just dead in the middle of the bullseye for what you’d expect to get if you saw “BBA stout” on a label. A big nose of whiskey fumes and charred oak suggests a stout redolent in booze, followed by enticing aromas of chocolate and toffee. Big and full-bodied, Here Be Monsters has the type of heft you’d expect from the name, with an assertive, whiskey-forward palette of flavors that is significantly better in execution than some of the other stouts with liquor-soaked profiles. Still, this is a stout for drinkers who like to leave no doubt that they’re drinking something that came out of a bourbon barrel. Big and bold, but comfortably familiar."
        },
        {
          id: 3,
          name: "Crooked Stave Origins",
          imageUrl: "https://cdn.pastemagazine.com/www/articles/assets_c/2015/06/crookedstave_burgandysour%20(Custom)-thumb-220x328-157563.jpg",
          abv: 6.5,
          review: "This beer essentially seems like a Flanders red that has gotten the oak barrel treatment along with a healthy dose of souring bacteria, and the result is a beer that has been transformed into a heady, complex experience. The wood comes through very strongly on this one—a bit too much for a few of the tasters, but highly praised by others. Strongly tart and full of ripe berry flavors, the wood gives it quite the assertive sour twang—coupled with the character of the underlying beer, you’d really think that these were red wine barrels rather than just plain oak. The final product is indeed winey, with a tannic dryness and leathery aromas to pair with the dark, dried fruitiness. If you like a very oaky cabernet sauvignon, then Origins might have a lot of the flavors you’re looking for."
        },
        {
          id: 4,
          name: "Dry Dock Brewing Co. Bligh’s Barleywine Ale ",
          imageUrl: "https://cdn.pastemagazine.com/www/articles/assets_c/2016/01/dry%20dock%20barleywine-thumb-220x359-418479.jpg",
          abv: 10,
          review: "We typically see a good degree of variation among the top 5 when we do these blind tastings, but when it came to barleywines, the tasters simply couldn’t deny how tasty the top tier of barrel-aged offerings became. That’s not to say there weren’t some lesser bourbon barrel barleywines here, but the next five were on another level. The Dry Dock offering is big, burly, syrupy and full-bodied, with butterscotch and vinous flavors that definitely evoked brandy as well as whiskey. A boozy after-dinner digestif of a beer and a sipper, with “the body of a pro wrestler,” according to one score sheet. Another sheet favorably compares its malt complexity to the classic JW Lees English barleywine. This is a good example of a barrel-aged beer that certain drinkers would find “too rich,” but others would go to any length to acquire. We’re in the second camp."
        },
        {
          id: 5,
          name: "Epic Brewing Co. Big Bad Baptista",
          imageUrl: "https://cdn.pastemagazine.com/www/articles/assets_c/2017/02/epic%20big%20bad%20baptista%20(Custom)-thumb-220x360-575052.jpg",
          abv: 12.2,
          review: "Mexican mocha, straight up. That’s what Big Bad Baptista is, and it’s not pretending to be anything else. This is not beer aspiring toward some kind of subtle, artistic perfection; it’s a people pleaser, pure and simple. It reminds us of a barrel-aged version of Perennial Artisan Ale’s well-liked Abraxas stout, and what it has in common with that beer is how it takes a now-common set of complementary adjuncts (cinnamon, coffee, vanilla, cacao nibs) and simply uses them in a more harmonious way than some of the others. Residual sweetness is moderate, but stops short of being saccharine, and none of the tasters accused the beer of some note of artificiality, which is usually the factor that might bring such a flamboyantly flavored stout down a notch. It’s just a really awesome dessert beer, and likely on well suited to churro dunking. You don’t have to overanalyze it—where the other Baptists are symphonies, this one is a perfectly crafted power pop song."
        },
        {
          id: 6,
          name: "Fiction Beer Co. BBA Malice & Darkness",
          imageUrl: "https://cdn.pastemagazine.com/www/articles/assets_c/2017/04/fiction%20malice%20and%20darkness%20retouch-thumb-220x345-601026.jpg",
          abv: 14,
          review: "One of the ways it’s easy to know that Denver is a great beer city is the fact that in any given tasting, they usually have a few representatives in the ranked portion … but it’s often completely different breweries. Which is to say, seemingly any given Denver brewery is capable of making great beers that perform well in blind tastings, including the literary themed Fiction Beer Co., which I discovered the last time I visited the city in Sept. to profile several up-and-coming breweries. This inky stout is packed with roast and coffee on the nose, with the suggestion of sweetened espresso and deeply caramelized sugar. Dark chocolate is big on the palate, with a touch of smoke and a slightly vinous, winey element of dark fruit and oak. The degree of coffee character is particularly impressive, given that this stout doesn’t actually have a coffee addition as far as we can tell. Booze is impressively well hidden, especially for 14% ABV. This beer is packing a whole lot of character, but no element is ever out of balance."
        },
        {
          id: 7,
          name: "Funkwerks Raspberry Provincal",
          imageUrl: "https://cdn.pastemagazine.com/www/articles/assets_c/2015/07/funkwerks_raspberryprovincial-thumb-220x293-161163.jpg",
          abv: 4.2,
          review: "A light, zippy and surprisingly refreshing raspberry wild ale from Colorado farmhouse standouts Funkwerks, who have joined our tastings for the first time. Tartness is moderate, which is probably appropriate for the lower ABV, and the raspberry flavors are authentic and nicely integrated, with no impression of candy or syrupyness. A little bit of malt sneaks through as well, but this beer is for the most part an unassuming sour that provides some nice bang for its ABV via bright fruit flavors. Nicely dry and elegant. It would be interesting to see how this would have stacked up against some of the heavy-hitting raspberry beers in our recent sours ranking."
        },
        {
          id: 8,
          name: "Great Divide Fresh Hop Pale Ale",
          imageUrl: "https://cdn.pastemagazine.com/www/articles/assets_c/2016/02/great%20divide%20fresh%20hop%20(Custom)-thumb-220x341-428656.jpg",
          abv: 6.1,
          review: "Given that this is a harvest beer, it was impossible to get it at peak freshness for a February pale ale tasting, but we weren’t about to leave it off the list when we saw it on the store shelf. And rightfully so, because it actually held up quite well. It’s always been a beer that boasts fascinating, unusual hop flavors each year, much less “citrus and fruit,” and much more grassy, spicy and herbal, with complex and exotic notes that remind one of thyme or sage—“dry and spicy, with a nice grassy bite,” wrote one taster. Balanced by toasty malt that almost seems English in character, it definitely stands out in a group of pale ales that are more about bright fruit flavors. A fascinating outlier."
        },
        {
          id: 9,
          name: "Left Hand St. Vrain",
          imageUrl: "https://cdn.pastemagazine.com/www/articles/assets_c/2017/03/left%20hand%20st%20vrain%20(Custom)-thumb-220x362-582164.jpg",
          abv: 9,
          review: "Now this definitely was a surprise. If you had asked me to guess where the top-ranking American tripel was going to come from, I probably would have volunteered Allagash, or Ommegang, or a brewery that specializes in abbey ales specifically. But nope—it’s milk stout mavens Left Hand that came out of left field with this great, severely underrated Belgian tripel. Bright and zippy, with prickling carbonation, it presents a very nice citrus note on the nose, followed by tons of bready, yeasty malt. “Smells like a tripel,” wrote one taster, noting the prominent banana ester and accompanying clovey spice. Like many of the tripels, this one is fruity on the palate, but it has a bit more dimension. The requisite banana is there, but there’s also a very nice stone fruit note, like peach or apricot, and more bready malt complexity. Easy drinking but flavorful, with imperceptible alcohol, this is just a beautifully constructed beer that should get much more attention. Apparently we should drink more Belgian styles from Left Hand?"
        },
        {
          id: 10,
          name: "New Belgium La Folie",
          imageUrl: "https://cdn.pastemagazine.com/www/articles/assets_c/2015/06/newbelgium_lafolie_web%20(Custom)-thumb-220x328-157532.jpg",
          abv: 7,
          review: "New Belgium’s Lips of Faith program has been one of the driving forces behind sour beers being put in the hands of craft beer drinkers nationwide. This is the country’s 4th largest craft brewery, trailing only Yuengling, Boston Beer Co. and Sierra Nevada. Of those, (no offense, BBC) New Belgium is clearly the one identified with sour beer, and as such they’ve helped play tastemaker and introduced countless new drinkers to various tart styles. La Folie is probably the best of their widely available offerings, a moderately tart, almost surprisingly traditional oud bruin that actually falls on the lighter-intensity side of the spectrum in this particular tasting (there’s a LOT of assertive beer on the table). Pleasant, cherry-like fruitiness, a kiss of oak and good balance are what one should expect to find."
        },

      ]);
    });
};
