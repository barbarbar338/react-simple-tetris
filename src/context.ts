import { createContext } from "react";
import { Game, init } from "./models/Game";

export const Context = createContext<Game>(init());
