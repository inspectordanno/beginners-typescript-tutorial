import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

type MyType = Omit<User, 'firstName' | 'lastName'>

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
