
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
                    <li>Datasikkerhed</li>
                    <li>gode råd</li>
                </ul>
                <p id="brr">Nogle af disse ting går ned i detalje hvis du bare ville have råd så gå til <a href="#tip">Gode Råd</a></p>
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

                        <p>Data sikkerhed er den del hvor du sikre din data på din pc.</p>

                        <p className="txt"><strong>1. Opdateringer</strong></p>

                        <p className="txt">Det er vigtigt at holde din pc og programmer opdateret hele tiden. Opdateringerne er med til at sikre "huller" i din pc's forsvar så hackere ikke kan få adgang til din data ved at udnytte disse huller</p>

                        <p className="txt"><strong>2. Phising</strong></p>

                        <p className="txt">Phising er hvor man prøver at få fat i dine koder ved at du ved et uheld kommer til at give dem væk. For ex hvis du for en mail hvor du bliver bedt om at logge ind. Mailen vil ligne en rigtig mail men tage dig til en usikker side som vil være en kopi af den rigtige hvor de prøver at få dig til at skrive dine oplysninger. Alle sikre hjemmesider har https::/ i deres adresse.</p>

                    </article>
                </div>
                <div className="fysisk" id="tip">
                    <article>
                        <h2>Gode Råd</h2>

                        <p className="txt">Her er nogle hurtige gode råd du kan følge hvis du er i tvivl</p>

                        <ol type="1">
                            <li>Åben/Download aldrig vedhæftede filer, fra e-mails du ikke kender</li>
                            <li>Slå ikke sikker tilstand fra på office dokumenter du har downloadet fra ukendte kilder af</li>
                            <li>Tryk aldrig på links, fra e-mails du ikke kender</li>
                            <li>Download aldrig indhold fra hjemmesider du ikke kender</li>
                            <li>Hold altid din pc og dens software opdateret.</li>
                            <li>Dit password skal indeholde STORE og små bogstaver samt tegn og tal</li>
                            <li>dit password skal ændres mindst hvert tredje måned</li>
                            <li>Brug ikke det samme password flere gange</li>
                            <li>Giv aldrig ukendte adgang til din pc, heller ikke via telefon</li>
                            <li>Lås altid dine enheder når du forlader dem</li>
                            <li>Hvis du nogensinde skulle være i tvivl søg da hjælp hos skolens IT-afdeling</li>
                        </ol>
                    </article>
                </div>


            </div>
        </div>
    );
}

export default Home