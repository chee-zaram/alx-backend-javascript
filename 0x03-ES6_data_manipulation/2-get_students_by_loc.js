/**
 * getStudentsByLocation - returns an array of students with given location
 * @param {Array} students - array of student objects from `getListStudents`
 * @param {string} location - location of students to retrieve
 * @returns {Array} - students with given location
 */
const getStudentsByLocation = (students, location) => {
  if (!Array.isArray(students) || typeof location !== 'string') return [];
  return students.filter((student) => student.location === location);
};

export default getStudentsByLocation;
