import React, { useState, useEffect, createContext } from 'react';

const WalletContext = createContext();

// eslint-disable-next-line react/prop-types
export function WalletContextProvider({ children }) {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({
		totalAmmountEarned: null,
		currentBalance: null,
		earnings: [],
		spent: [],
		walletHistory: [],
	});

	const withdraw = () => {
		setData({
			...data,
			currentBalance: data.currentBalance - 1000,
		});
	};

	async function fetchData() {
		const response1 = await fetch(
			'https://slime-deserted-tuesday.glitch.me//wallet'
		);
		const actualData1 = await response1.json();

		const response2 = await fetch(
			'https://slime-deserted-tuesday.glitch.me//earnings'
		);
		const actualData2 = await response2.json();

		const response3 = await fetch(
			'https://slime-deserted-tuesday.glitch.me//spent'
		);
		const actualData3 = await response3.json();

		const response4 = await fetch(
			'https://slime-deserted-tuesday.glitch.me//walletHistory'
		);
		const actualData4 = await response4.json();

		setData((prevState) => ({
			...prevState,
			totalAmmountEarned: actualData2.totalAmmountEarned,
			currentBalance: actualData1.currentBalance,
			earnings: actualData2,
			spent: actualData3,
			walletHistory: actualData4,
		}));
	}

	useEffect(() => {
		fetchData();
		setLoading(false);
	}, []);

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<WalletContext.Provider value={{ data, loading, withdraw }}>
			{children}
		</WalletContext.Provider>
	);
}

export default WalletContext;
