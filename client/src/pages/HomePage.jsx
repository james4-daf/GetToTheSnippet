import Button from "@mui/material/Button";
import "../App.css";
import SideSnippet from "../components/SideSnippet/SideSnippet";

function HomePage() {
  return (
    <div className="App">
      <Button variant="outlined">Outlined</Button>
      <SideSnippet />
    </div>
  );
}

export default HomePage;
