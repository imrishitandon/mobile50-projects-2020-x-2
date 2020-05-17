export const login = async (username, password) => {
  const response = {ok: "true", message: "success"}

  if (response.ok) {
    return true
  }

  const errMessage = await response.text()
  throw new Error(errMessage)
}
