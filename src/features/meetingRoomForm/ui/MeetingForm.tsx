import {
    Box,
    Button,
    FormControl,
    SelectChangeEvent,
    TextField,
    Typography,
} from "@mui/material";

import {
    DatePicker,
    LocalizationProvider,
    TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ru";

import dayjs, { Dayjs } from "dayjs";

import FormSelect from "@/shared/ui/Select";

import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux.ts";
import {
    setComment,
    setDate,
    setFloor,
    setRoom,
    setTimeEnd,
    setTimeStart,
    setTower,
} from "@/features/meetingRoomForm";
import { generateFloors, generateRooms } from "@/shared/helpers";

const MeetingForm = () => {
    const dispatch = useAppDispatch();
    const { meetingRoomForm } = useAppSelector(state => state);
    const { tower, comment, date, floor, room, timeStart, timeEnd } =
        useAppSelector(state => state.meetingRoomForm);

    const handleTower = (event: SelectChangeEvent<string>) => {
        dispatch(setTower(event.target.value));
    };
    const handleFloor = (event: SelectChangeEvent<string>) => {
        dispatch(setFloor(Number(event.target.value)));
    };
    const handleRoom = (event: SelectChangeEvent<string>) => {
        dispatch(setRoom(Number(event.target.value)));
    };
    const handleDate = (value: dayjs.Dayjs | null) => {
        dispatch(setDate(value?.toJSON()));
    };
    const handleTimeStart = (value: dayjs.Dayjs | null) => {
        dispatch(setTimeStart(value?.toJSON()));
    };
    const handleTimeEnd = (value: dayjs.Dayjs | null) => {
        dispatch(setTimeEnd(value?.toJSON()));
    };
    const handleComment = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        dispatch(setComment(e.target.value));
    };

    const handleClear = () => {
        dispatch(setTower(""));
        dispatch(setFloor(3));
        dispatch(setRoom(1));
        dispatch(setComment(""));
        dispatch(setDate(null));
        dispatch(setTimeStart(null));
        dispatch(setTimeEnd(null));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (date === null || timeStart === null || timeEnd === null) {
            alert("Заполните дату!");
            return;
        }
        console.log(meetingRoomForm);
    };
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
            <FormControl
                fullWidth
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                onSubmit={e => handleSubmit(e)}
                component={"form"}
            >
                <Typography variant="h4" sx={{ marginBottom: "20px" }}>
                    Форма бронирования переговорной
                </Typography>
                <FormSelect
                    id={"tower"}
                    name={"tower"}
                    label={"Башня"}
                    variants={["А", "Б"]}
                    value={tower}
                    handler={handleTower}
                    key={"tower"}
                />
                <FormSelect
                    id={"floor"}
                    name={"floor"}
                    label={"Этаж"}
                    variants={generateFloors(3, 27)}
                    value={floor.toString()}
                    handler={handleFloor}
                    key={"floor"}
                />
                <FormSelect
                    id={"room"}
                    name={"room"}
                    label={"Переговорка"}
                    variants={generateRooms(1, 10)}
                    value={room.toString()}
                    handler={handleRoom}
                    key={"room"}
                />
                <DatePicker
                    label="Дата"
                    value={date}
                    onChange={newDate => handleDate(newDate as Dayjs | null)}
                />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                    }}
                >
                    <TimePicker
                        label="Начало"
                        value={timeStart}
                        onChange={newValue =>
                            handleTimeStart(newValue as Dayjs | null)
                        }
                    />
                    <TimePicker
                        label="Конец"
                        value={timeEnd}
                        onChange={newValue =>
                            handleTimeEnd(newValue as Dayjs | null)
                        }
                    />
                </Box>

                <TextField
                    id="comment"
                    name="comment"
                    label="Комментарий"
                    variant="outlined"
                    value={comment}
                    onChange={handleComment}
                />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                    }}
                >
                    <Button variant="contained" type="submit">
                        Отправить
                    </Button>
                    <Button variant="outlined" onClick={handleClear}>
                        Очистить
                    </Button>
                </Box>
            </FormControl>
        </LocalizationProvider>
    );
};

export default MeetingForm;
