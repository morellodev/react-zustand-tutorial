import { persist as defaultPersist } from "zustand/middleware";

const persist = (...args) =>
  defaultPersist(...args, {
    name: "todos",
  });

export default persist;
