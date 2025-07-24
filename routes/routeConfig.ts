import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export interface RouteItem {
  name: string;
  options?: NativeStackNavigationOptions;
  loader?: () => Promise<any>;
  guard?: () => boolean | Promise<boolean>;
}

export interface AppRoutes {
  [group: string]: RouteItem[];
}
