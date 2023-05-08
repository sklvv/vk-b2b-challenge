const generateFloors = (start: number, end: number) => {
    const floors = [];

    for (let i = start; i <= end; i++) {
        floors.push(i.toString());
    }

    return floors;
};
export default generateFloors;
