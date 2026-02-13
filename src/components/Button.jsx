function Button(props) {
    return (
        <button {...props} className="bg-slate-400 text-white rounded-md p-2 text-center">{props.children}</button>
    )
}

export default Button;
