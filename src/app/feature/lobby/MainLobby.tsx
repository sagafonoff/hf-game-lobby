import React from "react";

type MainLobbyProps = {
  gameName: string;
};
export const MainLobby: React.FC<MainLobbyProps> = (props) => {
  return (
    <div>
      <h1>Welcome to the HelloFresh Game Lobby!</h1>
      <h2>Todays game is {props.gameName}</h2>
    </div>
  );
};
