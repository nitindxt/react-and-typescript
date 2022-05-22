import { CharacterType, fetchCharacter } from "./characters";
import { Loading } from "./Loading";

import { CharacterInformation } from "./CharacterInformation";
import { useEffect, useState } from "react";

export const App = () => {
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetchCharacter().then((c) => {
        setCharacter(c);
        setLoading(false);
      });
    }, 1000); //faking loading time
  }, []);

  return (
    <main>
      {loading && <Loading />}
      {character && (
        <CharacterInformation character={character}></CharacterInformation>
      )}
    </main>
  );
};
