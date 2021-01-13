import './App.css';

function App() {
  const { DateTime } = require("luxon");
  const minutesPerDay = 42524.0462963;
  const moonCycleDays = 29.53058770576;
  const minutesPerMoonCycle = moonCycleDays * minutesPerDay;
  const firstMoonOf2021 = DateTime.fromISO("2021-01-13T05:02:00", {
    zone: "UTC"
  });

  const secondsFromNewMoon = (now = DateTime.local(), knowNewMoon = firstMoonOf2021 ) => {
    const minutesFromFirstNewMoon = now
        .diff(knowNewMoon, "minutes")
        .toObject().minutes;
    const currentMoonMinutes = minutesFromFirstNewMoon % minutesPerMoonCycle;
    return (currentMoonMinutes * 100) / minutesPerMoonCycle;
  };

  return (
      <div className="App">
        <h1>Moon is</h1>
        <h2>{Math.round(secondsFromNewMoon())}%</h2>
      </div>
  );
}


export default App;
