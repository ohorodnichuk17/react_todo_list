import {forwardRef, useImperativeHandle, useRef} from "react";

const Input = forwardRef(function Input({label, textArea, ...props}, ref) {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        get value() {
            return inputRef.current.value;
        }
    }));

    const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

    return <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold
            uppercase text-stone-500">
            {label}
        </label>
        {textArea ? <textarea ref={inputRef} className={classes} {...props} />
            : <input ref={inputRef} className={classes} {...props} />}
    </p>
});

export default Input;