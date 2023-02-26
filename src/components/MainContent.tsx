import '../styles/components/maincontent.sass'
import AbautContainer from './AbautContainer'
import ProjContainer from './ProjContainer';
import TecContainer from './TecContainer'


export const MainContent = () => {
    return (
        <main id='main-section'>
            <AbautContainer />
            <TecContainer />
            <ProjContainer />
        </main>
    );
}