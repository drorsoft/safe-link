import React from 'react';

export const AppButton = ({
    children,
    className,
    ...config
}: {
    children: React.ReactNode;
    className?: string;
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>) => {
    return (
        <button
            style={{borderRadius: '10rem'}}
            data-testid={'app-button'}
            className={`h-12 w-max min-w-full rounded-lg  p-2 ${className} text-white disabled:cursor-not-allowed disabled:opacity-50`}
            {...config}


        >
           {  children  }
        </button>
    );
};
