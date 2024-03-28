import { createContext } from "react";

export const LikesContext = createContext({
  totalLikes: 0,
  incrementTotalLikes: () => {},
});
