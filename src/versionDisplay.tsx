import { Box } from "@mui/material";
import {
  VersionDisplay as VersionDisplay2,
  packageVersion as packageVersion2,
} from "external-package-version-display-2";
import React from "react";

export const packageVersion = "2.1.7";
export const packageVersionOfExternalPackage2 = packageVersion2;

export const VersionDisplay = () => {
  return (
    <Box sx={{ backgroundColor: "yellow" }}>
      <Box>external-package-version-display Version: {packageVersion}</Box>
      <Box>
        external-package-version-display2 Version: <VersionDisplay2 />
      </Box>
    </Box>
  );
};
