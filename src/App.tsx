import { Route, Routes } from 'react-router';
import { Patients } from './components/Patients';
import './styles/index.scss';
import { SinglePatientInfo } from './components/Patients/SinglePatientInfo';
import { HomePage } from './components/pages/HomePage';
import { NoteList } from './components/Patients/SinglePatientInfo/NoteList';
import ConsultationList from './components/Patients/SinglePatientInfo/ConsultationList/ConsultationList';
import VideoList from './components/Patients/SinglePatientInfo/VideoList/VideoList';
import EventList from './components/Patients/SinglePatientInfo/EventList/EventList';


const App = () => {
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



/* 
<PatientPlate
userData={user}
extraIcon={<Icon name="telegram" />}
isActive={false} />
<PatientPlate
userData={user}
isActive={false}
hasCheckbox={true}
/>
<Patient userData={user} />
<Note
date="20.12.2019"
content="Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях."
/>
<Note
date="20.12.2019"
content="Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях."
imageUrl="images/image.mock.png" />
<Counter count={213} />
<ConsultationItem consultation={consultation} />
<VideoItem
author='Астахава Е.В.'
title='Крабик, ходьба в бок в приседе с двумя резинками Кра…'
url='images/video_1.png'
dateRange='15.01.2019 - 22.01.2019'
/>
<br />
<EventItem date='9 марта 2021' time='17:00' title='Тяга резинки в шаге со сгибанием локтя под 90 градусов' event='Вебинар' />
<br />
<AddButton variant='add'>Новая заметка</AddButton>
<br />
<SearchInput />
<br />
<AsideActionPanel />
<br />
<Checkbox /> */