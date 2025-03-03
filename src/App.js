import {BrowserRouter ,Routes, Route} from "react-router-dom";
import NoteCardList from "./components/note_card_list.js";
import Add_note from "./components/Add_note.js";
import EditNote from "./components/edit_note.js";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NoteCardList />} />
          <Route path="/add_note" element={<Add_note />} />
          <Route path="/edit_note/:id" element={<EditNote />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
