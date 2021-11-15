type MenuOptions = "" | "all" | "dog" | "cat" | "fish";
export const createMenuObject = (activeMenu: MenuOptions) => {
  let returnedObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };

  if (activeMenu !== "") {
    returnedObject[activeMenu] = true;
  }

  return returnedObject;
};
