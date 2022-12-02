import React, { useMemo, useState } from "react";
import { Default } from "./default";
import { Register } from "./register";
import { SignInUsingAccount } from "./signInUsingAccount";

export enum DisplayedElement {
  DEFAULT,
  SIGNIN,
  REGISTER,
}

export const SignInForm = () => {
  const [element, setElement] = useState<DisplayedElement>(
    DisplayedElement.DEFAULT
  );

  const typeOptions: any = {
    [DisplayedElement.DEFAULT]: () => <Default setElement={setElement} />,
    [DisplayedElement.SIGNIN]: () => (
      <SignInUsingAccount setElement={setElement} />
    ),
    [DisplayedElement.REGISTER]: () => <Register setElement={setElement} />,
  };

  const connectType = useMemo(() => {
    if (element === DisplayedElement.DEFAULT) {
      return DisplayedElement.DEFAULT;
    }
    if (element === DisplayedElement.SIGNIN) {
      return DisplayedElement.SIGNIN;
    }
    if (element === DisplayedElement.REGISTER) {
      return DisplayedElement.REGISTER;
    }
    return DisplayedElement.DEFAULT;
  }, [element]);

  return typeOptions[connectType]();
};
