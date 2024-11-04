import ClockHeading from "./assets/Components/ClockHeading";
import CurrentTime from "./assets/Components/CurrentTime";
import ClockSlogan from "./assets/Components/ClockSlogan";
import "bootstrap/dist/css/bootstrap.min.css";

function App(){
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  );
}
export default App;