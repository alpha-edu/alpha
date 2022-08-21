export default async function LoginStudent(email, password) {

    const payload = {
        email, password
    }

    try {
        const response = await fetch("https://alpha-edu.herokuapp.com/login/student",
            {
                method: "POST",
                body: JSON.stringify(payload),
            }
        )

        const result = await response.json();
        console.log(result)
        return result;

    } catch (error) {
        console.error(error)
    }

}