import { Container, FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function SelectLanguage() {
  const [language, setLanguage] = useState("");

  const greencolor = '#B6D9D7';
  const grayish = '#303134';
  const blackish = '#121212';

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Container
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      height: "100%",
      minHeight: "80%",
      width: "30%",
    }}>
      <FormControl
        sx={{
          color: blackish,
          fontFamily: 'JetBrains Mono',
          minWidth: 250,
        }}>
        <Select
          value={language}
          onChange={handleChange}
          displayEmpty
          renderValue={language !== "" ? undefined : () => "Select Language"}

          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: blackish,
                color: 'white',
              },
            },
          }}

          sx={{
            bgcolor: grayish,
            color: "white",
            ".MuiOutlinedInput-notchedOutline": { borderColor: greencolor },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: greencolor },
            ".MuiSvgIcon-root": { color: "white" },
            fontFamily: "JetBrains Mono",
          }}
        >
          <MenuItem value="python"
          sx={{
            fontFamily: 'JetBrains Mono',
          }}
          >Python</MenuItem>
          <MenuItem value="java" sx={{
            fontFamily: 'JetBrains Mono',
          }}>Java</MenuItem>
          <MenuItem value="csharp" sx={{
            fontFamily: 'JetBrains Mono',
          }}>C#</MenuItem>
          <MenuItem value="cpp" sx={{
            fontFamily: 'JetBrains Mono',
          }}>C++</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
}
