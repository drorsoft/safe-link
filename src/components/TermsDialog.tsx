import React from "react";

export const TermsDialog: React.FC = () => (
    <>
        <button
            className="underline text-blue-700 hover:text-blue-900 mb-2"
            onClick={() => (document.getElementById('termsDialog') as HTMLDialogElement)?.showModal()}
        >
            Terms and Conditions
        </button>
        <dialog id="termsDialog" className="rounded-lg p-6 max-w-lg w-full" style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <h2 className="text-lg font-bold mb-2">Terms and Conditions of Use for Safe-Link</h2>
            <p className="mb-2">Welcome to Safe-Link! This website ("Safe-Link" or "the Service") is a free-to-use service designed to assist users in checking the potential safety of a provided link. By accessing or using Safe-Link, you ("User" or "you") agree to be bound by these Terms and Conditions of Use ("Terms"). If you do not agree to these Terms, please do not use the Service.</p>
            <p className="mb-2">1. Acceptance of Terms<br/>By using Safe-Link, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy (if you develop one). These Terms constitute a legally binding agreement between you and Safe-Link.</p>
            <form method="dialog" className="mt-4 text-right">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Close</button>
            </form>
        </dialog>
    </>
);
