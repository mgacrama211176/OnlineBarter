import { TextField, InputAdornment } from "@mui/material";
import { FaSearch } from "react-icons/fa";

const HeaderSearch = () => {
  const test = () => {
    console.log("test");
  };
  return (
    <>
      <TextField
        type={"text"}
        sx={{
          width: {
            xs: "90%",
            sm: "100%",
            md: "100%",
          },
          "& .MuiInputBase-root": {
            height: {
              xs: 30,
              md: 40,
            },
          },
        }}
        placeholder="Search"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <FaSearch size={20} onClick={test} />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
export default HeaderSearch;
