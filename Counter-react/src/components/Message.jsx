export const Message = ({msg, className, value=""}) => {
    const myClassName = `${className} text-center`
    return(<h2 className={myClassName}> {msg} {value}</h2>)
}