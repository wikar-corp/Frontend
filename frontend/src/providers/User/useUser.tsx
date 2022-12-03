import axios from "axios";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

import { emptyState, IState, Reducer } from "./reducer";

const API_URL = "https://263a-157-158-99-97.eu.ngrok.io";

interface IContext extends IState {
  login: (username: string, password: string) => void;
  register: (username: string, password: string) => void;
}

const emptyContext: IContext = {
  ...emptyState,
  login: (username: string, password: string) => null,
  register: (username: string, password: string) => null,
};

const Context = createContext(emptyContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, emptyContext);

  // Load balance of user

  const register = async (username: string, password: string) => {
    await axios
      .post(API_URL + "/users/register", {
        username: username,
        password: password,
        comparePassword: password,
      })
      .then(() => {
        alert();
        return true;
      })
      .catch((err: any) => {
        return false;
      });
  };

  const login = async (username: string, password: string) => {
    await axios
      .post(API_URL + "/users/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({ ...state, jwt: res.data });
        return true;
      })
      .catch((err: any) => {
        return false;
      });
  };

  const addTask = async () => {
    axios.post(API_URL + "/tasks", () => {});
  };

  const isLogged = useMemo(() => {
    return state.jwt != null;
  }, [state.jwt]);

  return (
    <Context.Provider
      value={{
        ...state,

        login,
        register,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useUser = () => useContext(Context);
