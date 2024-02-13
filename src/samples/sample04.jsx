/*
## Assoc
*/
import { useCallback, useState } from "react";
import { Sample } from "../components/sample";

function lens(get, set) {
  return {
    get,
    set,
    assoc: (f) => (whole) => set(f(get(whole)))(whole),
  };
}

function prop(key) {
  return lens(
    (whole) => whole[key],
    (part) => (state) => ({ ...state, [key]: part })
  );
}

function compose(a, b) {
  return lens(
    (whole) => b.get(a.get(whole)),
    (part) => (whole) => a.set(b.set(part)(a.get(whole)))(whole)
  );
}

const lollyProp = compose(prop("nest"), prop("lolly"));
const inc = (x) => x + 1;

const init = {
  nest: {
    lolly: 3,
  },
};

function Component() {
  const [state, setState] = useState(init);
  const clickHandler = useCallback(() => setState(lollyProp.assoc(inc)), []);
  return (
    <>
      <div>{JSON.stringify(state)}</div>
      <button onClick={clickHandler}>+</button>
    </>
  );
}

export function Sample04() {
  return (
    <Sample>
      <Component />
    </Sample>
  );
}

/*
- constructor
- assoc and set can be derived from one another (will not true for more complex optics)
*/
