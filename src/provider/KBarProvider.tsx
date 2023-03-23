import React from 'react';
import {createAction, Priority, useRegisterActions} from 'kbar';
import {MdDarkMode, MdLogin, MdHome} from 'react-icons/md';
import {AiOutlineUser} from 'react-icons/ai';
import {BsActivity} from 'react-icons/bs';

interface KBarProviderProps {
  children: React.ReactNode;
}

const KBarProvider: React.FC<KBarProviderProps> = ({children}) => {
  const loginAction = createAction({
    name: 'Login',
    perform: () => {},
    priority: Priority.NORMAL,
    section: 'Settings',
    icon: <MdLogin />,
  });

  const themeAction = createAction({
    name: 'Dark mode',
    perform: () => {},
    icon: <MdDarkMode />,
    section: {
      name: 'Settings',
      priority: Priority.NORMAL,
    },
  });

  const homeAction = createAction({
    name: 'Home',
    perform: () => {},
    icon: <MdHome />,
    priority: Priority.HIGH,
  });

  const usersAction = createAction({
    name: 'Users',
    perform: () => {},
    icon: <AiOutlineUser />,
    priority: Priority.HIGH,
  });

  const activityAction = createAction({
    name: 'Activity',
    perform: () => {},
    icon: <BsActivity />,
    priority: Priority.HIGH,
  });

  useRegisterActions([
    loginAction,
    themeAction,
    homeAction,
    usersAction,
    activityAction,
  ]);

  return <>{children}</>;
};

export default KBarProvider;
