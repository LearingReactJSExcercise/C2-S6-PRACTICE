import React from "react";
import "../index.css";
export default function Statistic({ sourceResults }) {
  const averageScore = Math.floor(
    sourceResults.reduce((sum, result) => sum + result.score, 0) /
      sourceResults.length
  );
  const maxScore = sourceResults.reduce(
    (max, result) => (result.score > max ? result.score : max),
    0
  );
  const minScore = sourceResults.reduce(
    (min, result) => (result.score < min ? result.score : min),
    100
  );
  return (
    <>
      <div class="statistic">
        <tr>
          <td class="statistic_title">AVERAGE</td>
          <td class="statistic_title">MAX</td>
          <td class="statistic_title">MIN</td>
        </tr>
        <tr>
          <td class="statistic_value">{averageScore}</td>
          <td class="statistic_value">{maxScore}</td>
          <td class="statistic_value">{minScore}</td>
        </tr>
      </div>
    </>
  );
}
