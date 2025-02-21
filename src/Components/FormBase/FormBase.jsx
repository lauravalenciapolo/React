
export function LoginForm({data, handleSubmit, handleChange}) {

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.subTitle}</p>
            <form onSubmit={handleSubmit}>
                {data.inputs.map((input, index) => (
                    <div key={index}>
                        <label>{input.label}</label>
                        <input type={input.type} name={input.name} onChange={handleChange}/>
                    </div>
                ))}
                <button>{data.nameButton}</button>
            </form>
        </div>
    )
}

export default LoginForm