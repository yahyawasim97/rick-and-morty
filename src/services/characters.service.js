import Instance from "./Instance";

export const getCharacters = ({ name, gender, page }) => {
  return Instance.get("/character", {
    params: {
      ...(name?{name}:{}),
      ...(gender?{gender}:{}),
      ...(page?{page}:{}),
    }
  });
};
