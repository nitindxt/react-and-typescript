import React from "react";

type UserModel = {
  accountId: string;
  displayName: string;
  isVerified: boolean;
};

type NameTagProps = {
  salutation: string;
  user: UserModel;
};

const currentUser = {
  displayName: "J Mascis",
  accountId: "123",
  isVerified: true
};

type withUserProps = {
  user: UserModel;
};

function withCurrentUser<T extends withUserProps>(
  Component: React.ComponentType<T>
) {
  return (props: Omit<T, keyof withUserProps>) => {
    return <Component {...(props as T)} user={currentUser} />;
  };
}

const NameTag = ({ user, salutation }: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>{salutation}</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{user.displayName}</p>
      </section>
      <footer />
    </main>
  );
};

const NameTagWithCurrentUser = withCurrentUser(NameTag);
const Application = () => <NameTagWithCurrentUser salutation="Howdy" />;

export default Application;
