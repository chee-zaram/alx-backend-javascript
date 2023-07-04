/**
 * Returns an array of student IDs from an array of student objects.
 *
 * @param {Array} students - An array of student objects.
 * @returns {Array} - An array of student IDs.
 *
 * @example
 * const students = [
 *   { id: 1, firstName: 'John', location: 'Here' },
 *   { id: 2, firstName: 'Jane', location: 'There' },
 *   { id: 3, firstName: 'Bob', location: 'Elsewhere' }
 * ];
 *
 * const studentIds = getListStudentIds(students);
 * console.log(studentIds); // Output: [1, 2, 3]
 */
const getListStudentIds = (students) => {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.map((student) => student.id);
};

export default getListStudentIds;
