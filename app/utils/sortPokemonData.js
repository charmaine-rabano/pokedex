export default function sortPokemonData(data, sorting) {
  switch (sorting) {
    case "id_asc":
      return data.sort((a, b) => a.id - b.id);
    case "id_desc":
      return data.sort((a, b) => b.id - a.id);
    case "name_az":
      return data.sort((a, b) => a.name.localeCompare(b.name));
    case "name_za":
      return data.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return data.sort((a, b) => a.id - b.id);
  }
}
