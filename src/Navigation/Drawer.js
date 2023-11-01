import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import NativeStack from "./NativeStack";
import DrawerC from "./DrawerC";

const Drawer = () => {
  const drawer = createDrawerNavigator();
  return (
    <drawer.Navigator drawerContent={DrawerC}>
      <drawer.Screen name="Stack" component={NativeStack} />
    </drawer.Navigator>
  );
};

export default Drawer;
