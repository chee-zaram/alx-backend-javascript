/**
 * Represents a classroom with a maximum number of students.
 *
 * @class
 */
export default class ClassRoom {
  /**
   * Creates a new ClassRoom instance with the specified maximum number of students.
   *
   * @constructor
   * @param {number} maxStudentsSize - The maximum number of students that can be
   * accommodated in the classroom.
   */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
