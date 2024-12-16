import { Button } from "./components/Button";
import { ThemeProvider } from "./context/ThemeProvider/ThemeProvider";

export default function App(){
  return (
    <ThemeProvider>
      <Button color="primary" role = "radio">
          test
      </Button>
    </ThemeProvider>
  )
}