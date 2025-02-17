import Input from '../components/Input';

export default function Register() {
	return <>
			<Input labelText='Name' id={1} rules={{ length: [3, 32] }} />
			<Input labelText='Register' textArea rules={{ length: [10, 256] }} />
			<div className="input-row">
				<Input labelText='Postal Code' id={2} rules={{ isNum: true, length: [4, 4] }} />
				<Input labelText='City' id={3} rules={{ length: [3, 32] }} />
				<Input labelText='Address' id={4} rules={{ length: [5, 128] }} />
			</div>
	</>
}