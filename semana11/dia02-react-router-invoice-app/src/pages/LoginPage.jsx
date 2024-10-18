const LoginPage = () => {
  return (
    <main>
      <div>
        <h2>Invoice App</h2>

        <p>Ingresa un nombre de usuario y password.</p>

        <form>
          <label>
            <span>Username</span>
            <input
              type="text"
              placeholder="jhondoe"
              name="username"
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              placeholder="************"
              name="password"
            />
          </label>
          <input
            type="submit"
            value='Login'
          />
        </form>
      </div>
    </main>
  )
}

export default LoginPage