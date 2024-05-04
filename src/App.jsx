import Header from "./components/Header";
import Scores from "./components/Scores";
import {JAVA_RESULTS } from "./data";
import {PYTHON_RESULTS } from "./data";
import {HTML_RESULTS } from "./data";
import {ENGLISH_RESULTS } from "./data";
function App() {
  return (
    <>
      <Header />
      <main className="scores-container">
      <Scores courseName = "JAVA" sourceResults = {JAVA_RESULTS} />
      <Scores courseName = "PYTHON" sourceResults = {PYTHON_RESULTS} />
      <Scores courseName = "HTML" sourceResults = {HTML_RESULTS} />
      <Scores courseName = "ENGLISH" sourceResults = {ENGLISH_RESULTS} />
      </main>
    </>
  );
}

export default App;
