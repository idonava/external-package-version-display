import { Box } from "@mui/material";
import React from "react";

export const packageVersion = "2.1.0";

export const VersionDisplay = () => {
  return <Box>external-package-version-display Version: {packageVersion}</Box>;
};
