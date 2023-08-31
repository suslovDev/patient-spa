import { Route, Routes } from 'react-router';

import { HomePage } from './components/pages/HomePage';
import { Patients } from './components/Patients';
import { SinglePatientInfo } from './components/Patients/SinglePatientInfo';
import ConsultationList from './components/Patients/SinglePatientInfo/ConsultationList/ConsultationList';
import EventList from './components/Patients/SinglePatientInfo/EventList/EventList';
import { NoteList } from './components/Patients/SinglePatientInfo/NoteList';
import VideoList from './components/Patients/SinglePatientInfo/VideoList/VideoList';

import './styles/index.scss';


const App = (): JSX.Element => {
    return (
        <div className="app"> 
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='clients/' element={<Patients />} >
                    <Route path=':id/*' element={<SinglePatientInfo />} >
                        <Route path='notes' element={<NoteList />} />
                        <Route path='consultations' element={<ConsultationList />} />
                        <Route path='videos' element={<VideoList />} />
                        <Route path='events' element={<EventList />} />
                    </Route>
                </Route>
            </Routes>

        </div>
    )
}


export default App;