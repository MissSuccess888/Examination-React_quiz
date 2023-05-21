import React from 'react';
import './index.scss';

const questions = [
	{
		title: 'Кто из президентов США написал свой собственный рассказ про Шерлока Холмса?',
		variants: ['Джон Кеннеди', 'Франклин Рузвельт', 'Рональд Рейган'],
		correct: 1,
	},
	{
		title: 'Туристы, приезжающие на Майорку, обязаны заплатить налог…?',
		variants: ['На плавки', 'На пальмы', 'На солнце'],
		correct: 2,
	},
	{
		title: 'Российский мультфильм, удостоенный «Оскара», — это…?',
		variants: [
			'«Простоквашино»',
			'«Старик и море»',
			'«Ну, погоди!»',
		],
		correct: 1,
	},
	{
		title: ' Что в Российской империи было вещевым эквивалентом денег?',
		variants: [
			'Шкуры пушных зверей',
			'Крупный рогатый скот',
			'Женские серьги',
		],
		correct: 0,
	},
	{
		title: 'Откуда пошло выражение «деньги не пахнут?',
		variants: [
			'От подателей за провоз парфюмерии',
			'От сборов за нестиранные носки',
			'От налога на туалеты',
		],
		correct: 2,
	}
];

function Result({ correct }) {
	return (
		<div className="result">
			<img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='' />
			<h2>Вы отгадали {correct} ответа из {questions.length}</h2>
			<a href='/'>
				<button>Попробовать снова</button>
			</a>

		</div>
	);
}

function Game({ question, onClickVariant, step }) {
	const percent = Math.round((step / questions.length) * 100);
	return (
		<>
			<div className="progress">
				<div style={{ width: `${percent}%` }} className="progress__inner"></div>
			</div>
			<h1>{question.title}</h1>
			<ul>
				{question.variants.map((item, index) => (
					<li key={item} onClick={() => onClickVariant(index)}>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

function App() {

	// this.state = {
	//   step: 0
	// }
	const [step, setStep] = React.useState(0);
	const [correct, setCorrect] = React.useState(0);
	const question = questions[step];

	const onClickVariant = (index) => {
		console.log(step, index);
		setStep(step + 1);
		if (index === question.correct) {
			setCorrect(correct + 1);
		}
	}
	return (
		<div className="App">
			{
				step < questions.length ?
					<Game
						question={question}
						onClickVariant={onClickVariant}
						step={step}
					/>
					: <Result correct={correct} />
			}
		</div>
	);
}

export default App;
