
const Home = () => {
    return (
        <div className="wrapper">
            <div className="home">
            <h2>Sikkerhed på EUC Lillebælt</h2>
            <p>For at sikre dig at udvedkommende ikke får adgang til din pc, eller andet sker mens du er på skolen anbefales det at du følger denne IT politik for at forholde dig sikker. <br />
            <br />
            Den vil blandt andet komme ind under: 
            </p>
            <ul>
                <li>Logisk Sikkerhed</li>
                <li>Kommunikationssikkerhed</li>
                <li>Datasikkerhed</li>
                <li>gode råd</li>
            </ul>

            <div className="fysisk" id="logik">
                <article>
                    <h2>Logisk Sikkerhed</h2>
                    <p>For at opnå best mulig fysisk sikkerhed er det forslået at du følger disse råd</p>

                    <p className="txt"><strong>1. Sikkerhedskopiering</strong></p>

                    <p className="txt">Sikkerhedskopiering handler om, at du jævnligt tager kopier af din pc's indhold som fx vigtige filer eller lign, så du ikke mister dem. derved er du altid klar til undervisnigen</p>

                    <p className="txt"><strong>2. Adgangskoder</strong></p>

                    <p className="txt">Det er også vigtigt at du jævnligt sikre dig at dine adgangskoder er opdateret. Din adgangskode burde være 16 tegn lang og indholde store, små, numre, og symboler for at opnå mest effektiv sikkerhed. Det forslårs også at du opdatere din adgangskode hver 3 måned. Du må IKKE skrive din kode ned i filer på din pc da det kan være en sikkerhedsrisiko, skriv dem ned på et styk papir eller download en kode manager. Det er også vigtigt ikke at bruge den samme kode flere steder.</p>

                    <p className="txt"><strong>3. Antivirus</strong></p>

                    <p className="txt">Antivirus program er meget vigtigt for at sikre dig mod trusler på internettet. Udover antivirus er sund fornuft også vigtig. Ikke hent programmer fra ukendte sider og lad være med at trykke på mistænkelige links</p>

                </article>
            </div>

            <div className="fysisk" id="data">
                <article>
                    <h2>Data Sikkerhed</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quae.</p>

                    <p className="txt"><strong>1. Lorem</strong></p>

                    <p className="txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eius.</p>

                    <p className="txt"><strong>2. Lorem</strong></p>

                    <p className="txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, tempore?</p>
                </article>
            </div>

           
        </div>
        </div>
    );
}
 
export default Home