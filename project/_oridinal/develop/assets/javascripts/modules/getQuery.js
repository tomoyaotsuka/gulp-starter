export default function() {
  const array = [];
  let hash;
  const hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

  for (let i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    array.push(hash[0]);
    array[hash[0]] = hash[1];
  }

  return array;
}
