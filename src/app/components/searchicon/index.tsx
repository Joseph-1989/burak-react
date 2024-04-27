import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
