const generateRooms = (start: number, end: number) => {
    const rooms = [];

    for (let i = start; i <= end; i++) {
        rooms.push(i.toString());
    }

    return rooms;
};
export default generateRooms;
