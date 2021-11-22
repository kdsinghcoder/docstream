import Link from 'next/link';
import React from "react";
import Input from "@material-tailwind/react/Input";
import InputIcon from "@material-tailwind/react/InputIcon";
import ClosingAlert from "@material-tailwind/react/ClosingAlert";
import Button from "@material-tailwind/react/Button";
import Card from "@material-tailwind/react/Card";



const Form = ({ isLogin, errorMessage, onSubmit ,id_username}) => (
    <>
        <Card
        // as="form"
        // onSubmit={onSubmit}

        >
            {errorMessage=="" ?<br></br>:<ClosingAlert color="red">{errorMessage}</ClosingAlert>}

          <form onSubmit={onSubmit}>

            <InputIcon
                type="text"
                color="lightBlue"
                size="lg"
                outline={true}
                placeholder="Your site name"
                iconFamily="material-icons"
                iconName="person"
                name="username"
                value={id_username}
                required
                
                />
            <br />

            <Input
                type="password"
                color="lightBlue"
                size="lg"
                outline={true}
                placeholder="Enter Password"
                name="password"
                id = "password"
                required
                
                />
            <br />
            {!isLogin && (
              <Input
              type="password"
              color="lightBlue"
                size="lg"
                outline={true}
                placeholder="Enter Password angain"
                name="rpassword"
                id = "rpassword"
                required
                
                />
                )}

            <br></br>
            <div className="submit">
          {isLogin ? (
            <>
                <Link href="/signup">
                  <a>I don&apos;t already have an site</a>
                </Link>
                <br></br>
                <br></br>

                <Button
                color="green"
                buttonType="filled"
                size="lg"
                rounded={false}
                block={true}
                iconOnly={false}
                ripple="light"
                type="submit"
                
                >
                Login
            </Button>
            </>
          ) : (
            <>
                <Link href="/">
                  <a>I already have an account</a>
                </Link>
                <br></br>
                <br></br>

                <Button
                color="green"
                buttonType="filled"
                size="lg"
                rounded={false}
                block={true}
                iconOnly={false}
                ripple="light"
                type="submit"
                >
                SignUp
            </Button>
            </>
          )}
        </div>
          </form>
        </Card>
    </>
);

export default Form;