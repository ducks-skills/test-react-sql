import { Stack, useTheme } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const SearchContainer: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      sx={{
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        width: "50vw",
        overflowY: "auto",
        position: "sticky",
        py: 4,
        px: 2,
        borderRight: "solid 1px black",
      }}
    >
      {children}
    </Stack>
  );
};

export default SearchContainer;
