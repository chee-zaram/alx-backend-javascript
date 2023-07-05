const updateStudentGradeByCity = (students, city, newGrades) => {
  if (
    !Array.isArray(
      students || !Array.isArray(newGrades) || typeof city !== 'string',
    )
  ) {
    return [];
  }

  return students.filter((student) => student.location === city).map(
    (student) => {
      const s = newGrades.find((g) => g.studentId === student.id);
      return { ...student, grade: s ? s.grade : 'N/A' };
    },
  );
};

export default updateStudentGradeByCity;
