import { ReactElement } from 'react';
import { Route, Routes } from 'react-router';

import { ConsultationList } from '../components/Consultations/ConsultationList';
import { EventList } from '../components/Events/EventList';
import { NoteList } from '../components/Notes/NoteList';
import { SinglePatientInfo } from '../components/SinglePatientInfo';
import { VideoList } from '../components/Videos/VideoList';

import { HomePage } from './HomePage';
import { PatientsPage } from './PatientsPage';


export const AppRoutes = (): ReactElement => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="clients/" element={<PatientsPage />}>
            <Route path=":id/*" element={<SinglePatientInfo />}>
                <Route path="notes" element={<NoteList />} />
                <Route path="consultations" element={<ConsultationList />} />
                <Route path="videos" element={<VideoList />} />
                <Route path="events" element={<EventList />} />
            </Route>
        </Route>
    </Routes>
);
