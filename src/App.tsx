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
            <button
                className="underline text-blue-700 hover:text-blue-900 mb-2"
                onClick={() => (document.getElementById('termsDialog') as HTMLDialogElement)?.showModal()}
            >
                Terms and Conditions
            </button>
            <dialog id="termsDialog" className="rounded-lg p-6 max-w-lg w-full">
                <h2 className="text-lg font-bold mb-2">Terms and Conditions of Use for Safe-Link</h2>
                <p className="mb-2">Welcome to Safe-Link! This website ("Safe-Link" or "the Service") is a free-to-use service designed to assist users in checking the potential safety of a provided link. By accessing or using Safe-Link, you ("User" or "you") agree to be bound by these Terms and Conditions of Use ("Terms"). If you do not agree to these Terms, please do not use the Service.</p>
                <p className="mb-2">1. Acceptance of Terms<br/>By using Safe-Link, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy (if you develop one). These Terms constitute a legally binding agreement between you and Safe-Link.</p>
                <form method="dialog" className="mt-4 text-right">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Close</button>
                </form>
            </dialog>
            <ByDrorSoft/>
        </div>
    </main>);
}

export default App;
