import {useState} from 'react';
import './App.css';
import {HackerImage} from './components/HackerImage.tsx';
import {ByDrorSoft} from './components/ByDrorSoft.tsx';
import {AppButton} from './components/AppButton.tsx';
import {AppTextInput} from './components/AppTextInput.tsx';
import {Results} from './components/Results.tsx';
import {isValidUrl} from './utils/isValidUrl.ts';
import {getDomainFromUrl} from './utils/getDomailFromUrl.ts';
import {checkDomainData} from './api/checkDomainData.ts';
import {TermsDialog} from './components/TermsDialog.tsx';

function App() {
    const [url, setUrl] = useState('');
    const [resultData, setResultData] = useState<{ domain: string, isSafe: boolean } | null>(null);
    const [showUrlNotValidError, setShowUrlNotValidError] = useState(false);
    const checkUrl = async () => {
        setResultData(null);
        if (!isValidUrl(url)) {
            setShowUrlNotValidError(true);
            return;
        }
        const domain = getDomainFromUrl(url);
        const response = await checkDomainData(domain);
        setResultData({
            domain: domain,
            isSafe: !response.isMalicious,
        });

    };

    return (<main className={'flex flex-col gap-6 items-center   '}>
        <HackerImage/>
        <h1 className={'text-xl font-bold'}>Is This Site Safe</h1>
        <div className={'flex flex-col gap-3 w-96   '}>
            <div   className={'  h-14  '}>
            <AppTextInput value={url}
                          className={'w-full shadow-md  '}
                          placeholder={'Enter a URL'}
                          id={'url'}
                          onChange={(ev) => {
                              setShowUrlNotValidError(false);
                              setUrl(ev.target.value);
                          }}/>
            </div>
            <div className={'h-14 flex flex-col p-4 mt-2 '}>
                {showUrlNotValidError && <p className={'text-red-500 font-bold'}>URL is not valid</p>}
                {!showUrlNotValidError &&  <Results results={resultData}/>}
            </div>

        </div>


        <div className={' w-40  mt-2 '}>
            <AppButton className={'bg-blue-600 '} onClick={() => {
                checkUrl().then();
            }}>
                Check URL
            </AppButton>
        </div>


        <div className="flex flex-col items-center w-full mt-8">
            <TermsDialog/>
            <ByDrorSoft/>
        </div>
    </main>);
}

export default App;
