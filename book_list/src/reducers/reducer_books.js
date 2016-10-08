export default function() {
  console.log('Reducer BooksList');
  return [
    { title: 'Javascript: The Good Parts', pages: 101, percentRead: 50 },
    { title: 'Harry Potter', pages: 39, percentRead: 99 },
    { title: 'The Dark Tower', pages: 85, percentRead: 0 },
    { title: 'Eloquent Ruby', pages: 1, percentRead: 14 }
  ];
}
