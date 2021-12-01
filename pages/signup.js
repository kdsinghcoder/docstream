import { useState } from 'react';
import Router from 'next/router';
import { useUser } from '../lib/hooks';
import Form from '../components/form';

const Signup = () => {
  // useUser({ redirectTo: '/', redirectIfFound: true });

  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (errorMsg) setErrorMsg('');

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    if (body.password !== e.currentTarget.rpassword.value) {
      setErrorMsg('The passwords don\'t match');
      return;
    }

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        Router.push('/');
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error);
      setErrorMsg(error.message);
    }
  }

  return (
    <>
      <section className="overflow-hidden">
        <div className="flex min-h-screen overflow-hidden">
          <div className="relative flex-1 bg-gray-900 hidden w-0 overflow-hidden lg:block">
            <img className="absolute inset-0 object-cover w-full h-full" src="https://i.imgur.com/Dn7UZFx.png" alt=""></img>
          </div>
          <div className="
        flex flex-col
        justify-center
        flex-1
        px-4
        py-12
        overflow-hidden
        sm:px-6
        lg:flex-none lg:px-20
        xl:px-24
      ">
            <div className="w-full max-w-xl mx-auto lg:w-96">
              <div>
                <h2 className="mt-6 text-3xl font-extrabold text-neutral-600"> Sign Up </h2>
              </div>
              <div className="mt-8">
                <div className="mt-6">
                  <Form isLogin={false} errorMessage={errorMsg} onSubmit={handleSubmit} />
                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                  </div>
                  <div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Signup;