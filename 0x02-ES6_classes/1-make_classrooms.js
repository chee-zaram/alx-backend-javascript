import ClassRoom from './0-classroom';

/**
 * Initializes a list of ClassRoom objects with the given sizes.
 *
 * @returns {Array} - An array of ClassRoom objects.
 *
 * @throws {Error} - If the size parameter is not a number.
 *
 * @example
 * const rooms = initializeRooms();
 * // returns [ClassRoom, ClassRoom, ClassRoom]
 */
const initializeRooms = () => [19, 20, 34].map((size) => new ClassRoom(size));

export default initializeRooms;
