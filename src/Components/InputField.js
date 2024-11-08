export default function InputField({label = "Input", ...props}) {
    return (
        <div className="input-group">
            <label>{ label }</label>
            <input {...props} />
        </div>
    );
}