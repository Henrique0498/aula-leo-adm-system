interface AuthInputProps {
  label: string
  value: number | string
  type?: 'text' | 'email' | 'password'
  required?: boolean
  onChange: (value: string) => void
}

const AuthInput = (props: AuthInputProps) => {
  return (
    <div className={`flex flex-col mt-2`}>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        id={props.label}
        type={props.type ?? 'text'}
        value={props.value}
        onChange={(e) => props.onChange?.(e.target.value)}
        required={props.required}
        autoComplete="off"
        className={`
          px-4 py-3 rounded-lg bg-gray-200
          border focus:border-blue-500 focus:outline-none focus:bg-white
        `}
      />
    </div>
  )
}

export default AuthInput
