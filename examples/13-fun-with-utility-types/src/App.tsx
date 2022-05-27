/**
 * We're going to try two things here.
 *
 * - We want to make it so that the CurrentUser component accepts all
 * of the properties from the UserModel *except* for `accountId`.
 *
 * - We want the Friend component to read the properties from the
 * CurrentUser component and use the same props. (I know it's contrived,
 * but see if you can do it without reusing the same type.)
 */

import { ComponentProps } from "react";

type UserModel = {
  accountId: string;
  displayName: string;
  isVerified: boolean;
};

const currentUser = {
  displayName: "J Mascis",
  accountId: "123",
  isVerified: true,
};

const friends: UserModel[] = [
  { displayName: "Brontosaurus", accountId: "234", isVerified: false },
  { displayName: "Stegasaurus", accountId: "456", isVerified: true },
  { displayName: "Tyrannosaurus", accountId: "789", isVerified: true },
];

type CurrentUserProps = Omit<UserModel, "accountId">;

const CurrentUser = ({ displayName, isVerified }: CurrentUserProps) => {
  return (
    <header className="current-user">
      <h2>
        {displayName} {isVerified && "✅"}
      </h2>
    </header>
  );
};
/* Copying Props
We can create a type for props out of the prop type of another component—even if we don't have direct access to the type itself.
React.ComponentProps<typeof CurrentUser>
*/
const Friend = ({
  displayName,
  isVerified,
}: ComponentProps<typeof CurrentUser>) => {
  return (
    <li className="friend">
      {displayName} {isVerified && "✓"}
    </li>
  );
};

const App = () => {
  return (
    <main>
      <CurrentUser {...currentUser} />
      <section>
        <h3>Friends</h3>
        <ul>
          {friends.map((friend) => (
            <Friend key={friend.accountId} {...friend} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default App;
