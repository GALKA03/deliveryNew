export default async function getNewPizzaId(id) {
  const res = await fetch(`http://localhost:3000/api/pizzas/${id}`,{ cache: 'no-store' });
//  if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }
    return res.json();
}
// async function getArtistAlbums(id) {
//   const res = await fetch(`http://localhost:3000/api/pizzas/${id}/morInform`);
//   return res.json();
// }