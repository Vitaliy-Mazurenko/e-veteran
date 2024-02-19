import {Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Login from "./pages/login/Login.jsx";
import Mailing from "./pages/mailing/Mailing.jsx";
import Form from "./pages/form/Form.jsx";
import Analyst from "./pages/analyst/Analyst.jsx";
import {useState} from "react";
import Question from "./pages/question/Question.jsx";
import Application from "./pages/application/Application.jsx";


function App() {
    const [user, setUser] = useState({
        login: localStorage.getItem('login'),
        password: localStorage.getItem('password')
    })

    return (
        <>

            {(user?.login?.length > 1) ? (
                <>
                    <Header/>
                    <Sidebar/>
                    <div className="wrapper">
                        <div className="content">
                            <Routes>
                                <Route path="*" element={<Navigate to="/form"/>}/>
                                <Route path='/question' element={<Question/>}/>
                                <Route path="/mailing" element={<Mailing/>}/>
                                <Route path="/form" element={<Form/>}/>
                                <Route path="/analyst" element={<Analyst/>}/>
                                <Route path="/application" element={<Application/>}/>
                            </Routes>
                        </div>
                    </div>
                </>
            ) : (
                <Routes>
                    <Route path="*" element={<Navigate to="/login"/>}/>
                    <Route path="/login" element={<Login setUser={setUser}/>}/>
                </Routes>
            )}
        </>
    );
}

export default App;
