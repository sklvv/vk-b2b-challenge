import { createSlice } from "@reduxjs/toolkit";
import { IMeetingRooms } from "./meetingRoom.type";

const initialState: IMeetingRooms = {
    tower: "",
    floor: 3,
    room: 1,
    date: null,
    timeStart: null,
    timeEnd: null,
    comment: "",
};

const meetingRoomForm = createSlice({
    name: "meetingRoomForm",
    initialState,
    reducers: {
        setTower: (state, action) => {
            state.tower = action.payload;
        },
        setFloor: (state, action) => {
            state.floor = action.payload;
        },
        setRoom: (state, action) => {
            state.room = action.payload;
        },
        setDate: (state, action) => {
            state.date = action.payload;
        },
        setTimeStart: (state, action) => {
            state.timeStart = action.payload;
        },
        setTimeEnd: (state, action) => {
            state.timeEnd = action.payload;
        },
        setComment: (state, action) => {
            state.comment = action.payload;
        },
    },
});

export const {
    setTower,
    setFloor,
    setRoom,
    setDate,
    setComment,
    setTimeStart,
    setTimeEnd,
} = meetingRoomForm.actions;

export default meetingRoomForm.reducer;
