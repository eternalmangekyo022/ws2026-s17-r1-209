import { ChangeEvent, useState } from 'react'

type Props = {
	rules: IInputRule,
	validate: () => void
}

export default function Input({ rules: { isNum, length: [min, max] } }: Props) {
	const [input, setInput] = useState('');
	const [error, setError] = useState('');

	function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
		const { target: { value: inputVal }} = e;
		if(inputVal.length > max) e.preventDefault()
		else setInput(inputVal)
	}

	return <>
		<div className="input-group">
            <label htmlFor="input-2">Input Error</label>
            <input onChange={handleOnChange} value={input} type={isNum ? 'number': 'text'} id="input-2" className={error ? 'error': ''} />
			{error && <span className="input-error">{error}</span>}
        </div>
	</>
}