import { createContext } from "react";
import { IErrorsRender } from "../interfaces/api";

interface Context {
  formErrors: IErrorsRender | null;
}

const ErrorsContext = createContext<Context>({
  formErrors: null
});

export default ErrorsContext