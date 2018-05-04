
exports.seed = function(knex, Promise) {
  return knex('comments').del()
    .then(function () {
      return knex('comments').insert([
        {
          id: 1, 
          title: 'Nice place', 
          body: 'nice upstairs area to work in with couches, etc. Great spot to grab food as well! ', 
          location_id: 3
        },{
          id: 2, 
          title: 'Sam Jones', 
          body: 'great open area with free wifi, tons of leather couches and places to sit. Nice bar as well!', 
          location_id: 2
        },{
          id: 3, 
          title: 'Cozy spot', 
          body: 'Cool building, lots of glass and steel. People are pretty friendly.', 
          location_id: 1
        },{
          id: 4, 
          title: 'Saul', 
          body: 'if you want some strong kombucha try the high country. Good Wifi and outlets.', 
          location_id: 4
        },{
          id: 5, 
          title: 'Awesome', 
          body: 'great customer service, first time having a neat burrito.', 
          location_id: 5
        },{
          id: 6, 
          title: 'beautiful', 
          body: 'amazing spot to hang out and get some work done. good quality wifi.', 
          location_id: 6
        },{
          id: 7, 
          title: 'so good', 
          body: 'check out the cake and shake special. get both in chocolate!', 
          location_id: 7
        },{
          id: 8, 
          title: 'favorite spot', 
          body: 'great coffee, free wifi, no attitudes. it doesnt get much better than that.', 
          location_id: 8
        },{
          id: 9, 
          title: 'no outlets!', 
          body: 'free wifi, but NO power outlets. Boooo.', 
          location_id: 9
        },{
          id: 10, 
          title: 'Rob', 
          body: 'location is a bit out of the way, however they do have a free game room, which is rad.', 
          location_id: 10
        }
      ]);
    }).then(() => {
      return knex.raw('ALTER SEQUENCE comments_id_seq RESTART WITH 11;')
    });
};
