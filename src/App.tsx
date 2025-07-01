import { useState } from 'react';
import './App.css';
import { HackerImage } from './components/HackerImage.tsx';
import { ByDrorSoft } from './components/ByDrorSoft.tsx';
import { AppButton } from './components/AppButton.tsx';
import { AppTextInput } from './components/AppTextInput.tsx';
import { Results } from './components/Results.tsx';
import { isValidUrl } from './utils/isValidUrl.ts';
import { getDomainFromUrl } from './utils/getDomailFromUrl.ts';
import { checkDomainData } from './api/checkDomainData.ts';

function App() {
    const [url, setUrl] = useState('cdn.freechatgpt.cloud');
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

    return (<main className={'flex flex-col gap-10 items-center mb-10'}>
        <HackerImage />
        <h1>Is This Site Safe</h1>
        <div className={'w-96'}>
            <AppTextInput value={url}
                          className={'w-full h-12'}
                          placeholder={'Enter a URL'}
                          id={'url'}
                          onChange={(ev) => {
                              setShowUrlNotValidError(false);
                              setUrl(ev.target.value);
                          }} />

            <div className={'h-10 flex flex-col justify-end'}>
                {showUrlNotValidError && <p className={'text-red-500 font-bold'}>URL is not valid</p>}
            </div>
            <div className={'h-10'}>

            <Results results={resultData} />
            </div>
        </div>


        <div className={' w-40  '}>
            <AppButton className={'bg-blue-600 '} onClick={() => {
                checkUrl().then();
            }}>
                Check URL
            </AppButton>
        </div>


        <div className="read-the-docs">
            <ByDrorSoft />
        </div>
    </main>);
}

export default App;
