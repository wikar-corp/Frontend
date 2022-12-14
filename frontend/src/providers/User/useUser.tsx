import axios from "axios";
import { useLocalStorage } from "usehooks-ts";

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
  addTimeblock: (
    date: Date,
    timespan: number,
    name: string,
    color: string
  ) => void;
  addTask: (
    dueDate: Date,
    priority: number,
    name: string,
    estimatedMinutes: number
  ) => void;
  deleteTask: (taskId: string) => void;
  tickTask: (taskId: string, value: boolean) => void;
  getWeek: (date: Date) => void;
  logout: () => void;
  moveTask: (taskId: string, slotId: string | null) => void;
  // getSlots: () => void;
  saveSlot: (
    name: string,
    start: Date,
    quarters: number,
    color: string
  ) => void;
  getSlots: (date: Date) => void;
}

const emptyContext: IContext = {
  ...emptyState,
  login: (username: string, password: string) => null,
  register: (username: string, password: string) => null,
  addTimeblock: (date: Date, timespan: number, name: string, color: string) =>
    null,
  addTask: (
    dueDate: Date,
    priority: number,
    name: string,
    estimatedMinutes: number
  ) => null,
  deleteTask: (taskId: string) => null,
  tickTask: (taskId: string, value: boolean) => null,
  getWeek: (date: Date) => null,
  logout: () => null,
  moveTask: (taskId: string, slotId: string | null) => null,
  // getSlots: () => null,
  saveSlot: (name: string, start: Date, quarters: number, color: string) =>
    null,
  getSlots: (date: Date) => null,
};

const Context = createContext(emptyContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, emptyContext);

  // Load balance of user
  const [token, setToken] = useLocalStorage("jwt", "");

  useEffect(() => {
    if (token != undefined) {
      console.log(token);
      dispatch({ ...state, jwt: token });
    }
  }, [token]);

  useEffect(() => {
    if (state.jwt != "") {
      axios
        .post(API_URL + "/tasks/tasks/user/" + state.jwt)
        .then((res) => {
          console.log(res);
          dispatch({ ...state, tasks: res.data });
          return true;
        })
        .catch((err: any) => {
          return false;
        });
    }
  }, [state.jwt]);

  const deleteTask = (taskId: string) => {
    dispatch({
      ...state,
      tasks: state.tasks.filter((val) => val.id != taskId),
    });
    axios
      .delete(
        API_URL + "/tasks/" + taskId + "?hexIdentificator=" + state.jwt,
        {}
      )
      .then((res) => {
        console.log(res);

        return true;
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const getWeek = () => {
    axios
      .get(API_URL + "/getWeek?hexIdentificator=" + state.jwt)
      .then((res) => {
        console.log(res);
        return true;
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const saveSlot = (
    name: string,
    start: Date,
    quarters: number,
    color: string
  ) => {
    axios
      .post(API_URL + "/slots", {
        categoryOfActivity: 0,
        name: name,
        start: start,
        quartersNumber: quarters,
        color: color,
        hexIdentificator: state.jwt,
      })
      .then((res) => {
        console.log(res);
        return true;
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const getSlots = (date: Date) => {
    console.log(API_URL + "/slots/getWeek", {
      dateTime: date,
      hexIdentificator: state.jwt,
    });
    axios
      .post(API_URL + "/slots/getWeek", {
        dateTime: date,
        hexIdentificator: state.jwt,
      })
      .then((res: any) => {
        console.log(res);
        dispatch({ ...state, blocks: res });
        return true;
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const tickTask = (taskId: string, value: boolean) => {
    const newTasks = state.tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: value } : task
    );

    dispatch({
      ...state,
      tasks: newTasks,
    });

    console.log(
      API_URL +
        "/completeTask/" +
        taskId +
        "?hexIdentificator=" +
        state.jwt +
        "&isCompleted=" +
        value
    );

    axios
      .post(
        API_URL +
          "/completeTask/" +
          taskId +
          "?hexIdentificator=" +
          state.jwt +
          "&isCompleted=" +
          value,
        {
          hexIdentificator: state.jwt,
          isCompleted: "false",
        }
      )
      .then((res) => {
        console.log(res);
        return true;
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const register = async (username: string, password: string) => {
    await axios
      .post(API_URL + "/users/register", {
        username: username,
        password: password,
        comparePassword: password,
      })
      .then(() => {
        //alert();
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
        setToken(res.data);
        dispatch({ ...state, nickname: username, jwt: res.data });
        return true;
      })
      .catch((err: any) => {
        return false;
      });
  };

  const addTimeblock = async (
    date: Date,
    timespan: number,
    name: string,
    color: string
  ) => {
    axios
      .post(API_URL + "/slots", {
        categoryOfActivity: 0,
        name: name,
        start: date,
        end: date,
        color: color,
        hexIdentificator: state.jwt,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addTask = async (
    dueDate: Date,
    priority: number,
    name: string,
    estimatedMinutes: number
  ) => {
    axios
      .post(API_URL + "/tasks", {
        estimatedMinutes: estimatedMinutes,
        isCompleted: false,
        priority: priority,
        taskName: name,
        hexIdentificator: state.jwt,
      })
      .then((res) => {
        const data = res.data as any;

        dispatch({
          ...state,
          tasks: state.tasks.concat([
            {
              estimatedMinutes: data.estimatedMinutes,
              id: data.id,
              isCompleted: data.isCompleted,
              slotId: data.slotId,
              priority: data.priority,
              taskName: data.taskName,
            },
          ]),
        });
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const moveTask = (taskId: string, slotId: string | null) => {
    console.log(slotId);
    const newTasks = state.tasks.map((task) =>
      task.id === taskId ? { ...task, slotId: slotId } : task
    );

    dispatch({
      ...state,
      tasks: newTasks,
    });
  };

  const isLogged = useMemo(() => {
    return state.jwt != null;
  }, [state.jwt]);

  const logout = () => {
    dispatch({ ...state, jwt: "" });
    setToken("");
  };

  return (
    <Context.Provider
      value={{
        ...state,
        addTask,
        tickTask,
        getWeek,
        moveTask,
        login,
        register,
        saveSlot,
        addTimeblock,
        deleteTask,
        getSlots,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useUser = () => useContext(Context);
