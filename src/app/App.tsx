import { Container, CssBaseline } from "@mui/material";
import { MeetingRoomForm } from "@/features/meetingRoomForm";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
    return (
        <Provider store={store}>
            <CssBaseline />
            <Container sx={{ marginTop: "16px" }}>
                <MeetingRoomForm />
            </Container>
        </Provider>
    );
};

export default App;
