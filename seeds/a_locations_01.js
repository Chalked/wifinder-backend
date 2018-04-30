
exports.seed = function(knex, Promise) {
  return knex('locations').del()
    .then(function () {
      return knex('locations').insert([
        {
          id: 1, 
          name: 'Galvanize',
          thumbnail: 'img_location',
          description: 'A large building that hosts gSchool classes downstairs and many small tech businesses on the other floors.',
          coordinates: {
            latitude: '39.7576196',
            longitude: '-105.0069694'
          },
          address: '1644 Platte Street'
        },
        {
          id: 2, 
          name: 'Union Station',
          thumbnail: 'img_location',
          description: 'The main transit hub for downtown Denver.',
          coordinates: {
            latitude: '39.7526509',
            longitude: '-105.00168500000001'
          },
          address: '1701 Wynkoop Street'
        },
        {
          id: 3, 
          name: 'Whole Foods',
          thumbnail: 'img_location',
          description: 'A large natural foods store near Union Station.',
          coordinates: {
            latitude: '39.7546184',
            longitude: '-105.00139919999998'
          },
          address: '1701 Wewatta Street'
        }
      ]);
    });
};
