export default function InputField({label = "Input", ...props}) {
    return (
        <div>
            <label>{ label }</label>
            <input {...props} />
        </div>
    );
}