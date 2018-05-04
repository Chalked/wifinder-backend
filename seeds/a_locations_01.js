
exports.seed = function(knex, Promise) {
  return knex('locations').del()
    .then(function () {
      return knex('locations').insert([
        {
          id: 1, 
          name: 'Galvanize',
          description: 'A large building that hosts the Galvanize programming school downstairs and many tech businesses on the other floors.',
          coordinates: {
            latitude: 39.7576196,
            longitude: -105.0069694
          },
          address: '1644 Platte Street, Denver'
        },
        {
          id: 2, 
          name: 'Union Station',
          description: 'The main transit hub for downtown Denver.',
          coordinates: {
            latitude: 39.7526509,
            longitude: -105.00168500000001
          },
          address: '1701 Wynkoop Street, Denver'
        },
        {
          id: 3, 
          name: 'Whole Foods',
          description: 'A large natural foods store near Union Station.',
          coordinates: {
            latitude: 39.7546184,
            longitude: -105.00139919999998
          },
          address: '1701 Wewatta Street, Denver'
        },
        {
          id: 4,
          name: 'Tattered Cover Bookstore',
          description: 'A real, live bookstore. Crazy comfortable cafe area w/ free wifi.',
          coordinates: {
            latitude: 39.7397941,
            longitude: -104.9566365
          },
          address: '2526 E Colfax Ave, Denver'
        },
        {
          id: 5,
          name: 'Illegal Petes',
          description: 'Beautiful patio and great selection of beers and margs. Extra long happy hours (3-8) every day.',
          coordinates: {
            latitude: 39.74024120000001, 
            longitude: -104.96327659999997
          },
          address: '2001 E Colfax Ave, Denver'
        },{
          id: 6,
          name: 'Denver Botanic Gardens',
          description: 'Amazing, expansive gardens. Free WiFi, many places to sit and work.',
          coordinates: {
            latitude: 39.73204249999999,
            longitude: -104.9600977
          },
          address: '1007 York Street, Denver'
        },{
          id: 7,
          name: 'D Bar Denver',
          description: 'Doughnuts, Cake and Shake, Parm Fries... Best dessert with a show!',
          coordinates: {
            latitude: 39.745915,
            longitude: -104.98137280000003
          },
          address: '494 E 19th Ave, Denver'
        },{
          id: 8,
          name: 'MUTINY Information Cafe',
          description: 'Great place, best coffee and chai tea. Better than starbucks but at reasonable prices.',
          coordinates: {
            latitude: 39.71641779999999,
            longitude: -104.98714359999997
          },
          address: '2 South Broadway, Denver'
        },{
          id: 9,
          name: 'Crema',
          description: 'Free wifi but no plugs for computers! Better have a long lasting battery!',
          coordinates: {
            latitude: 39.7611263,
            longitude: -104.98171509999997
          },
          address: '2862 Larimer Street, Denver'
        },{
          id: 10,
          name: 'Mockery Brewing',
          description: 'Lively spot tucked back from the road. Free game room.',
          coordinates: {
            latitude: 39.771248, 
            longitude: -104.97972970000001
          },
          address: '3501 Delgany Street, Denver'
        }
      ]);
    }).then(() => {
      return knex.raw('ALTER SEQUENCE locations_id_seq RESTART WITH 11;')
    });
};
