import React from "react";
import { Text, View } from "react-native";

export default function test2() {
  function adjustScores(scores) {
    let fullScore = 100;

    for (score of scores) {
      if (score < 0 || score > fullScore) {
        return "error";
      }
    }
    let maxScore = 0;
    for (score of scores) {
      if (score > maxScore) {
        maxScore = score;
      }
    }
    let diffFromFullScore = fullScore - maxScore;
    let newScores = [];
    for (score of scores) {
      newScores.push(score + diffFromFullScore);
    }
    return newScores;
  }

  // 重構後 //
  function adjustScores(scores) {
    let fullScore = 100;
    if (!validateScores(scores, fullScore)) {
      return "error";
    }

    let maxScore = findMaxScore(scores);
    let diffFromFullScore = fullScore - maxScore;
    let newScores = addScoreByNumber(scores, diffFromFullScore);
    return newScores;
  }
  function validateScores(scores) {
    for (score of scores) {
      if (score < 0 || score > 100) {
        return false;
      }
    }
    return true;
  }
  function findMaxScore(scores) {
    let maxScore = 0;
    for (score of scores) {
      if (score > maxScore) {
        maxScore = score;
      }
    }
    return maxScore;
  }
  function addScoreByNumber(scores, number) {
    let newScores = [];
    for (score of scores) {
      newScores.push(score + number);
    }
    return newScores;
  }

  // Modifiability（可修改性）
  // Readability（可讀性）
  // Reusability（可重複利用性）
  // Testability（可測試性)

  return (
    <View>
      <Text>componentName</Text>
    </View>
  );
}
