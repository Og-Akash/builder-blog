import React, { use } from "react";
import { getBuilderContentByModel } from "@/helpers/builder";
import NavigationBar from "./Header";

export default function Header() {
  const headerData = use(getBuilderContentByModel("global-header"));

  if (!headerData) return null;

  return <NavigationBar headerData={headerData.data} />;
}
