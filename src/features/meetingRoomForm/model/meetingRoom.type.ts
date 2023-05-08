import { Dayjs } from "dayjs";

export interface IMeetingRooms {
    tower: "A" | "B" | "";
    floor: number;
    room: number;
    date: Dayjs | Date | null;
    timeStart: Dayjs | Date | null;
    timeEnd: Dayjs | Date | null;
    comment?: string;
}
