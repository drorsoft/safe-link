export const Results = ({ results }: { results: { domain: string, isSafe: boolean } | null }) => {
    return <div className={'flex flex-col gap-4 items-center'}>
        {results && <>
            <div className={  `ring-1 ring-black flex flex-row rounded-full font-bold text-lg py-2 text-black  px-8 gap-4 ${results.isSafe ? 'bg-green-300' : 'bg-red-400'}` }>
                <h2>{results.domain}</h2>
                <h3>{results.isSafe ? 'Is Safe' : 'Is Not Safe'}</h3>
            </div>
        </>}
    </div>;
};
