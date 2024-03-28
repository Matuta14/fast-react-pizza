export async function getAddress({ latitude, longitude }) {
  console.log('longitude: ', longitude);
  console.log('latitude: ', latitude);
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");
  console.log('res: ', res);

  const data = await res.json();
  return data;
}
