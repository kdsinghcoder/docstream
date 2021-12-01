function Faq() {


    return (

        <section id="Faq" className="text-gray-700 bg-gray-900">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20 ">
                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4 ">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300">
                       Understanding an application in the first go is diffuclt for the best of us!
                       Check out some of the most commonly asked questions below
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">

                    <div className="w-full lg:w-1/2 px-4 py-2 ">
                        <details className="mb-4">
                            
                            <summary className="font-semibold  bg-transprent text-lg text-white rounded-md py-2 px-4 bg-green-500">
                                Do I need to register myself anywhere before using Docstream?
                            </summary>

                            <span className="text-gray-400">
                                No, we believe registering is the last thing you should worry about when you have
                                something to write about. Docstream promises zero time for registrations
                            </span>
                        </details>

                        <details className="mb-4">
                            
                            {/* <summary className="font-semibold  bg-transprent text-lg text-white rounded-md py-2 px-4 bg-white-500"> */}
                            <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                                Do I need to share my name, email or other personal details?
                            </summary>

                            <span className="text-gray-400">
                                No. Privacy is the top most priority at Docstream and we will never ask you
                                to enter any personal details such as your name, email or phone number
                            </span>
                        </details>
                        
                        <details className="mb-4">
                            {/* <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4"> */}
                            <summary className="font-semibold  bg-transprent text-lg text-white rounded-md py-2 px-4 bg-green-500">
                           Why has my website's name changed from /Priya'sBlog to /Priya-sBlog?
                            </summary>

                            <span className="text-gray-400">
                            Some characters are not permitted in URL addresses,  that's why your URL is redirected to a URL that has some characters replaced with dashes. You can always type in "Priya'sBlog" and you'll be redirected to the same URL.
                            </span>
                        </details>
                        <details className="mb-4">
                            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                            Why is this technology called 'Trustless Security'?
                            </summary>

                            <span className="py-2 text-gray-400">
                            Your password never leaves your device. We only store encrypted content. You don't have to trust us, or anyone else with your password, since only you know it and only you can decrypt your notes. It's like if you're writing a diary with special characters that only you understand. It doesn't matter where you keep this diary, since only you can understand the text that's inside.


                            </span>
                        </details>
                        <details className="mb-4">
                            {/* <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4"> */}
                            <summary className="font-semibold  bg-transprent text-lg text-white rounded-md py-2 px-4 bg-green-500">
                            Do I have to use a long password?
                            </summary>

                            <span className="py-2 text-gray-400">
                            You don't have to, but it's recommended. The longer the password, the harder it is to guess it. Note that your text is protected by both the URL and your password.
                            </span>
                        </details>
                        <details className="mb-4">
                            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                            Can I use Docstream over a public or unknown internet connection such as at a mall?
                            </summary>

                            <span className="py-2 text-gray-400">
                            Yes. Your password (or password hashes) are never sent over the network, and all data that's sent or received is always encrypted. Your data is decrypted only on your device, and encrypted before it's returned to us.
                            </span>
                        </details>
                        <details className="mb-4">
                            {/* <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4"> */}
                            <summary className="font-semibold  bg-transprent text-lg text-white rounded-md py-2 px-4 bg-green-500">
                            How can you verify that a password is correct if you don't store it anywhere and don't send it to server? How do you authenticate the user?
                            </summary>

                            <span className="py-2 text-gray-400">
                            Passwords are never saved; not even within encrypted text.
                            <br/>
                            Decryption of a page will fail if the password is incorrect, so whoever can decrypt the 
                            page must have used the correct password. 
                            <br/>
                            The idea is that we don't have to know the password; we just have to make sure that the 
                            password is correct.
                            <br/>
                            Once a user creates the password, we store the encrypted URL, and each time the password 
                            needs to be tested, we just try decrypting the encrypted URL. If we get the expected URL, 
                            we try using the same password for decrypting the whole site (it's possible -- but very 
                            unlikely -- that two different passwords correctly decrypt the same URL, but using that 
                            wrong password for decrypting everything else will result in gibberish).
                            </span>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq
