const grade = (score) => {
  if (score > 100 || score < 0)
    throw new RangeError("Score must be between 0 and 100");
  score = Math.ceil(score);

  //   const gradeLetter =
  //     score >= 80
  //       ? "A"
  //       : score >= 70
  //       ? "B"
  //       : score >= 60
  //       ? "C"
  //       : score >= 50
  //       ? "D"
  //       : "F";

  //   if (score >= 80) {
  //     gradeLetter = "A";
  //   } else if (score >= 70) {
  //     gradeLetter = "B";
  //   } else if (score >= 60) {
  //     gradeLetter = "C";
  //   } else if (score >= 50) {
  //     gradeLetter = "D";
  //   } else {
  //     gradeLetter = "F";
  //   }

  console.log(
    `You got ${
      score >= 80
        ? "A"
        : score >= 70
        ? "B"
        : score >= 60
        ? "C"
        : score >= 50
        ? "D"
        : "F"
    }`
  );
};
grade(60);
