import {ShowTheWeather, WikipediaViewer, TwitchJsonAPI, TicTacToeGame} from '/components/task/takeHomeProject';
import {TAKEHOMETASKMENU} from './path';

export const takeHomeCardMap = {
  "1": {
    title: "Show the Weather",
    name: "Show the Local Weather",
    number: 1,
    path: TAKEHOMETASKMENU
  },
  "2": {
    title: "Build a Wikipedia Viewer",
    pname: "Build a Wikipedia Viewer",
    "number": 2,
    path: TAKEHOMETASKMENU
  },
  "3": {
    title: "Use the Twitch JSON API",
    pname: "Use the Twitch JSON API",
    "number": 3,
    path: TAKEHOMETASKMENU
  },
  "4": {
    title: "Build a Tic Tac Toe Game",
    pname: "Build a Tic Tac Toe Game",
    "number": 4,
    path: TAKEHOMETASKMENU
  }
}

export const takeHomeCompoentsMap = {
  "1": ShowTheWeather,
  "2": WikipediaViewer,
  "3": TwitchJsonAPI,
  "4": TicTacToeGame
}