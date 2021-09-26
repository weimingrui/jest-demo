const dispatch = (event) => {
  const { fn, type, name } = event;
  switch (type) {
    case "ADD_TEST":
      const { testBlock } = global["STATE_SYMBOL"];
      testBlock.push({ fn, name });
      break;
  }
};
export const test = (name, fn) => {
  dispatch({ type: "ADD_TEST", fn, name });
};
global["STATE_SYMBOL"] = {
  testBlock: [],
};