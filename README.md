[![stars](https://img.shields.io/github/stars/barbarbar338/react-simple-tetris?color=yellow&logo=github&style=for-the-badge)](https://github.com/barbarbar338/react-simple-tetris)
[![license](https://img.shields.io/github/license/barbarbar338/react-simple-tetris?logo=github&style=for-the-badge)](https://github.com/barbarbar338/react-simple-tetris)
[![supportServer](https://img.shields.io/discord/711995199945179187?color=7289DA&label=Support&logo=discord&style=for-the-badge)](https://discord.gg/BjEJFwh)
[![forks](https://img.shields.io/github/forks/barbarbar338/react-simple-tetris?color=green&logo=github&style=for-the-badge)](https://github.com/barbarbar338/react-simple-tetris)
[![issues](https://img.shields.io/github/issues/barbarbar338/react-simple-tetris?color=red&logo=github&style=for-the-badge)](https://github.com/barbarbar338/react-simple-tetris)

<p align="center">
  <img src="https://raw.githubusercontent.com/barbarbar338/readme-template/main/icon.png" alt="Logo" />
  <h3 align="center">React Simple Tetris</h3>

  <p align="center">
    Embed a game of Tetris in your React app!
    <br />
    <a href="https://discord.gg/BjEJFwh"><strong>Get support »</strong></a>
    <br />
    <br />
    <a href="https://github.com/barbarbar338/react-simple-tetris/issues">Report Bug</a>
    ·
    <a href="https://github.com/barbarbar338/react-simple-tetris/issues">Request Feature</a>
    ·
    <a href="https://github.com/brandly/react-tetris">Original Repo</a>
  </p>
</p>

# 📦 Installation

-   Using yarn: `yarn add react-simple-tetris`
-   Using npm: `npm i react-simple-tetris`

# 📚 Demo

-   Live demo: https://338.rocks/games/tetris

![demo](https://cdn.338.rocks/v1/storage/uploads/images/300232944872718350.png)

# 🤓 Usage

```js
const React = require("react");
const Tetris = require("react-simple-tetris");

const App = () => (
	<div>
		<h1>Tetris</h1>
		<Tetris
			keyboardControls={{
				// Default values shown here. These will be used if no
				// `keyboardControls` prop is provided.
				down: "MOVE_DOWN",
				left: "MOVE_LEFT",
				right: "MOVE_RIGHT",
				space: "HARD_DROP",
				z: "FLIP_COUNTERCLOCKWISE",
				x: "FLIP_CLOCKWISE",
				up: "FLIP_CLOCKWISE",
				p: "TOGGLE_PAUSE",
				c: "HOLD",
				shift: "HOLD",
			}}
		>
			{({
				HeldPiece,
				Gameboard,
				PieceQueue,
				points,
				linesCleared,
				state,
				controller,
			}) => (
				<div>
					<HeldPiece />
					<div>
						<p>Points: {points}</p>
						<p>Lines Cleared: {linesCleared}</p>
					</div>
					<Gameboard />
					<PieceQueue />
					{state === "LOST" && (
						<div>
							<h2>Game Over</h2>
							<button onClick={controller.restart}>
								New game
							</button>
						</div>
					)}
				</div>
			)}
		</Tetris>
	</div>
);
```

include some styles

```css
.game-block {
	margin: 0;
	padding: 0;
	width: 1.5em;
	height: 1.5em;
	border: 1px solid #ddd;
}
.piece-i {
	background-color: #ec858b;
}
.piece-j {
	background-color: #f1b598;
}
.piece-l {
	background-color: #f8efae;
}
.piece-o {
	background-color: #b5a677;
}
.piece-s {
	background-color: #816e56;
}
.piece-t {
	background-color: #b77c72;
}
.piece-z {
	background-color: #e3be58;
}
.piece-preview {
	background-color: #eee;
}
```

# 📄 License

Copyright © 2022 [Barış DEMİRCİ](https://github.com/barbarbar338).

Distributed under the [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html) License. See `LICENSE` for more information.

# 🧦 Contributing

Feel free to use GitHub's features.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/my-feature`)
3. Run prettier and eslint (`npm run format && npm run lint`)
4. Commit your Changes (`git commit -m 'my awesome feature my-feature'`)
5. Push to the Branch (`git push origin feature/my-feature`)
6. Open a Pull Request

# 🔥 Show your support

Give a ⭐️ if this project helped you!

# 📞 Contact

-   Mail: demirci.baris38@gmail.com
-   Discord: https://discord.gg/BjEJFwh
-   Instagram: https://www.instagram.com/ben_baris.d/

# ✨ Special Thanks

-   [Matt Brandly](https://github.com/brandly) - Creator of [react-tetris](https://github.com/brandly/react-tetris)
